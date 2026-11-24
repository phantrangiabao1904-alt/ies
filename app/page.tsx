import { Suspense } from "react";
import { LeadForm } from "@/components/landing/lead-form";
import { PageViewTracker } from "@/components/landing/page-view-tracker";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Faq } from "@/components/landing/faq";
import { InterestPicker } from "@/components/landing/interest-picker";
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar";
import { HeroPhoneForm } from "@/components/landing/hero-phone-form";
import { CtaLink } from "@/components/landing/cta-link";
import { MajorProvider } from "@/components/landing/major-context";
import { MAJORS } from "@/lib/majors";
import { createPublicClient } from "@/lib/supabase/public";

// ISR: tạo static, làm mới mỗi 60s. Admin lưu thứ tự sẽ gọi revalidatePath("/").
export const revalidate = 60;

// Dải uy tín: số liệu và đối tác gộp thành một hàng.
const STATS = [
  { value: "10+", label: "Năm đào tạo" },
  { value: "5.000+", label: "Học viên" },
  { value: "50+", label: "Doanh nghiệp đối tác" },
  { value: "92%", label: "Có việc làm sau 6 tháng" },
];

const PARTNERS = ["TechNova", "Saigon Digital", "Minh Phát", "An Khang", "Lạc Việt", "BlueWave"];

const STORIES = [
  { name: "Lê Hoàng Phúc", age: 18, major: "Ngành TMĐT", img: "/images/phuc.png", quote: "Em được thực chiến kinh doanh ngay kỳ đầu, hiện tự tin làm chủ shop online doanh số đều." },
  { name: "Trần Thu Hà", age: 20, major: "Thiết kế Đồ họa", img: "/images/ha.png", quote: "Được thầy cô kèm sát đồ án thực tế, bộ portfolio tốt nghiệp giúp em trúng tuyển agency ngay." },
  { name: "Nguyễn Minh Khôi", age: 19, major: "Ngành CNTT", img: "/images/khoi.png", quote: "Vừa có bằng THPT vừa có bằng nghề, kỳ thực tập em được doanh nghiệp giữ lại làm chính thức." },
];

const AFTER_SUBMIT = [
  { icon: "call", t: "Tư vấn viên gọi hoặc nhắn Zalo trong 24 giờ" },
  { icon: "fact_check", t: "Hướng dẫn hồ sơ học bạ THCS cần chuẩn bị" },
  { icon: "event", t: "Mời tham gia buổi tư vấn và tham quan xưởng" },
];

function SectionTitle({ overline, title }: { overline: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="inline-block h-[3px] w-8 rounded-full bg-cta" />
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{overline}</span>
      </div>
      <h2 className="font-display text-3xl font-bold text-primary-container md:text-4xl">{title}</h2>
    </div>
  );
}

