import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { NewsList } from "./news-list";

export const metadata = { title: "Tin tức & Sự kiện | IES Sài Gòn" };

export default function TinTucPage() {
  return (
    <>
      <SiteHeader active="/tin-tuc" />

      <main className="bg-surface">
        {/* Hero */}
        <section className="relative flex h-[260px] flex-col justify-center overflow-hidden bg-primary-container text-on-primary">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-tertiary-fixed-dim/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-80 w-80 rounded-full bg-secondary-container/15 blur-2xl" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-8 lg:px-8">
            <nav className="mb-3 flex items-center gap-2 text-xs text-white/80">
              <a href="/" className="flex items-center gap-1 transition-colors hover:text-tertiary-fixed">
                <span className="material-symbols-outlined text-[16px]">home</span>Trang chủ
              </a>
              <span className="text-white/40">/</span>
              <span className="font-semibold text-tertiary-fixed">Tin tức & Sự kiện</span>
            </nav>
            <div className="max-w-3xl space-y-2">
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">Tin tức & Sự kiện IES</h1>
              <p className="max-w-2xl leading-relaxed text-white/90">
                Cập nhật kịp thời thông báo tuyển sinh, hoạt động ngoại khóa thực tiễn và nhịp sống sinh viên IES.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
            <svg className="relative block h-12 w-full text-surface lg:h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,45 L1200,120 L0,120 Z" fill="currentColor" />
              <path d="M0,25 C300,110 550,20 800,85 C1000,130 1120,40 1200,60 L1200,120 L0,120 Z" fill="#2DBEDC" opacity="0.18" />
            </svg>
          </div>
        </section>

        <NewsList />

        {/* Tiêu điểm */}
        <section className="mx-auto max-w-[1280px] px-4 pb-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-0 overflow-hidden rounded-3xl bg-surface-container-lowest shadow-[0_8px_32px_rgba(15,85,135,0.06)] lg:grid-cols-12 lg:gap-8">
            <div className="group relative p-4 sm:p-6 lg:col-span-7 lg:p-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-dim">
                <img
                  src="/images/campus.png"
                  alt="Lễ tốt nghiệp niên khóa 2023 - 2025"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 px-3 py-1 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">photo_camera</span>
                    Lễ tốt nghiệp niên khóa 2023 - 2025
                  </span>
                  <span className="hidden items-center gap-1 text-white/90 sm:inline-flex">
                    <span className="material-symbols-outlined text-[14px]">visibility</span>2,840 lượt xem
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-6 p-6 sm:p-8 lg:col-span-5 lg:pl-0 lg:pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#2DBEDC]/15 px-3 py-1 text-xs font-semibold text-primary">Tiêu điểm giáo dục</span>
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-xs text-on-surface-variant">Đời sống sinh viên</span>
                <span className="ml-auto flex items-center gap-1 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>15/03/2026
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-primary lg:text-[28px]">
                Lễ tốt nghiệp niên khóa mới: 92% học sinh có việc làm sau khi hoàn thành khóa học
              </h2>
              <p className="leading-relaxed text-on-surface-variant">
                Khẳng định mô hình đào tạo thực chiến gắn với mạng lưới hơn 50 doanh nghiệp đối tác tại TP.HCM. Hàng trăm tân tốt nghiệp hệ Trung cấp đã ký hợp đồng làm việc trước ngày nhận bằng.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col rounded-xl bg-surface-container-low p-3.5">
                  <span className="font-display text-xl font-bold text-primary">92%</span>
                  <span className="text-xs text-on-surface-variant">Có việc làm sau 6 tháng (Khảo sát 2025)</span>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container-low p-3.5">
                  <span className="font-display text-xl font-bold text-[#005a6a]">100%</span>
                  <span className="text-xs text-on-surface-variant">Hỗ trợ liên thông đại học</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <a href="/dang-ky" className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary">
                  Đọc toàn bộ bài viết
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bản tin đăng ký */}
        <section className="mx-auto max-w-[1280px] px-4 pb-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#F6EEE5] p-8 shadow-[0_8px_30px_rgba(245,130,50,0.06)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#F58232]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#2DBEDC]/10 blur-2xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined text-[28px] text-primary-container">mail</span>
              </span>
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary">Đăng ký nhận bản tin tuyển sinh</h2>
                <p className="mx-auto max-w-lg leading-relaxed text-on-surface-variant">
                  Nhận thông báo về mốc nộp hồ sơ, chỉ tiêu từng ngành và chính sách học bổng dành cho học sinh tốt nghiệp THCS. Để lại thông tin tại form tư vấn và ban tuyển sinh sẽ liên hệ.
                </p>
              </div>
              <a href="/#dang-ky" className="inline-block rounded-full bg-cta px-8 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-cta-hover">
                Đăng ký nhận tư vấn
              </a>
              <p className="text-xs text-on-surface-variant/70">* IES cam kết bảo mật tuyệt đối thông tin liên hệ.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
