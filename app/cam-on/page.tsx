import Link from "next/link";
import { PageViewTracker } from "@/components/landing/page-view-tracker";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";

// Trang cảm ơn sau khi gửi form: dùng để đo chuyển đổi (không lập chỉ mục).
export const metadata = { title: "Cảm ơn bạn đã đăng ký - IES", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <>
      <PageViewTracker />
      <SiteHeader />
      <main className="flex min-h-[60vh] w-full items-center justify-center bg-surface px-4 py-16">
        <div role="status" className="flex max-w-lg flex-col items-center gap-4 rounded-card border border-line bg-white p-8 text-center shadow-md">
          <span className="material-symbols-outlined text-[56px] text-brand">check_circle</span>
          <h1 className="font-display text-3xl font-bold text-brand">Cảm ơn bạn đã đăng ký</h1>
          <p className="text-ink">Ban tuyển sinh sẽ gọi hoặc nhắn Zalo hỗ trợ trong 24 giờ.</p>
          <Link href="/nganh-dao-tao" className="mt-2 inline-flex min-h-[48px] items-center rounded-full border-2 border-primary/40 px-6 font-semibold text-primary hover:bg-surface-container-low">
            Xem lại các ngành học
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