export default async function HomePage() {
  const supabase = createPublicClient();
  const [{ data: courses }, { data: sections }] = await Promise.all([
    supabase.from("courses").select("id, name").order("position"),
    supabase.from("sections").select("id, key, title, body").order("position"),
  ]);

  // Ngành trên form lấy từ MAJORS (cùng nguồn với thẻ), để tên khớp giữa thẻ và form.
  void courses;
  const majorNames = MAJORS.map((m) => m.name);

  return (
    <MajorProvider>
      <PageViewTracker />
      <SiteHeader />

      <main className="flex w-full flex-col bg-surface pb-24 xl:pb-0">
        {/* 1. Hero: một thông điệp, một nút chính, một nút phụ, ô số điện thoại. */}
        <section id="hero" className="border-b border-outline-variant/30 bg-surface-container-lowest py-12 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12 lg:px-8">
            <div className="flex flex-col gap-5 lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Tuyển sinh 2026</span>
              <h1 className="font-display text-4xl font-bold leading-tight text-primary lg:text-[44px]">
                Học nghề sớm, vững sự nghiệp mai sau
              </h1>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Thực hành thiết bị thật, thầy cô kèm cặp, cam kết việc làm sau tốt nghiệp.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <CtaLink href="#dang-ky" event="cta_register" className="inline-flex min-h-[48px] items-center rounded-full bg-cta px-7 py-3 font-semibold text-white shadow-md transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta">
                  Đăng ký ngay
                </CtaLink>
                <CtaLink href="#nganh-dao-tao" className="inline-flex min-h-[48px] items-center rounded-full border-2 border-primary/40 px-6 py-3 font-semibold text-primary transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Xem 6 ngành học
                </CtaLink>
              </div>
              <HeroPhoneForm />
            </div>

            <div className="relative flex items-center justify-center lg:col-span-6">
              <div className="absolute h-full w-full translate-x-3.5 translate-y-3.5 rounded-[28px] bg-sand" />
              <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container shadow-xl">
                <img
                  src="/images/campus.png"
                  alt="Sinh viên IES thực hành chuyên sâu"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Dải uy tín: số liệu và đối tác trong một hàng. */}
        <section id="uy-tin" aria-label="Số liệu và đối tác" className="border-b border-outline-variant/40 bg-surface-container-low py-8">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 lg:px-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-primary">{s.value}</span>
                <span className="text-sm text-on-surface-variant">{s.label}</span>
              </div>
            ))}
            <span className="hidden text-xs uppercase tracking-wider text-outline lg:inline">Đối tác:</span>
            <span className="text-sm font-semibold text-primary">{PARTNERS.join(" · ")}</span>
          </div>
        </section>

        {/* 3. Ngành đào tạo: 6 thẻ cùng tỷ lệ ảnh, nút nói đúng việc nó làm. */}
        <section id="nganh-dao-tao" className="border-b border-outline-variant/30 bg-surface-container-lowest py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mb-10 flex flex-col gap-3">
              <SectionTitle overline="Chương trình đào tạo" title="6 Ngành học thực tiễn, đón đầu xu hướng" />
              <p className="max-w-2xl text-on-surface-variant">Chương trình đào tạo tinh gọn, 70% thực hành bám sát doanh nghiệp.</p>
            </div>
            <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
              {MAJORS.map((m) => (
                <li key={m.id} id={`nganh-${m.id}`} className="w-[78%] shrink-0 snap-start md:w-auto">
                  <article className="flex h-full flex-col overflow-hidden rounded-card border border-outline-variant/60 bg-surface-container-lowest shadow-sm transition-all hover:-translate-y-0.5 hover:border-secondary hover:shadow-md">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                      <img
                        src={m.img}
                        alt={m.name}
                        width={640}
                        height={480}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[22px] text-primary">{m.icon}</span>
                          <h3 className="font-display text-lg font-bold text-primary">{m.name}</h3>
                        </div>
                        <p className="text-sm text-on-surface-variant">{m.desc}</p>
                      </div>
                      <CtaLink
                        href="#dang-ky"
                        event="cta_register"
                        majorName={m.name}
                        className="flex min-h-[48px] items-center justify-between rounded-lg border border-outline-variant/40 px-4 text-sm font-semibold text-secondary transition-colors hover:bg-surface-container-low hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      >
                        Nhận tư vấn ngành này
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </CtaLink>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Ngành nào hợp với bạn? Bấm sở thích sẽ chọn sẵn ngành trong form. */}
        <section id="dinh-huong-nganh" className="bg-primary-container py-16 text-white lg:py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-tertiary-fixed">Định hướng bản thân</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Ngành nào hợp với bạn?</h2>
              <p className="mt-2 text-white/85">Chọn sở thích nổi bật của bạn để định hướng ngành nghề chính xác nhất.</p>
            </div>
            <InterestPicker />
          </div>
        </section>

        {/* 5. Câu chuyện học viên: đặt trước FAQ và form, đổi nền để tạo nhịp. */}
        <section id="cau-chuyen" className="bg-surface-container-low py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <SectionTitle overline="Người thật · Việc thật" title="Trải nghiệm thực tế & Câu chuyện học sinh" />
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="relative overflow-hidden rounded-2xl shadow-lg lg:col-span-5">
                <img src="/images/campus.png" alt="Hoạt động sinh viên IES" width={800} height={600} loading="lazy" className="h-full min-h-[280px] w-full object-cover" />
              </div>
              <ul className="flex flex-col gap-4 lg:col-span-7">
                {STORIES.map((st) => (
                  <li key={st.name} className="flex items-start gap-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-5 shadow-sm">
                    <img src={st.img} alt={`Ảnh ${st.name}`} width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 rounded-full border-2 border-tertiary-fixed object-cover" />
                    <div className="flex-1">
                      <p className="text-sm italic leading-relaxed text-ink">“{st.quote}”</p>
                      <p className="mt-2 text-sm font-bold text-primary">{st.name} ({st.age} tuổi) · <span className="font-semibold text-secondary">{st.major}</span></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. FAQ (mục đầu mở sẵn) và 7. Form đăng ký: cùng một điểm đến cho mọi nút "Đăng ký". */}
        <section id="dang-ky" className="scroll-mt-20 bg-surface-container-lowest pb-28 pt-16 lg:py-20 xl:pb-20">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 px-4 lg:grid-cols-12 lg:px-8">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <SectionTitle overline="Hỏi đáp tuyển sinh" title="Câu hỏi thường gặp" />
              <Faq />
              {(sections ?? []).map((s) => (
                <div key={s.id} className="rounded-xl border border-outline-variant/60 bg-surface-container-low p-6 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                  {s.body && <p className="mt-3 whitespace-pre-line text-on-surface">{s.body}</p>}
                </div>
              ))}
            </div>
            <div className="lg:sticky lg:top-24 lg:col-span-5">
              <Suspense fallback={null}>
                <LeadForm majors={majorNames} />
              </Suspense>
              <ol className="mt-6 flex flex-col gap-3 rounded-card border border-outline-variant/60 bg-surface-container-low p-5">
                <li className="text-sm font-bold text-primary">Điều gì xảy ra sau khi gửi?</li>
                {AFTER_SUBMIT.map((a, i) => (
                  <li key={a.t} className="flex items-center gap-3 text-sm text-ink">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <span className="material-symbols-outlined text-[18px]">{a.icon}</span>
                    </span>
                    <span>Bước {i + 1}: {a.t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileCtaBar />
    </MajorProvider>
  );
}
