import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { DocBrowser } from "./doc-browser";

export const metadata = { title: "Công khai chất lượng giáo dục | IES Sài Gòn" };

const METRICS = [
  { v: "10+", l: "Năm đào tạo chuẩn mực" },
  { v: "5.000+", l: "Học sinh tốt nghiệp vững nghề" },
  { v: "50+", l: "Doanh nghiệp đối tác" },
  { v: "92%", l: "Có việc làm sau 6 tháng", accent: true },
];

const SURVEY = [
  { l: "Đúng chuyên ngành CNTT & Thiết kế", v: 68, c: "bg-primary" },
  { l: "Khối Kinh tế - Thương mại điện tử", v: 24, c: "bg-secondary" },
  { l: "Học liên thông Cao đẳng / Đại học", v: 8, c: "bg-cta" },
];

export default function CongKhaiPage() {
  return (
    <>
      <SiteHeader active="/cong-khai" />

      <main className="bg-surface">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-container pb-20 pt-12 text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-tertiary-fixed/10 blur-2xl" />
          <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-4 text-center lg:px-8">
            <nav className="mb-3 flex items-center gap-2 text-xs text-white/80">
              <a href="/" className="hover:text-white">Trang chủ</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="font-semibold text-tertiary-fixed">Công khai chất lượng giáo dục</span>
            </nav>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-tertiary-fixed backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Cổng thông tin ba công khai giáo dục nghề nghiệp
            </span>
            <h1 className="mb-3 max-w-4xl font-display text-3xl font-bold tracking-tight md:text-5xl">
              Minh bạch thông tin – Cam kết chất lượng đào tạo
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Thực hiện quy định ba công khai theo hướng dẫn của Bộ GD&amp;ĐT và Sở GD&amp;ĐT TP.HCM, bảo đảm quyền lợi của học sinh, phụ huynh và đối tác.
            </p>
            <div className="mb-10" />
            <div className="grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.l} className="flex flex-col items-center justify-center rounded-xl bg-surface-container-lowest/90 p-4 text-center shadow-sm backdrop-blur-sm">
                  <span className={`font-display text-3xl font-bold ${m.accent ? "text-cta" : "text-primary"}`}>{m.v}</span>
                  <span className="mt-1 text-[11px] uppercase tracking-wider text-on-surface-variant">{m.l}</span>
                </div>
              ))}
            </div>
          </div>
          <svg className="absolute bottom-0 left-0 block h-8 w-full text-surface sm:h-12 md:h-16" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
            <path d="M0,0 C360,65 720,80 720,80 C720,80 1080,65 1440,0 L1440,90 L0,90 Z" fill="currentColor" />
          </svg>
        </section>

        {/* Danh mục + văn bản */}
        <DocBrowser />

        {/* Khảo sát việc làm + bảo chứng */}
        <section className="mx-auto max-w-[1280px] px-4 pb-20 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Khảo sát việc làm 2025</span>
                <span className="text-xs text-outline">IES Survey</span>
              </div>
              <div className="space-y-4">
                {SURVEY.map((s) => (
                  <div key={s.l}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-on-surface">{s.l}</span>
                      <span className="font-bold text-primary">{s.v}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-surface-container">
                      <div className={`h-2 rounded-full ${s.c}`} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-8 shadow-md lg:col-span-7 lg:p-10">
              <div className="absolute left-0 right-0 top-0 h-2 bg-primary" />
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[36px]">verified_user</span>
                </span>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cta">
                    <span className="material-symbols-outlined text-[14px]">gavel</span>
                    Bảo chứng pháp lý quốc gia
                  </span>
                  <h2 className="font-display text-xl font-bold text-primary">Văn bằng Trung cấp chính quy thuộc Hệ thống Giáo dục Quốc dân</h2>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Bằng tốt nghiệp có giá trị sử dụng trên toàn quốc. Lộ trình: 1.5 – 2 năm nhận bằng Trung cấp chính quy; 3 năm hoàn tất chương trình văn hóa THPT để liên thông Cao đẳng, Đại học.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/dang-ky" className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95">
                  Đăng ký tư vấn tuyển sinh 2026
                </a>
                <a href="/tuyen-sinh" className="inline-flex items-center justify-center gap-2 rounded-full bg-surface-container-high px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-highest">
                  <span className="material-symbols-outlined text-[20px]">search_check</span>
                  Quy chế tuyển sinh 2026
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
