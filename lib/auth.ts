import "server-only";
import { createSessionClient } from "@/lib/supabase/server";

export type AppRole = "admin" | "ba";

// Xác thực JWT qua Supabase Auth và đọc role từ app_metadata.
export async function requireRole(allowed: AppRole[]) {
  const supabase = createSessionClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const role = user?.app_metadata?.role as AppRole | undefined;
  if (!user || !role || !allowed.includes(role)) {
    return null;
  }
  return { user, role };
}
