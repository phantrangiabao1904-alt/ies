// Bắn sự kiện sang các pixel đã được nạp (Meta, TikTok, GA4).
// Nếu pixel chưa cấu hình (không có ID trong môi trường) thì hàm này không làm gì.
export type PixelEvent =
  | "cta_call"
  | "cta_zalo"
  | "cta_register"
  | "form_click"
  | "form_submit";

type Fbq = (...args: unknown[]) => void;
type Ttq = { track: (...args: unknown[]) => void };
type Gtag = (...args: unknown[]) => void;

type PixelWindow = Window & { fbq?: Fbq; ttq?: Ttq; gtag?: Gtag };

// Tên sự kiện chuẩn để nền tảng quảng cáo tối ưu chuyển đổi.
const META_STANDARD: Partial<Record<PixelEvent, string>> = {
  form_submit: "Lead",
  cta_register: "InitiateCheckout",
};

const TIKTOK_STANDARD: Partial<Record<PixelEvent, string>> = {
  form_submit: "SubmitForm",
  cta_call: "Contact",
  cta_zalo: "Contact",
};

export function firePixels(event: PixelEvent, params?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  const w = window as PixelWindow;

  try {
    if (w.fbq) {
      w.fbq("trackCustom", event, params ?? {});
      const std = META_STANDARD[event];
      if (std) w.fbq("track", std, params ?? {});
    }
    if (w.ttq) {
      w.ttq.track(TIKTOK_STANDARD[event] ?? "ClickButton", { ...params, event_name: event });
    }
    if (w.gtag) {
      w.gtag("event", event, params ?? {});
    }
  } catch {
    // Lỗi pixel không được làm hỏng trải nghiệm người dùng.
  }
}
