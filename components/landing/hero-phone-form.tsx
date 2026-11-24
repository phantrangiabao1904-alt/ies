"use client";

import { useState } from "react";
import { useMajorSelection } from "./major-context";

const PHONE_RE = /^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/;

// Ô số điện thoại ở màn hình đầu: lưu số rồi cuộn xuống form đăng ký để hoàn tất.
export function HeroPhoneForm() {
  const { setPhone } = useMajorSelection();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cleaned = value.replace(/[\s.-]/g, "");
    if (!PHONE_RE.test(cleaned)) {
      setError("Số điện thoại chưa đúng, ví dụ 09xx xxx xxx.");
      return;
    }
    setError(null);
    setPhone(cleaned);
    document.getElementById("dang-ky")?.scrollIntoView({ behavior: "smooth" });
    document.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2 rounded-card border border-line bg-white p-4 shadow-sm sm:flex-row sm:items-start">
      <label className="flex-1">
        <span className="sr-only">Số điện thoại hoặc Zalo</span>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập số điện thoại / Zalo"
          aria-invalid={!!error}
          aria-describedby={error ? "hero-phone-err" : undefined}
          className={`min-h-[48px] w-full rounded-lg border bg-surface px-4 text-ink outline-none focus:border-brand focus:bg-white ${error ? "border-red-500" : "border-line"}`}
        />
        {error && <span id="hero-phone-err" className="mt-1 block text-sm text-red-600">{error}</span>}
      </label>
      <button
        type="submit"
        className="min-h-[48px] shrink-0 rounded-lg bg-cta px-6 font-semibold text-white transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
      >
        Nhận tư vấn
      </button>
    </form>
  );
}
