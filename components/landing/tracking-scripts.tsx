import Script from "next/script";

// ID lấy từ biến môi trường. Không có ID thì không nạp script tương ứng.
// Kiểm tra định dạng để tránh chèn ký tự lạ vào script inline.
const META_ID = (process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "").trim();
const TIKTOK_ID = (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "").trim();
const GA4_ID = (process.env.NEXT_PUBLIC_GA4_ID ?? "").trim();

const META_OK = /^\d{5,20}$/.test(META_ID);
const TIKTOK_OK = /^[A-Z0-9]{10,40}$/.test(TIKTOK_ID);
const GA4_OK = /^G-[A-Z0-9]{4,20}$/.test(GA4_ID);

export function TrackingScripts() {
  return (
    <>
      {META_OK && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`if(!window.fbq){var n=window.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};window._fbq||(window._fbq=n);n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];var t=document.createElement('script');t.async=!0;t.src='https://connect.facebook.net/en_US/fbevents.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s)}fbq('init','${META_ID}');fbq('track','PageView');`}
        </Script>
      )}
      {TIKTOK_OK && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript";o.async=!0;o.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${TIKTOK_ID}');ttq.page();}(window,document,'ttq');`}
        </Script>
      )}
      {GA4_OK && (
        <>
          <Script id="ga4-loader" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
