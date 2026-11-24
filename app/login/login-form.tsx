"use client";

import { useFormState } from "react-dom";
import { login } from "@/actions/auth";

export function LoginForm() {
  const [state, action] = useFormState(login, { error: null as string | null });
  return (
    <form action={action} className="w-full max-w-sm space-y-3 rounded-xl bg-white p-6 shadow">
      <h1 className="text-xl font-bold">Đăng nhập quản trị</h1>
      <input name="email" type="email" required placeholder="Email"
        className="w-full rounded border px-3 py-2" />
      <input name="password" type="password" required minLength={8} placeholder="Mật khẩu"
        className="w-full rounded border px-3 py-2" />
      <button className="w-full rounded bg-brand px-4 py-2 font-semibold text-white">Đăng nhập</button>
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
