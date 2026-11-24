"use client";

import { useRef, useState, useTransition } from "react";
import { submitLead } from "@/actions/lead-submit";
import { trackEvent } from "@/actions/track-event";

export function LeadForm({ majors }: { majors: string[] }) {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const clickTracked = useRef(false);

  // Chỉ ghi một lần cho mỗi lần tải trang, tránh đếm trùng khi focus từng ô.
  function onFirstFocus() {
    if (clickTracked.current) return;
    clickTracked.current = true;
    trackEvent({ type: "form_click" });
  }

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitLead(formData);
      if (result.ok) {
        setMessage("Đăng ký thành công. Chúng tôi sẽ liên hệ sớm.");
        await trackEvent({ type: "form_submit" });
      } else {
        setMessage(result.error);
      }
    });
  }

  const field =
    "h-12 w-full rounded-lg border border-line bg-surface px-4 text-ink outline-none transition-colors focus:border-brand focus:bg-white";

  return (
    <form
      action={onSubmit}
      onFocus={onFirstFocus}
      className="flex flex-col gap-4 rounded-card border border-line bg-white p-6 shadow-md sm:p-8"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand">Đăng ký trực tuyến</span>
        <h2 className="mt-1 font-display text-2xl font-bold text-brand">Đăng ký xét tuyển 2026</h2>
        <p className="mt-1 text-sm text-muted">Ban tuyển sinh sẽ liên hệ hỗ trợ trong 24 giờ.</p>
      </div>
      <input name="name" required minLength={2} maxLength={100} placeholder="Ví dụ: Nguyễn Văn An"
        aria-label="Họ và tên học sinh" className={field} />
      <input name="phone" required inputMode="tel" placeholder="09xx xxx xxx"
        aria-label="Số điện thoại / Zalo" className={field} />
      <select name="major" required defaultValue="" aria-label="Ngành đào tạo quan tâm" className={field}>
        <option value="" disabled>Chọn ngành đào tạo quan tâm</option>
        {majors.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <button disabled={pending}
        className="w-full rounded-full bg-cta py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-cta-hover disabled:opacity-60">
        {pending ? "Đang gửi..." : "Gửi đăng ký xét tuyển ngay"}
      </button>
      {message && <p className="text-sm text-ink">{message}</p>}
      <p className="flex items-center justify-center gap-1 text-xs text-muted">
        <span className="material-symbols-outlined text-[15px]">lock</span>
        Cam kết bảo mật thông tin theo quy định
      </p>
    </form>
  );
}
