"use client";

import { useState } from "react";

const INDUSTRIES = [
  { value: "cntt", label: "CNTT & Phần mềm" },
  { value: "dohoa", label: "Thiết kế đồ họa" },
  { value: "qtkd", label: "Quản trị doanh nghiệp" },
  { value: "tmdt", label: "Thương mại điện tử" },
  { value: "ketoan", label: "Kế toán & Tài chính" },
];

const field =
  "h-12 w-full rounded-lg border border-line bg-surface px-4 text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-brand focus:bg-white";

// Không có bảng lưu riêng cho doanh nghiệp, nên form mở email gửi tới ban hợp tác.
export function PartnerForm() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const company = String(fd.get("company") ?? "").trim();
    const contact = String(fd.get("contact") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!company || !contact || !phone || !email) {
      setError("Vui lòng điền đầy đủ các trường bắt buộc (*).");
      return;
    }
    if (!/^(?:\+84|0)\d{9,10}$/.test(phone.replace(/\s/g, ""))) {
      setError("Số điện thoại không hợp lệ.");
      return;
    }
    setError(null);

    const industries = fd.getAll("industries").map(String).join(", ");
    const body = [
      `Doanh nghiệp: ${company}`,
      `Người liên hệ: ${contact}`,
      `Điện thoại: ${phone}`,
      `Email: ${email}`,
      `Ngành quan tâm: ${industries || "(chưa chọn)"}`,
      "",
      `Ghi chú:`,
      String(fd.get("notes") ?? ""),
    ].join("\n");
    const subject = `Yêu cầu hợp tác doanh nghiệp - ${company}`;
    window.location.href = `mailto:tuyensinh@ies.edu.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl bg-white p-8 shadow-md sm:p-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-sm font-semibold text-ink">Tên doanh nghiệp / Tổ chức <span className="text-red-600">*</span></span>
          <input name="company" placeholder="VD: Công ty Cổ phần Công nghệ ABC" className={field} />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-semibold text-ink">Người liên hệ & chức vụ <span className="text-red-600">*</span></span>
          <input name="contact" placeholder="VD: Nguyễn Văn A - Trưởng phòng Tuyển dụng" className={field} />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-semibold text-ink">Số điện thoại <span className="text-red-600">*</span></span>
          <input name="phone" type="tel" placeholder="VD: 0912 345 678" className={field} />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-semibold text-ink">Email công vụ <span className="text-red-600">*</span></span>
          <input name="email" type="email" placeholder="VD: hr@company.com" className={field} />
        </label>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-ink">Ngành nghề quan tâm tuyển dụng / thực tập</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((i) => (
            <label key={i.value} className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface p-3 transition-colors hover:bg-brand-soft">
              <input type="checkbox" name="industries" value={i.value} className="h-4 w-4 rounded" />
              <span className="text-sm text-ink">{i.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-1.5">
        <span className="text-sm font-semibold text-ink">Ghi chú nhu cầu hợp tác</span>
        <textarea name="notes" rows={4} placeholder="VD: Cần tiếp nhận 10 thực tập sinh ngành lập trình web từ tháng 6/2026..." className="w-full rounded-lg border border-line bg-surface p-4 text-ink placeholder:text-muted/60 outline-none focus:border-brand focus:bg-white" />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
        <p className="flex items-center gap-2 text-xs text-muted">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          Thông tin được bảo mật theo quy định
        </p>
        <button type="submit" className="w-full rounded-full bg-cta px-8 py-3.5 font-bold tracking-wide text-white shadow-md transition-colors hover:bg-cta-hover sm:w-auto">
          Gửi yêu cầu hợp tác
        </button>
      </div>
    </form>
  );
}
