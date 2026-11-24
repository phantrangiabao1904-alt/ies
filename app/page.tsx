import { LeadForm } from "@/components/landing/lead-form";
import { PageViewTracker } from "@/components/landing/page-view-tracker";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Faq } from "@/components/landing/faq";
import { createPublicClient } from "@/lib/supabase/public";

// ISR: tạo static, làm mới mỗi 60s. Admin lưu thứ tự sẽ gọi revalidatePath("/").
export const revalidate = 60;

const STATS = [
  { value: "10+", label: "Năm đào tạo", note: "Kinh nghiệm thực tiễn vững vàng" },
  { value: "5.000+", label: "Học viên", note: "Tốt nghiệp vững tay nghề lập nghiệp" },
  { value: "50+", label: "Doanh nghiệp đối tác", note: "Đồng hành thực tập và tuyển dụng" },
  { value: "92%", label: "Có việc làm sau 6 tháng", note: "Theo khảo sát tốt nghiệp chính thức" },
];

const PARTNERS = [
  { icon: "memory", name: "TechNova" },
  { icon: "language", name: "Saigon Digital" },
  { icon: "storefront", name: "Minh Phát" },
  { icon: "account_balance", name: "An Khang" },
  { icon: "local_shipping", name: "Lạc Việt" },
  { icon: "hub", name: "BlueWave" },
];

const MAJORS = [
  { icon: "terminal", title: "1. Công nghệ thông tin", desc: "Lập trình ứng dụng, phát triển phần mềm và xây dựng website thực chiến.", img: "/images/lab.png" },
  { icon: "palette", title: "2. Thiết kế đồ họa", desc: "Sáng tạo ấn phẩm truyền thông, đồ họa quảng cáo và thiết kế UI/UX.", img: "/images/design.png" },
  { icon: "dns", title: "3. Quản trị mạng & An ninh mạng", desc: "Vận hành hệ thống máy chủ, đám mây và bảo vệ an ninh mạng.", img: "/images/campus.png" },
  { icon: "receipt_long", title: "4. Kế toán doanh nghiệp số", desc: "Thành thạo chứng từ kế toán, kê khai thuế số và phần mềm MISA.", img: "/images/counseling.png" },
  { icon: "business_center", title: "5. Quản trị kinh doanh & Dịch vụ", desc: "Kỹ năng quản lý bán hàng, dịch vụ khách hàng và điều hành dự án.", img: "/images/counseling.png" },
  { icon: "shopping_cart", title: "6. Thương mại điện tử", desc: "Kinh doanh online, livestream bán hàng và vận hành sàn Shopee, TikTok.", img: "/images/ecommerce.png" },
];

const INTERESTS = [
  { icon: "code", title: "Lập trình & Công nghệ", desc: "Thích logic & máy tính" },
  { icon: "palette", title: "Sáng tạo & Mỹ thuật", desc: "Đam mê vẽ & mỹ thuật số" },
  { icon: "security", title: "Bảo mật & Hệ thống", desc: "Thích bảo mật & phần cứng" },
  { icon: "calculate", title: "Tài chính & Kế toán", desc: "Yêu thích con số & tài chính" },
  { icon: "groups", title: "Quản trị & Điều hành", desc: "Thích giao tiếp & quản lý" },
  { icon: "storefront", title: "Bán hàng & E-commerce", desc: "Mê bán lẻ & kinh doanh online" },
];

const STORIES = [
  { name: "Lê Hoàng Phúc", age: 18, major: "Ngành TMĐT", img: "/images/phuc.png", quote: "Em được thực chiến kinh doanh ngay kỳ đầu, hiện tự tin làm chủ shop online doanh số đều." },
  { name: "Trần Thu Hà", age: 20, major: "Thiết kế Đồ họa", img: "/images/ha.png", quote: "Được thầy cô kèm sát đồ án thực tế, bộ portfolio tốt nghiệp giúp em trúng tuyển agency ngay." },
  { name: "Nguyễn Minh Khôi", age: 19, major: "Ngành CNTT", img: "/images/khoi.png", quote: "Vừa có bằng THPT vừa có bằng nghề, kỳ thực tập em được doanh nghiệp giữ lại làm chính thức." },
];

