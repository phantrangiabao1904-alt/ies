import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { PageBanner } from "@/components/landing/page-banner";
import { Faq } from "@/components/landing/faq";
import { QUOTAS, STEPS, DOCS, POLICIES, ADMISSION_FAQ } from "./data";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-bold uppercase tracking-wider text-blue2">{children}</span>
);

export default function TuyenSinhPage() {
  const total = QUOTAS.reduce((s, q) => s + q.quota, 0);

  return (
    <>
      <SiteHeader active="/tuyen-sinh" />
      <PageBanner
        crumb="Tuyển sinh 2026"
        title="Tuyển sinh 2026 - Học nghề thực tiễn"
        subtitle="Mô hình song bằng: tốt nghiệp THCS học nghề nhận bằng Trung cấp chính quy và hoàn thành chương trình THPT."
      >
        <div className="hidden min-w-[220px] rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md lg:block">
          <span className="block text-xs uppercase tracking-wider text-white/80">Nhận hồ sơ đợt 1</span>
          <span className="mt-1 block font-display text-xl font-bold">Đến 30/08/2026</span>
          <span className="mt-1 block text-xs text-white/80">Ưu tiên 500 suất đầu tiên</span>
        </div>
      </PageBanner>

      <main className="bg-surface">
        {/* Đối tượng & chỉ tiêu */}
        <section className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl space-y-2 text-center">
            <Eyebrow>Chương trình đào tạo trọng điểm</Eyebrow>
            <h2 className="font-display text-3xl font-bold text-brand">Đối tượng & chỉ tiêu tuyển sinh 2026</h2>
            <p className="text-muted">Xét tuyển rộng mở, không áp lực thi cử, định hướng nghề nghiệp vững vàng ngay sau cấp 2.</p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { icon: "school", title: "Học sinh tốt nghiệp THCS (lớp 9)", desc: "Học tích hợp: 1,5 – 2 năm nhận bằng Trung cấp chính quy; 3 năm hoàn tất văn hóa THPT để thi tốt nghiệp và liên thông Cao đẳng, Đại học.", method: "Xét tuyển học bạ lớp 9 (không thi tuyển)" },
              { icon: "workspace_premium", title: "Thí sinh tốt nghiệp THPT", desc: "Rút ngắn thời gian lấy nghề còn 1,5 năm, dành 80% thời lượng cho xưởng thực hành, dự án thực tế và kết nối doanh nghiệp tại TP.HCM.", method: "Xét tuyển học bạ lớp 12 hoặc bằng THPT" },
            ].map((c) => (
              <div key={c.title} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <span className="material-symbols-outlined text-[26px]">{c.icon}</span>
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand">{c.title}</h3>
                  <p className="leading-relaxed text-muted">{c.desc}</p>
                </div>
                <p className="mt-6 flex items-center gap-3 rounded-xl bg-surface p-4 text-sm text-ink">
                  <span className="material-symbols-outlined text-blue2">task_alt</span>
                  <span>Phương thức: <strong className="text-brand">{c.method}</strong></span>
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="flex flex-col justify-between gap-3 bg-brand p-6 text-white md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-xl font-bold">Chỉ tiêu 6 ngành đào tạo trọng điểm</h3>
                <p className="text-sm text-white/80">Niên khóa 2026, chỉ tiêu đợt 1 (dữ liệu minh họa)</p>
              </div>
              <span className="self-start rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold md:self-auto">Tổng: {total} chỉ tiêu</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-dark text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th className="px-6 py-4">STT</th>
                    <th className="px-6 py-4">Ngành đào tạo</th>
                    <th className="px-6 py-4 text-center">Chỉ tiêu đợt 1</th>
                    <th className="px-6 py-4 text-center">Thời gian</th>
                    <th className="px-6 py-4">Bằng cấp</th>
                  </tr>
                </thead>
                <tbody>
                  {QUOTAS.map((q, i) => (
                    <tr key={q.no} className={i % 2 ? "bg-surface" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand">{q.no}</td>
                      <td className="px-6 py-4 font-semibold">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[20px] text-blue2">{q.icon}</span>{q.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-brand">{q.quota}</td>
                      <td className="px-6 py-4 text-center text-muted">1,5 - 2 năm</td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue2">Trung cấp chính quy</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-brand-dark via-brand to-blue2 p-8 text-white shadow-lg lg:flex-row lg:items-center">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">policy</span> NĐ 81/2021/NĐ-CP & ưu đãi 2026
              </span>
              <div className="font-display text-3xl font-extrabold text-cyan">HỖ TRỢ 100% HỌC PHÍ NGHỀ</div>
              <p className="text-sm leading-relaxed text-white/90">
                Học sinh hoàn thành lớp 9 đăng ký học nghề tại IES được cấp bù học phí học nghề theo quy định. Nhà trường hỗ trợ trọn gói hồ sơ, chia nhỏ đợt đóng học phí văn hóa và có KTX an ninh cho học sinh xa nhà.
              </p>
            </div>
            <a href="/#dang-ky" className="shrink-0 rounded-full bg-cta px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-cta-hover">
              Nhận bảng tính hỗ trợ
            </a>
          </div>
        </section>

        {/* 4 bước */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mb-12 space-y-2">
              <Eyebrow>Thủ tục đơn giản, nhanh chóng</Eyebrow>
              <h2 className="font-display text-3xl font-bold text-brand">Lộ trình 4 bước xét tuyển tinh gọn</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex flex-col justify-between rounded-2xl bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display font-bold text-white">{i + 1}</span>
                      <span className="material-symbols-outlined text-[28px] text-cyan">{s.icon}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-brand">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                  <p className="mt-6 text-xs font-bold text-blue2">{s.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hồ sơ & chính sách */}
        <section className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
            <Eyebrow>Hồ sơ & quyền lợi học viên</Eyebrow>
            <h2 className="font-display text-3xl font-bold text-brand">Thủ tục hồ sơ & chính sách hỗ trợ</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-5 rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand">Hồ sơ đăng ký & biểu mẫu nhập học</h3>
              <ul className="space-y-3">
                {DOCS.map((d, i) => (
                  <li key={d.t} className="flex items-start gap-3 rounded-xl bg-surface p-3.5">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-brand">check_circle</span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{i + 1}. {d.t}</p>
                      <p className="text-sm text-muted">{d.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="rounded-xl bg-sand p-4 text-sm leading-relaxed text-ink">
                <strong className="text-brand">Lưu ý:</strong> có thể nộp trước ảnh học bạ qua Zalo tuyển sinh để được duyệt sớm giữ chỉ tiêu, bổ sung bản công chứng khi nhập học.
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand">Học phí & hỗ trợ của Nhà nước</h3>
              {POLICIES.map((p) => (
                <div key={p.title} className="space-y-2 rounded-xl bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand">{p.icon}</span>
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">{p.tag}</span>
                  </div>
                  <h4 className="font-display font-bold text-brand">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-brand p-4 text-white">
                <div className="text-sm">
                  <span className="block font-bold text-cyan">Cần tư vấn trực tiếp?</span>
                  <span className="text-white/80">Thứ 2 - Thứ 7 (7h30 - 17h00)</span>
                </div>
                <span className="font-display text-lg font-bold">09xx.xxx.xxx</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-10 space-y-2 text-center">
              <Eyebrow>Giải đáp băn khoăn</Eyebrow>
              <h2 className="font-display text-3xl font-bold text-brand">Câu hỏi thường gặp về tuyển sinh 2026</h2>
            </div>
            <Faq items={ADMISSION_FAQ} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand py-20 text-white">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md md:flex-row md:p-12">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-display text-3xl font-bold">Sẵn sàng cho hành trình học nghề thực tiễn?</h2>
                <p className="text-white/85">Đăng ký ngay để được ưu tiên xét duyệt hồ sơ trong 48 giờ và giữ suất cấp bù học phí từ Nhà nước.</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a href="/#dang-ky" className="rounded-full bg-cta px-8 py-4 text-center font-bold shadow-lg transition-colors hover:bg-cta-hover">Đăng ký xét tuyển ngay</a>
                <a href="tel:09xxxxxxxx" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-semibold transition-colors hover:bg-white/20">Hotline: 09xx.xxx.xxx</a>
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
