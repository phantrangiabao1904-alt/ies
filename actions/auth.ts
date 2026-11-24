"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSessionClient } from "@/lib/supabase/server";

const loginSchema = z.object({
  email: z.string().trim().email().max(200),
  password: z.string().min(8).max(200),
});

export async function login(_prev: { error: string | null }, formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: "Email hoặc mật khẩu không hợp lệ" };
  }

  const supabase = createSessionClient();
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error || !data.user) {
    return { error: "Sai email hoặc mật khẩu" };
  }

  const role = data.user.app_metadata?.role;
  redirect(role === "admin" ? "/admin" : role === "ba" ? "/ba" : "/");
}

export async function logout() {
  const supabase = createSessionClient();
  await supabase.auth.signOut();
  redirect("/login");
}
