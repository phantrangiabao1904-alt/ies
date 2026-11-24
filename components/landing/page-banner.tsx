import Link from "next/link";

export function PageBanner({ crumb, title, subtitle, children }: {
  crumb: string; title: string; subtitle: string; children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand pb-16 pt-10 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-6 px-4 md:flex-row md:items-center lg:px-8">
        <div className="max-w-3xl">
          <nav className="mb-3 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <span className="text-white/40">/</span>
            <span className="font-semibold text-white">{crumb}</span>
          </nav>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-white/90">{subtitle}</p>
        </div>
        {children}
      </div>
      <svg className="absolute bottom-0 left-0 block h-8 w-full text-surface md:h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" aria-hidden>
        <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        <path d="M0,15 C320,105 880,105 1200,15" fill="none" opacity="0.8" stroke="#2DBEDC" strokeWidth="4" />
      </svg>
    </section>
  );
}