function SectionTitle({ overline, title, align = "left" }: { overline: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "mx-auto max-w-2xl items-center text-center" : ""}`}>
      <div className="flex items-center gap-2">
        {align === "left" && <span className="inline-block h-[3px] w-8 rounded-full bg-cta" />}
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{overline}</span>
        {align === "center" && <span className="inline-block h-[3px] w-8 rounded-full bg-cta" />}
      </div>
      <h2 className="font-display text-3xl font-bold text-primary-container md:text-4xl">{title}</h2>
    </div>
  );
}

export default async function HomePage() {
  const supabase = createPublicClient();
  const [{ data: sections }, { data: courses }] = await Promise.all([
    supabase.from("sections").select("id, key, title, body").order("position"),
    supabase.from("courses").select("id, name").order("position"),
  ]);

  const majors = (courses ?? []).map((c) => c.name);

  return (
    <>
      <PageViewTracker />
      <SiteHeader />

      <main className="flex w-full flex-col bg-surface">
        {/* Hero */}
        <section id="gioi-thieu" className="border-b border-outline-variant/30 bg-surface-container-lowest py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-[3px] w-8 rounded-full bg-cta" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Tuyển sinh 2026</span>
                </div>
                <h1 className="font-display text-4xl font-bold leading-tight text-primary lg:text-[44px]">
                  Học nghề sớm, vững sự nghiệp mai sau
                </h1>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  Thực hành thiết bị thật, thầy cô kèm cặp, cam kết việc làm sau tốt nghiệp.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { icon: "verified", t: "Xét tuyển học bạ" },
                    { icon: "payments", t: "Hỗ trợ học phí NĐ 81" },
                    { icon: "school", t: "Song bằng Trung cấp & THPT" },
                  ].map((b) => (
                    <span key={b.t} className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/50 bg-surface-container px-3.5 py-1.5 text-xs font-semibold text-primary">
                      <span className="material-symbols-outlined text-[18px] text-secondary">{b.icon}</span>
                      {b.t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#dang-ky" className="whitespace-nowrap rounded-full bg-cta px-7 py-3 font-semibold text-white shadow-md transition-colors hover:bg-cta-hover">
                    Đăng ký ngay
                  </a>
                  <a href="#nganh-dao-tao" className="whitespace-nowrap rounded-full border-2 border-primary/40 px-6 py-3 font-semibold text-primary transition-colors hover:bg-surface-container-low">
                    Xem 6 ngành học
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:col-span-7">
                <div className="absolute h-full w-full translate-x-3.5 translate-y-3.5 rounded-[28px] bg-sand" />
                <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container shadow-xl">
                  <img src="/images/campus.png" alt="Sinh viên IES thực hành chuyên sâu" className="h-full w-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-outline-variant/40 bg-surface-container-lowest/95 p-4 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                      </span>
                      <div>
                        <p className="font-display text-sm font-bold text-on-surface">70% thời lượng thực hành xưởng</p>
                        <p className="text-xs text-on-surface-variant">Phòng Lab & thiết bị chuẩn doanh nghiệp</p>
                      </div>
                    </div>
                    <span className="hidden rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-semibold text-on-tertiary-fixed sm:inline-block">Khóa 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats + đối tác */}
        <section className="border-b border-outline-variant/40 bg-surface-container-low py-16">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((s) => (
                <Reveal key={s.label}>
                  <div className="flex h-full flex-col gap-1 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm">
                    <span className={`font-display text-4xl font-bold leading-none ${s.value === "92%" ? "text-secondary" : "text-primary"}`}>{s.value}</span>
                    <span className="font-display text-base font-bold text-on-surface">{s.label}</span>
                    <span className="text-sm text-on-surface-variant">{s.note}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-outline">
                Doanh nghiệp đối tác tuyển dụng tiêu biểu
              </p>
              <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
                {PARTNERS.map((p) => (
                  <span key={p.name} className="flex items-center gap-2 font-display text-lg font-bold text-primary">
                    <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 ngành */}
        <section id="nganh-dao-tao" className="border-b border-outline-variant/30 bg-surface-container-lowest py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <SectionTitle overline="Chương trình đào tạo" title="6 Ngành học thực tiễn, đón đầu xu hướng" />
              <p className="max-w-md text-on-surface-variant">Chương trình đào tạo tinh gọn, 70% thực hành bám sát doanh nghiệp.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MAJORS.map((m) => (
                <div key={m.title} className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container-lowest shadow-sm transition-all hover:-translate-y-0.5 hover:border-secondary hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden bg-surface-container">
                    <img src={m.img} alt={m.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[22px] text-primary">{m.icon}</span>
                        <h3 className="font-display text-lg font-bold text-primary">{m.title}</h3>
                      </div>
                      <p className="text-sm text-on-surface-variant">{m.desc}</p>
                    </div>
                    <a href="#dang-ky" className="flex items-center gap-1 border-t border-outline-variant/30 pt-3 text-sm font-semibold text-secondary">
                      Xem chi tiết <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trắc nghiệm định hướng + câu chuyện */}
        <section id="dinh-huong" className="bg-primary-container py-20 text-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-4 lg:px-8">
            <div>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-tertiary-fixed">Định hướng bản thân</span>
                <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Ngành nào hợp với bạn?</h2>
                <p className="mt-2 text-white/85">Chọn sở thích nổi bật của bạn để định hướng ngành nghề chính xác nhất.</p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {INTERESTS.map((it) => (
                  <div key={it.title} className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/20">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-tertiary-fixed">
                      <span className="material-symbols-outlined text-[24px]">{it.icon}</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-base font-bold">{it.title}</span>
                      <span className="text-sm text-white/85">{it.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/20 pt-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold">Trải nghiệm thực tế & Câu chuyện học sinh</h3>
                  <p className="text-sm text-white/75">Học nghề từ lớp 9 – Tự tin lập nghiệp ở tuổi 18, 19</p>
                </div>
                <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-tertiary-fixed sm:inline-block">Người thật · Việc thật</span>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-lg lg:col-span-5">
                  <img src="/images/campus.png" alt="Hoạt động sinh viên IES" className="h-full min-h-[280px] w-full object-cover" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6">
                    <div>
                      <span className="text-xs font-semibold text-tertiary-fixed">Môi trường học tập năng động</span>
                      <p className="text-sm text-white/90">Học sinh được cọ xát sự kiện, rèn kỹ năng mềm và làm việc nhóm thực thụ.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-3 lg:col-span-7">
                  {STORIES.map((st) => (
                    <div key={st.name} className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 p-4">
                      <img src={st.img} alt={st.name} className="h-12 w-12 shrink-0 rounded-full border-2 border-tertiary-fixed object-cover" />
                      <div className="flex-1">
                        <p className="text-sm italic leading-relaxed text-white/95">“{st.quote}”</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-sm font-bold">{st.name} ({st.age} tuổi)</span>
                          <span className="text-xs text-tertiary-fixed">{st.major}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + form */}
        <section id="dang-ky" className="bg-surface-container-low py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-6 lg:col-span-7">
                <SectionTitle overline="Hỏi đáp tuyển sinh" title="Câu hỏi thường gặp" />
                <Faq />
                {(sections ?? []).map((s) => (
                  <Reveal key={s.id}>
                    <div className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
                      <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                      {s.body && <p className="mt-3 whitespace-pre-line text-on-surface">{s.body}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="lg:sticky lg:top-24 lg:col-span-5">
                <LeadForm majors={majors} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Nút nổi */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
        <a href="https://zalo.me" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#0068FF] px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1">
          <span className="material-symbols-outlined text-[20px]">chat</span> Tư vấn Zalo
        </a>
        <a href="tel:09xxxxxxxx"
          className="flex items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1">
          <span className="material-symbols-outlined text-[20px]">call</span> Hotline: 09xx.xxx.xxx
        </a>
      </div>
    </>
  );
}
