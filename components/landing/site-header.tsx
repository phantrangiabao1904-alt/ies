import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const NAV = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/nganh-dao-tao", label: "Ngành đào tạo" },
  { href: "/tuyen-sinh", label: "Tuyển sinh" },
  { href: "/hop-tac", label: "Hợp tác & Đời sống" },
  { href: "/tin-tuc", label: "Tin tức" },
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline-variant/60 bg-surface-container-lowest shadow-[0_2px_12px_rgba(15,85,135,0.06)]">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-4 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container font-display text-base font-extrabold text-white shadow-sm transition-colors group-hover:bg-primary">
            IES
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-base font-extrabold uppercase leading-tight tracking-tight text-primary-container">IES Sài Gòn</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">Trung cấp Tin học Kinh tế</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`whitespace-nowrap py-6 text-sm transition-colors hover:text-primary ${
                active === n.href
                  ? "border-b-2 border-tertiary-fixed-dim font-bold text-primary"
                  : "font-semibold text-on-surface-variant"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/dang-ky"
            className="shrink-0 whitespace-nowrap rounded-full bg-cta px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-cta-hover sm:px-6"
          >
            Đăng ký xét tuyển
          </Link>
          <MobileNav items={NAV} active={active} />
        </div>
      </div>
    </header>
  );
}
