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
});

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    major: formData.get("major"),
  });
  if (!parsed.success) {
    return { ok: false, error: "Dữ liệu không hợp lệ" };
  }

  // anon key + RLS: the only permitted operation is INSERT on `leads`.
  // Never use the service role key here.
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );

  // supabase-js sends values as JSON parameters through PostgREST, not as concatenated SQL.
  // No .select() chained: anon has no SELECT policy, so a returning insert would be rejected.
  const { error } = await supabase.from("leads").insert(parsed.data);
  if (error) {
    return { ok: false, error: "Không thể gửi đăng ký, vui lòng thử lại" };
  }

  return { ok: true };
}
