import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { PartnerForm } from "./partner-form";

export const metadata = { title: "Hợp tác doanh nghiệp | IES Sài Gòn" };

const PILLARS = [
  { icon: "menu_book", title: "Xây dựng & thẩm định giáo trình", desc: "Khung chương trình được hiệu chỉnh hàng năm với sự tham gia của giám đốc kỹ thuật và trưởng bộ phận nhân sự doanh nghiệp.", note: "70% thực hành đồ án thực tế" },
  { icon: "co_present", title: "Chuyên gia doanh nghiệp đứng lớp", desc: "Kỹ sư và chuyên gia thâm niên trực tiếp giảng các chuyên đề chuyên sâu và kỹ năng xử lý dự án.", note: "Mentor đồng hành theo dự án" },
  { icon: "paid", title: "Thực tập có lương & đón đầu tuyển dụng", desc: "Học viên tham gia thực tập (OJT) từ học kỳ 3-4, ưu tiên chuyển tiếp thành nhân viên chính thức khi nhận bằng.", note: "Ký cam kết đầu ra ngay kỳ 1" },
];

const PARTNERS = [
  { name: "TechNova", field: "Software System" },
  { name: "Saigon Digital", field: "Media & Network" },
  { name: "Minh Phát", field: "Trading & Retail" },
  { name: "An Khang", field: "Audit & Finance" },
  { name: "Lạc Việt", field: "Global Logistics" },
  { name: "BlueWave", field: "Cloud & Security" },
];

const STEPS = [
  { n: "01", title: "Khảo sát nhu cầu", desc: "Tiếp nhận mô tả công việc (JD), số lượng nhân sự và yêu cầu kỹ năng từ doanh nghiệp." },
  { n: "02", title: "Ký biên bản thỏa thuận", desc: "Xác lập thỏa thuận hợp tác về quyền lợi thực tập, lộ trình huấn luyện và chính sách đãi ngộ." },
  { n: "03", title: "Tiếp nhận & đánh giá", desc: "Đưa học sinh về thực tập tại đơn vị. Nhà trường và mentor doanh nghiệp cùng theo dõi sát sao." },
  { n: "04", title: "Tuyển dụng chính thức", desc: "Doanh nghiệp tuyển trực tiếp ứng viên đáp ứng tốt kỳ thực tập và ký hợp đồng lao động." },
];

