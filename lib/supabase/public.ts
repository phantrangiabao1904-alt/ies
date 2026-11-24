import "server-only";
import { createClient } from "@supabase/supabase-js";

// Client ẩn danh không đọc cookie, để trang public vẫn static/ISR. RLS chỉ cho đọc dòng is_visible.
export function createPublicClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Thiếu SUPABASE_URL hoặc SUPABASE_ANON_KEY trong môi trường");
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
