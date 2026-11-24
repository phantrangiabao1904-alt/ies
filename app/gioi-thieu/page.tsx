import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { PageBanner } from "@/components/landing/page-banner";

const VALUES = [
  { icon: "menu_book", title: "Học để làm được", desc: "Mỗi bài học gắn với việc cụ thể làm được sau khi học. Đào tạo gắn liền nhu cầu thực tế doanh nghiệp." },
  { icon: "group", title: "Đồng hành đến cùng", desc: "Thầy cô theo sát từng học sinh từ ngày nhập học, định hướng kỹ năng nghề nghiệp và kết nối việc làm." },
  { icon: "local_library", title: "Thực học - Thực nghiệp", desc: "Giáo trình tích hợp thực tế, phòng học mô phỏng doanh nghiệp giúp học viên tự tin làm việc ngay." },
];

const FACILITIES = [
  { img: "/images/lab.png", label: "Phòng lab máy tính cấu hình cao", icon: "desktop_windows", span: "lg:row-span-2" },
  { img: "/images/studio.png", label: "Studio sáng tạo", icon: "palette" },
  { img: "/images/library.png", label: "Thư viện số", icon: "local_library" },
  { img: "/images/dorm.png", label: "Ký túc xá tiện nghi", icon: "bed" },
  { img: "/images/campus.png", label: "Khuôn viên trường", icon: "nature_people" },
];

const MILESTONES = [
  { tag: "Giai đoạn 1", title: "Thành lập", desc: "Thành lập trường & định hình sứ mệnh đào tạo nghề thực tiễn" },
  { tag: "Giai đoạn 2", title: "Phát triển", desc: "Mở rộng khối ngành Công nghệ thông tin theo nhu cầu thị trường" },
  { tag: "Giai đoạn 3", title: "Mở rộng", desc: "Mở rộng cơ sở, hiện đại hóa hệ thống phòng máy và studio" },
  { tag: "Giai đoạn 4", title: "Hợp tác", desc: "Ký kết mạng lưới liên kết 50+ doanh nghiệp đối tác thực tập" },
  { tag: "Hiện tại", title: "2026", desc: "1.5 – 2 năm nhận bằng Trung cấp chính quy; 3 năm hoàn tất chương trình văn hóa THPT để dự thi tốt nghiệp và liên thông Cao đẳng, Đại học" },
];

const LEADERS = [
  { img: "/images/principal.png", name: "Thầy Nguyễn Văn Nam", role: "Hiệu trưởng", desc: "Hơn 20 năm tâm huyết xây dựng mô hình giáo dục nghề nghiệp chuẩn hóa gắn kết nhà trường và doanh nghiệp." },
  { img: "/images/vice-f.png", name: "Cô Trần Thị Mai", role: "Phó Hiệu trưởng", desc: "Phụ trách chuyên môn đào tạo, đảm bảo chương trình bám sát yêu cầu năng lực thực tế thị trường." },
  { img: "/images/vice-m.png", name: "Thầy Lê Quốc Bảo", role: "Phó Hiệu trưởng", desc: "Chuyên trách công tác hỗ trợ học sinh, định hướng nghề nghiệp và liên kết cơ hội việc làm." },
];

