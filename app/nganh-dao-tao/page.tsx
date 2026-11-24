import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { PageBanner } from "@/components/landing/page-banner";
import { MAJORS } from "./data";
import { MajorFilter } from "./major-filter";

const MODEL = [
  { icon: "precision_manufacturing", title: "70% thời lượng thực hành", desc: "Phòng lab công nghệ, xưởng thiết kế và studio chuyên biệt. Học sinh giải quyết bài toán thực tế từ doanh nghiệp đối tác.", pct: "70%" },
  { icon: "menu_book", title: "30% lý thuyết & văn hóa THPT", desc: "Chương trình văn hóa THPT tinh gọn theo chuẩn Bộ GD&ĐT, làm nền tảng cho kỳ thi tốt nghiệp và xét tuyển đại học.", pct: "30%" },
  { icon: "handshake", title: "Cam kết giới thiệu việc làm", desc: "Hợp đồng bảo đảm giới thiệu thực tập và đầu ra với mạng lưới hơn 50 doanh nghiệp tại TP.HCM.", pct: "92%", note: "có việc làm sau 6 tháng (Khảo sát 2025)" },
];

const STATS = [
  { v: "10+", l: "Năm đào tạo" },
  { v: "5.000+", l: "Học viên tốt nghiệp" },
  { v: "50+", l: "Doanh nghiệp đối tác" },
  { v: "92%", l: "Có việc làm sau 6 tháng" },
];

export default function NganhDaoTaoPage() {
  return (
    <>
      <SiteHeader active="/nganh-dao-tao" />
      <PageBanner
        crumb="Ngành đào tạo"
        title="6 ngành đào tạo trọng điểm 2026"
        subtitle="Đào tạo chuyên sâu kỹ năng thực hành, bám sát nhu cầu nhân lực số của doanh nghiệp tại TP.HCM. Thời gian tinh gọn 1,5 - 2 năm, lộ trình liên thông đại học thuận lợi."
      />

      <main className="bg-surface">
        {/* Mô hình 3 bên */}
        <section className="border-b border-line bg-white py-20">
          <div className="mx-auto max-w-[1280px] space-y-10 px-4 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue2">Phương pháp đào tạo tiên phong</span>
              <h2 className="font-display text-3xl font-bold text-brand">Mô hình đào tạo nghề 3 bên</h2>
              <p className="text-muted">Gắn kết <strong className="font-semibold text-brand">Nhà trường - Doanh nghiệp - Người học</strong>, tối đa hóa thời lượng thực tế và cam kết vững tay nghề khi tốt nghiệp.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-surface p-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.l} className="p-3 text-center">
                  <div className="font-display text-3xl font-bold text-brand">{s.v}</div>
                  <div className="text-xs font-medium text-muted">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {MODEL.map((m) => (
                <div key={m.title} className="flex flex-col justify-between space-y-4 rounded-2xl border border-line bg-surface p-6 shadow-sm">
                  <div className="space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 text-brand">
                      <span className="material-symbols-outlined text-[28px]">{m.icon}</span>
                    </span>
                    <h3 className="font-display text-lg font-bold text-brand">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{m.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-line pt-3 text-xs font-medium text-muted">
                    <span className="font-display text-lg font-bold text-brand">{m.pct}</span>
                    <span>{m.note ?? "Tỷ trọng chương trình"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 ngành */}
        <section className="mx-auto max-w-[1280px] space-y-8 px-4 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-2 inline-block rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">Hệ trung cấp 9+ & THPT</span>
              <h2 className="font-display text-3xl font-bold text-brand">Danh sách 6 ngành đào tạo tiêu chuẩn</h2>
              <p className="mt-1 text-muted">Thời gian đào tạo đồng bộ <strong className="font-semibold text-brand">1,5 - 2 năm</strong>. Tốt nghiệp nhận bằng Trung cấp chính quy và chứng nhận kỹ năng chuyên sâu.</p>
            </div>
          </div>

          <MajorFilter majors={MAJORS} />
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1280px] px-4 pb-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-sand p-8 shadow-sm md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="space-y-3 lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cta">
                  <span className="material-symbols-outlined text-[16px]">campaign</span> Tuyển sinh đợt 1 - Khóa 2026
                </span>
                <h2 className="font-display text-3xl font-bold text-brand">Sẵn sàng bắt đầu tương lai nghề nghiệp cùng IES?</h2>
                <p className="max-w-xl leading-relaxed text-ink">Để lại thông tin, ban tư vấn sẽ liên hệ chi tiết lộ trình học tập, học bổng và học phí phù hợp trong ngày làm việc.</p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted">
                  <span>Hotline tư vấn: <strong className="font-semibold text-brand">09xx.xxx.xxx</strong></span>
                  <span>Hỗ trợ 08:00 - 17:30 (Thứ 2 - Thứ 7)</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
                <a href="/#dang-ky" className="w-full rounded-full bg-cta px-8 py-3.5 text-center font-bold text-white shadow-md transition-colors hover:bg-cta-hover sm:w-auto">Đăng ký xét tuyển ngay</a>
                <a href="/tuyen-sinh" className="w-full rounded-full bg-white px-6 py-2.5 text-center font-semibold text-brand shadow-sm transition-colors hover:bg-surface sm:w-auto">Xem thông tin tuyển sinh</a>
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
