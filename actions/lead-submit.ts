"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Only letters (any script), spaces, and . ' - are allowed in a name. Blocks <, >, quotes, etc.
const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[\p{L}\s.'-]+$/u),
  // Vietnamese mobile: 0xxxxxxxxx or +84xxxxxxxxx
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/),
  major: z.string().trim().min(2).max(100),
  // UTM là tùy chọn: rỗng hoặc thiếu thì lưu null. Giới hạn độ dài để tránh rác.
  utm_source: z.string().trim().max(100).optional(),
  utm_medium: z.string().trim().max(100).optional(),
  utm_campaign: z.string().trim().max(150).optional(),
  utm_content: z.string().trim().max(150).optional(),
  utm_term: z.string().trim().max(150).optional(),
});

function utmValue(v: string | undefined): string | null {
  return v && v.length > 0 ? v : null;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const str = (k: string) => {
    const v = formData.get(k);
    return typeof v === "string" ? v : undefined;
  };

  const parsed = leadSchema.safeParse({
    name: str("name"),
    phone: str("phone"),
    major: str("major"),
    utm_source: str("utm_source"),
    utm_medium: str("utm_medium"),
    utm_campaign: str("utm_campaign"),
    utm_content: str("utm_content"),
    utm_term: str("utm_term"),
  });
  if (!parsed.success) {
    return { ok: false, error: "Dữ liệu không hợp lệ" };
  }

  const { utm_source, utm_medium, utm_campaign, utm_content, utm_term, ...base } = parsed.data;
  const row = {
    ...base,
    utm_source: utmValue(utm_source),
    utm_medium: utmValue(utm_medium),
    utm_campaign: utmValue(utm_campaign),
    utm_content: utmValue(utm_content),
    utm_term: utmValue(utm_term),
  };

  // anon key + RLS: the only permitted operation is INSERT on `leads`.
  // Never use the service role key here.
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );

  // supabase-js sends values as JSON parameters through PostgREST, not as concatenated SQL.
  // No .select() chained: anon has no SELECT policy, so a returning insert would be rejected.
  const { error } = await supabase.from("leads").insert(row);
  if (error) {
    // Nếu migration 0004 chưa chạy, bảng chưa có cột utm_*: thử lại không kèm UTM để không mất lead.
    if (error.code === "PGRST204" && /utm_/.test(error.message)) {
      const { error: retryError } = await supabase.from("leads").insert(base);
      if (!retryError) return { ok: true };
    }
    console.error("[submitLead]", error.code, error.message);
    return { ok: false, error: "Không thể gửi đăng ký, vui lòng thử lại" };
  }

  return { ok: true };
}
