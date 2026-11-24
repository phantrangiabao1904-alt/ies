"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { submitLead } from "@/actions/lead-submit";
import { trackEvent } from "@/actions/track-event";
import { firePixels } from "@/lib/analytics";
import { useMajorSelection } from "./major-context";

type Errors = Partial<Record<"name" | "phone" | "major", string>>;

const PHONE_RE = /^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function LeadForm({ majors }: { majors: string[] }) {
  const { major, setMajor, phone, setPhone } = useMajorSelection();
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const clickTracked = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const params = useSearchParams();
  const router = useRouter();

  function onFirstFocus() {
    if (clickTracked.current) return;
    clickTracked.current = true;
    trackEvent({ type: "form_click" });
    firePixels("form_click");
  }

  // React 18 (Next 14) không hỗ trợ form action là hàm, nên dùng onSubmit + preventDefault.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const cleanPhone = String(formData.get("phone") ?? "").replace(/[\s.-]/g, "");
    const found: Errors = {};
    if (name.length < 2) found.name = "Vui lòng nhập họ và tên (ít nhất 2 ký tự).";
    if (!PHONE_RE.test(cleanPhone)) found.phone = "Số điện thoại chưa đúng, ví dụ 09xx xxx xxx.";
    if (!major) found.major = "Vui lòng chọn ngành quan tâm.";
    setErrors(found);
    setServerError(null);
    if (Object.keys(found).length > 0) {
      const key = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${key}"]`)?.focus();
      return;
    }

    formData.set("phone", cleanPhone);
    // UTM từ URL (ví dụ ?utm_source=tiktok) được gửi kèm để đo nguồn chuyển đổi.
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) formData.set(k, v);
    }

    startTransition(async () => {
      const result = await submitLead(formData);
      if (result.ok) {
        await trackEvent({ type: "form_submit" });
        firePixels("form_submit", { major });
        const qs = params.toString();
        router.push(qs ? `/cam-on?${qs}` : "/cam-on");
      } else {
        setServerError(result.error);
      }
    });
  }

  const field = (hasError: boolean) =>
    `min-h-[48px] w-full rounded-lg border bg-surface px-4 text-ink outline-none transition-colors focus:border-brand focus:bg-white ${
      hasError ? "border-red-500" : "border-line"
    }`;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onFocus={onFirstFocus}
      noValidate
      className="flex flex-col gap-4 rounded-card border border-line bg-white p-6 shadow-md sm:p-8"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand">Đăng ký trực tuyến</span>
        <h2 className="mt-1 font-display text-2xl font-bold text-brand">Đăng ký xét tuyển 2026</h2>
        <p className="mt-1 text-sm text-muted">Ban tuyển sinh sẽ liên hệ hỗ trợ trong 24 giờ.</p>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-ink">Họ và tên học sinh</span>
        <input
          name="name"
          autoComplete="name"
          maxLength={100}
          placeholder="Ví dụ: Nguyễn Văn An"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
          className={field(!!errors.name)}
        />
        {errors.name && <span id="err-name" className="text-sm text-red-600">{errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-ink">Số điện thoại / Zalo</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="09xx xxx xxx"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "err-phone" : undefined}
          className={field(!!errors.phone)}
        />
        {errors.phone && <span id="err-phone" className="text-sm text-red-600">{errors.phone}</span>}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-ink">Ngành quan tâm</span>
        <select
          name="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          aria-invalid={!!errors.major}
          aria-describedby={errors.major ? "err-major" : undefined}
          className={field(!!errors.major)}
        >
          <option value="">Chọn ngành đào tạo quan tâm</option>
          {majors.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {errors.major && <span id="err-major" className="text-sm text-red-600">{errors.major}</span>}
      </label>

      <button
        type="submit"
        disabled={pending}
        className="min-h-[48px] w-full rounded-full bg-cta py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Đang gửi..." : "Gửi đăng ký xét tuyển"}
      </button>

      {serverError && <p role="alert" className="text-sm text-red-600">{serverError}</p>}

      <p className="flex items-center justify-center gap-1 text-xs text-muted">
        <span className="material-symbols-outlined text-[15px]">lock</span>
        Cam kết bảo mật thông tin theo quy định
      </p>
    </form>
  );
}
