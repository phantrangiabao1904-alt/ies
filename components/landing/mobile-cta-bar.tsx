import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from "@/lib/contact";
import { CtaLink } from "./cta-link";

// Thanh CTA cố định đáy trên mobile/tablet: Gọi, Zalo, Đăng ký. Ẩn từ xl trở lên.
export function MobileCtaBar() {
  const cell =
    "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]";
  return (
    <nav aria-label="Liên hệ nhanh" className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] xl:hidden">
      <CtaLink href={PHONE_TEL} event="cta_call" className={`${cell} text-primary hover:bg-surface-container-low`}>
        <span className="material-symbols-outlined text-[22px]">call</span>
        Gọi {PHONE_DISPLAY}
      </CtaLink>
      <CtaLink href={ZALO_URL} event="cta_zalo" className={`${cell} text-[#0068FF] hover:bg-surface-container-low`}>
        <span className="material-symbols-outlined text-[22px]">chat</span>
        Zalo
      </CtaLink>
      <CtaLink href="#dang-ky" event="cta_register" className={`${cell} bg-cta text-white hover:bg-cta-hover`}>
        <span className="material-symbols-outlined text-[22px]">edit_note</span>
        Đăng ký
      </CtaLink>
    </nav>
  );
}
