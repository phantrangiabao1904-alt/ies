import { LeadForm } from "@/components/landing/lead-form";
import { PageViewTracker } from "@/components/landing/page-view-tracker";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingContact } from "@/components/landing/floating-contact";
import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 60;
export const metadata = { title: "Đăng ký xét tuyển trực tuyến 2026 | IES Sài Gòn" };

const STEPS = [
  { icon: "edit_note", title: "Điền thông tin", desc: "Họ tên, số điện thoại và ngành quan tâm. Chỉ mất 3-5 phút." },
  { icon: "support_agent", title: "Tư vấn trong 24 giờ", desc: "Ban tuyển sinh gọi điện hướng dẫn chọn ngành và hồ sơ." },
  { icon: "folder_open", title: "Nộp hồ sơ", desc: "Học bạ THCS, giấy khai sinh, CCCD và ảnh 3x4." },
  { icon: "task_alt", title: "Nhận kết quả", desc: "Xét tuyển bằng học bạ, không cần thi đầu vào." },
];

const COMMITMENTS = [
  { icon: "check", title: "Không thi tuyển đầu vào", desc: "Chỉ xét học bạ lớp 9 hoặc lớp 12." },
  { icon: "precision_manufacturing", title: "70% thời lượng thực hành", desc: "Thực hành trên phòng máy, studio và thực tập tại 50+ đối tác." },
  { icon: "workspace_premium", title: "Song bằng Trung cấp + THPT", desc: "1.5 – 2 năm nhận bằng Trung cấp; 3 năm hoàn tất văn hóa THPT." },
];

export default async function DangKyPage() {
  const supabase = createPublicClient();
  const { data: courses } = await supabase.from("courses").select("name").order("position");
  const majors = (courses ?? []).map((c) => c.name);

  return (
    <>
      <PageViewTracker />
      <SiteHeader active="/dang-ky" />

      <main className="bg-surface">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-container pb-16 pt-12 text-white">
          <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-4 text-center lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-white/80">
              <a href="/" className="hover:text-white">Trang chủ</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="font-semibold text-tertiary-fixed">Đăng ký xét tuyển</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-tertiary-fixed">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Tuyển sinh 2026 – Xét tuyển học bạ
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Đăng ký xét tuyển trực tuyến 2026</h1>
            <p className="max-w-2xl text-white/90">
              Hoàn tất trong 2 phút. Xét tuyển bằng học bạ THCS, không thi đầu vào, hỗ trợ học phí theo Nghị định 81.
            </p>
          </div>
          <svg className="absolute bottom-0 left-0 block h-8 w-full text-surface md:h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" aria-hidden>
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
            <path d="M0,15 C320,105 880,105 1200,15" fill="none" opacity="0.8" stroke="#2DBEDC" strokeWidth="4" />
          </svg>
        </section>

        {/* Nội dung: quy trình + cam kết (trái), form (phải) */}
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">Quy trình</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary-container">Xét tuyển trong 4 bước</h2>
            </div>
            <ol className="space-y-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Bước {i + 1}: {s.title}</p>
                    <p className="text-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="space-y-3 rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h3 className="border-b border-outline-variant/40 pb-2 font-display text-sm font-bold uppercase tracking-wider text-primary">Cam kết từ IES</h3>
              {COMMITMENTS.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] text-secondary">{c.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{c.title}</p>
                    <p className="text-xs text-on-surface-variant">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-sand p-5 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-cta">support_agent</span>
              <span>Cần hỗ trợ ngay? Gọi <strong className="text-primary">09xx.xxx.xxx</strong> hoặc nhắn Zalo để được tư vấn trực tiếp.</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm majors={majors} />
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