export default function HopTacPage() {
  return (
    <>
      <SiteHeader active="/hop-tac" />

      <main className="bg-surface">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-container pb-16 pt-12 text-on-primary">
          <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-[1280px] px-4 lg:px-8">
            <nav className="mb-4 flex items-center gap-2 text-xs text-white/70">
              <a href="/" className="hover:text-white">Trang chủ</a>
              <span className="text-white/40">/</span>
              <span className="font-semibold text-tertiary-fixed">Hợp tác doanh nghiệp</span>
            </nav>
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-tertiary-fixed">
                <span className="material-symbols-outlined text-[15px]">handshake</span>
                Hệ sinh thái tuyển dụng & đào tạo IES 2026
              </span>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">Hợp tác doanh nghiệp & việc làm</h1>
              <p className="leading-relaxed text-white/85">
                Cầu nối thực tiễn giữa nhà trường và thị trường lao động. Đào tạo theo đơn đặt hàng, cam kết việc làm sau tốt nghiệp.
              </p>
            </div>
          </div>
          <svg className="absolute bottom-0 left-0 block h-10 w-full text-surface md:h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" aria-hidden>
            <path d="M0,0 C150,90 400,120 600,60 C800,0 1050,90 1200,40 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </section>

        {/* Mô hình 3 trụ cột */}
        <section className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">Mô hình đào tạo kép</span>
              <h2 className="font-display text-3xl font-bold text-on-surface md:text-4xl">Tam giác hợp tác Nhà trường – Doanh nghiệp – Học sinh</h2>
              <p className="text-on-surface-variant">Học gắn liền với năng lực giải quyết công việc thực tế, thu hẹp khoảng cách giữa giảng đường và nhu cầu tuyển dụng.</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 rounded-xl bg-surface-container p-4 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-primary">analytics</span>
              <div>
                <p className="text-sm font-bold text-primary">Khảo sát 2025</p>
                <p className="text-xs text-on-surface-variant">(Dữ liệu minh họa khảo sát việc làm)</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div>
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-[28px]">{p.icon}</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Trụ cột 0{i + 1}</span>
                  <h3 className="mb-3 mt-2 font-display text-xl font-semibold text-on-surface">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{p.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 rounded-lg bg-surface-container-low p-3 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                  {p.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Đối tác + Job Fair + Quy trình */}
        <section className="bg-surface-container-low py-20">
          <div className="mx-auto max-w-[1280px] space-y-16 px-4 lg:px-8">
            <div>
              <div className="mb-8 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Khối liên minh đối tác chiến lược</span>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {PARTNERS.map((p) => (
                  <div key={p.name} className="group flex h-24 flex-col items-center justify-center rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-shadow hover:shadow-md">
                    <span className="font-display text-base font-bold text-primary transition-colors group-hover:text-secondary">{p.name}</span>
                    <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">{p.field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Sự kiện thường niên</span>
                <h2 className="font-display text-3xl font-bold text-on-surface">IES Job Fair: Ngày hội việc làm trực tiếp</h2>
                <p className="leading-relaxed text-on-surface-variant">
                  Tổ chức hàng năm vào Quý 2 tại khuôn viên trường, thu hút hơn 40 gian hàng tuyển dụng, phỏng vấn thử việc và tuyển thực tập sinh năm cuối.
                </p>
                <div className="flex items-start gap-3.5 rounded-xl bg-surface-container-lowest p-4">
                  <span className="material-symbols-outlined mt-0.5 text-primary">how_to_reg</span>
                  <div>
                    <p className="font-bold text-on-surface">Phỏng vấn & thẩm định hồ sơ tại chỗ</p>
                    <p className="text-sm text-on-surface-variant">Doanh nghiệp chấm năng lực kỹ thuật và phỏng vấn trực tiếp sinh viên xuất sắc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 rounded-xl bg-surface-container-lowest p-4">
                  <span className="material-symbols-outlined mt-0.5 text-primary">terminal</span>
                  <div>
                    <p className="font-bold text-on-surface">Trưng bày đồ án tốt nghiệp</p>
                    <p className="text-sm text-on-surface-variant">Sản phẩm phần mềm, thiết kế số và thương mại điện tử do học sinh thực hiện được triển lãm mở.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm lg:col-span-7 lg:p-10">
                <span className="text-xs font-bold uppercase tracking-wider text-tertiary">Chuẩn hóa hợp tác</span>
                <h3 className="mt-1 font-display text-2xl font-bold text-primary">Quy trình tiếp nhận 4 bước dành cho doanh nghiệp</h3>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {STEPS.map((s) => (
                    <div key={s.n} className="relative flex flex-col justify-between rounded-xl bg-surface-container-low p-5">
                      <span className="mb-3 font-display text-4xl font-bold leading-none text-tertiary-fixed-dim/40">{s.n}</span>
                      <div>
                        <h4 className="mb-1.5 font-display font-bold text-primary">{s.title}</h4>
                        <p className="text-sm leading-relaxed text-on-surface-variant">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-surface-container pt-6 sm:flex-row">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">timer</span>
                    <span className="text-sm text-on-surface-variant">Thời gian xử lý thỏa thuận: trong vòng 48 giờ làm việc</span>
                  </div>
                  <a href="#form-hop-tac" className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-secondary">
                    Gửi yêu cầu ngay <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lãnh đạo đối tác */}
        <section className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="relative lg:col-span-7">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-sand" />
              <div className="relative z-10 overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
                <img src="/images/campus.png" alt="Lễ ký kết hợp tác giữa IES và doanh nghiệp" className="h-[400px] w-full object-cover" />
                <div className="flex items-center justify-between gap-4 bg-surface-container-lowest p-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[28px] text-secondary">contract</span>
                    <div>
                      <h4 className="font-bold text-primary">Thỏa thuận đào tạo & cung ứng nguồn nhân lực</h4>
                      <p className="text-sm text-on-surface-variant">Lễ ký kết chiến lược giữa IES và VinTech Solutions (Dữ liệu minh họa)</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded bg-surface-container px-3 py-1 text-xs font-semibold text-primary">Niên khóa 2026-2028</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Góc nhìn nhà tuyển dụng
              </span>
              <div className="relative rounded-xl bg-surface-container-lowest p-8 shadow-sm">
                <span className="material-symbols-outlined absolute right-6 top-4 select-none text-[48px] text-tertiary-fixed opacity-30">format_quote</span>
                <p className="relative z-10 mb-6 text-lg italic leading-relaxed text-on-surface">
                  “Chúng tôi ưu tiên tuyển dụng học sinh IES bởi tính kỷ luật, kỹ năng nghề thực tế và khả năng bắt nhịp ngay với công việc mà không mất thời gian tái đào tạo từ đầu.”
                </p>
                <div className="flex items-center gap-4 border-t border-surface-container pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-display text-lg font-bold text-white">Đ</div>
                  <div>
                    <p className="font-bold text-on-surface">Ông Trần Minh Đức</p>
                    <p className="text-sm text-on-surface-variant">Phó Tổng Giám Đốc Giải pháp Công nghệ VinTech</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-sand p-4">
                <span className="material-symbols-outlined shrink-0 text-cta">workspace_premium</span>
                <p className="text-sm text-on-surface">Chương trình thực tập sinh tiếp nhận sinh viên từ học kỳ thứ 3 tại các trung tâm phần mềm & dữ liệu số.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form doanh nghiệp */}
        <section id="form-hop-tac" className="bg-surface-container py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-[16px]">domain_add</span>
                Cổng đăng ký trực tuyến
              </span>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Kết nối tuyển dụng & đặt hàng đào tạo</h2>
              <p className="text-on-surface-variant">Bộ phận Quan hệ Doanh nghiệp IES sẽ liên hệ trao đổi trong vòng 24 giờ.</p>
            </div>
            <PartnerForm />
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-sand py-12">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 md:flex-row lg:px-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-on-surface">
                <span className="h-2 w-2 rounded-full bg-cta" />
                Đối tác doanh nghiệp
              </span>
              <h3 className="font-display text-2xl font-bold text-primary">Đồng hành kiến tạo thế hệ nhân lực thực tiễn vững tay nghề</h3>
              <p className="max-w-2xl text-on-surface-variant">
                Cần trao đổi trực tiếp thỏa thuận hợp tác chiến lược, vui lòng liên hệ Phòng Hợp tác Doanh nghiệp IES qua hotline công vụ: 09xx.xxx.xxx.
              </p>
            </div>
            <a href="#form-hop-tac" className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-container">
              Liên hệ hợp tác
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