export default function GioiThieuPage() {
  return (
    <>
      <SiteHeader active="/gioi-thieu" />
      <PageBanner crumb="Giới thiệu" title="Giới thiệu về IES" subtitle="Kiến tạo nền tảng nghề nghiệp vững chắc, hiện đại và chuẩn mực thực tiễn cho thế hệ trẻ." />

      <main className="bg-surface">
        {/* Tổng quan */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-5 lg:col-span-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-[3px] w-8 rounded-full bg-cta" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue2">Về chúng tôi</span>
                </div>
                <h2 className="font-display text-3xl font-bold leading-tight text-brand md:text-4xl">
                  Trường nghề của những người trẻ muốn làm được việc
                </h2>
                <p className="leading-relaxed text-muted">
                  Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) đào tạo trung cấp các ngành công nghệ và kinh tế, lấy thực hành làm trung tâm. Chúng tôi chú trọng xây dựng tư duy nghề nghiệp chuyên nghiệp, tính kỷ luật cùng năng lực ứng dụng công nghệ thực tế.
                </p>
                <p className="leading-relaxed text-muted">
                  Tại IES, học sinh vừa học văn hóa vừa học nghề, làm quen thiết bị thật và dự án thật ngay từ năm đầu. Mô hình giáo dục rút ngắn lộ trình trưởng thành, giúp học viên tự tin làm việc hoặc liên thông đại học khi tốt nghiệp.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm font-semibold text-brand">
                    <span className="material-symbols-outlined text-[20px] text-cyan">verified</span> 70% Thời lượng thực hành dự án
                  </span>
                  <span className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm font-semibold text-brand">
                    <span className="material-symbols-outlined text-[20px] text-cyan">business_center</span> Kết nối doanh nghiệp trực tiếp
                  </span>
                </div>
              </div>
              <div className="relative lg:col-span-6">
                <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-2xl bg-sand" />
                <img src="/images/lab.png" alt="Giảng viên và học viên tại trường IES"
                  className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title} className="flex flex-col items-start rounded-card bg-surface p-6 shadow-sm">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue2 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">{v.icon}</span>
                  </span>
                  <h3 className="mb-1 font-display text-lg font-bold text-blue2">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cơ sở vật chất */}
        <section className="border-y border-line bg-surface py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue2">Cơ sở vật chất</span>
              <h2 className="font-display text-3xl font-bold text-brand">Không gian học tập & Thực hành chuẩn doanh nghiệp</h2>
              <p className="text-muted">Trang thiết bị đồng bộ, hiện đại, tái hiện môi trường làm việc thực tiễn.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FACILITIES.map((f) => (
                <div key={f.label} className={`group relative h-[240px] overflow-hidden rounded-card border border-line bg-white shadow-sm ${f.span ?? ""}`}>
                  <img src={f.img} alt={f.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-brand/90 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[16px] text-cyan">{f.icon}</span>
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pháp lý */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue2">Pháp lý & Chuẩn đầu ra</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-brand">Thông tin pháp lý & Văn bằng chính quy</h2>
                <p className="mt-2 text-muted">Hệ thống văn bằng chính quy được Bộ Lao động - Thương binh & Xã hội công nhận, đảm bảo pháp lý vững vàng cho học sinh.</p>
              </div>
              <dl className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
                {[
                  ["Tên pháp lý", "Trường Trung cấp Tin học Kinh tế Sài Gòn"],
                  ["Cơ quan chủ quản & cấp phép", "Sở Giáo dục và Đào tạo TP.HCM"],
                  ["Kiểm định chất lượng đào tạo", "Bộ Giáo dục và Đào tạo (Bộ GD&ĐT)"],
                  ["Loại hình văn bằng", "Bằng Trung cấp Chính quy (liên thông Cao đẳng, Đại học)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col justify-between gap-1 px-5 py-4 sm:flex-row sm:items-center">
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="font-semibold text-brand">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[340px]">
                <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-2xl bg-sand" />
                <img src="/images/diploma.png" alt="Văn bằng tốt nghiệp chính quy IES"
                  className="relative z-10 aspect-[3/4] w-full rounded-2xl border border-line object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Hành trình */}
        <section className="border-y border-line bg-surface py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue2">Hành trình</span>
              <h2 className="font-display text-3xl font-bold text-brand">Những mốc đáng nhớ</h2>
            </div>
            <ol className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {MILESTONES.map((m, i) => {
                const current = i === MILESTONES.length - 1;
                return (
                  <li key={m.title} className="flex flex-col items-center text-center">
                    <span className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-md ${current ? "bg-brand text-cyan" : "bg-white"}`}>
                      <span className={`h-4 w-4 rounded-full ${current ? "bg-cyan" : "bg-blue2"}`} />
                    </span>
                    <span className={`mb-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${current ? "bg-brand text-white" : "bg-brand-soft text-blue2"}`}>{m.tag}</span>
                    <h3 className="font-display text-lg font-bold text-brand">{m.title}</h3>
                    <p className="mt-1 max-w-[180px] text-sm text-muted">{m.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Lãnh đạo */}
        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue2">Đội ngũ chuyên gia</span>
              <h2 className="font-display text-3xl font-bold text-brand">Đội ngũ Lãnh đạo & Giảng viên tiêu biểu</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {LEADERS.map((l) => (
                <div key={l.name} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
                  <img src={l.img} alt={l.name} className="mb-4 h-40 w-40 rounded-xl object-cover shadow-inner" />
                  <h3 className="font-display text-lg font-bold text-brand">{l.name}</h3>
                  <span className="mt-0.5 text-sm font-semibold text-blue2">{l.role}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{l.desc}</p>
                </div>
              ))}
              <div className="flex flex-col items-center justify-between rounded-2xl border-2 border-blue2/20 bg-white p-6 text-center shadow-sm">
                <div className="flex flex-col items-center">
                  <span className="mb-3 mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-surface text-blue2">
                    <span className="material-symbols-outlined text-[32px]">groups</span>
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand">Ban Giảng viên</h3>
                  <span className="mt-0.5 text-sm font-semibold text-blue2">Thực chiến doanh nghiệp</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">100% giảng viên đạt chuẩn chuyên môn nghiệp vụ sư phạm nghề và có kinh nghiệm thực tế tại doanh nghiệp đối tác.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-sand p-8 shadow-md md:flex-row md:p-12">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="font-display text-3xl font-bold text-brand">Sẵn sàng bắt đầu cùng IES?</h2>
                <p className="max-w-xl text-muted">Để lại thông tin, ban tuyển sinh sẽ liên hệ tư vấn lộ trình học phù hợp nhất cho bạn trong ngày làm việc.</p>
              </div>
              <div className="flex shrink-0 flex-col items-center">
                <a href="/#dang-ky" className="rounded-full bg-cta px-8 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-cta-hover">Đăng ký xét tuyển</a>
                <span className="mt-2 text-sm font-medium text-brand">Hoặc gọi <strong className="font-bold">09xx.xxx.xxx</strong></span>
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
