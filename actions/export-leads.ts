"use server";

import { requireRole } from "@/lib/auth";
import { createSessionClient } from "@/lib/supabase/server";

// Xuất CSV: chỉ admin/ba. Dùng session client nên RLS vẫn áp dụng.
export async function exportLeadsCsv(): Promise<{ ok: true; csv: string } | { ok: false; error: string }> {
  const auth = await requireRole(["admin", "ba"]);
  if (!auth) {
    return { ok: false, error: "Không có quyền" };
  }

  const supabase = createSessionClient();
  const { data, error } = await supabase
    .from("leads")
    .select("name, phone, major, created_at")
    .order("created_at", { ascending: false })
    .limit(5000);
  if (error || !data) {
    return { ok: false, error: "Không đọc được dữ liệu" };
  }

  // Chống CSV injection: ô bắt đầu bằng = + - @ được thêm dấu ' phía trước.
  const escape = (value: unknown) => {
    const text = String(value ?? "");
    const safe = /^[=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  };
  const header = "name,phone,major,created_at";
  const rows = data.map((r) => [r.name, r.phone, r.major, r.created_at].map(escape).join(","));
  return { ok: true, csv: [header, ...rows].join("\n") };
}
