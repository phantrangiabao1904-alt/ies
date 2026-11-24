import "server-only";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

type CookieToSet = { name: string; value: string; options: CookieOptions };

// Client gắn với session người dùng (anon key). RLS quyết định quyền truy cập.
export function createSessionClient() {
  const cookieStore = cookies();
  return createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (list: CookieToSet[]) => {
        list.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
      },
    },
  });
}
