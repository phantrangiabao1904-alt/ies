import Link from "next/link";

const LINKS = [
  { href: "/tuyen-sinh", label: "Tuyển sinh 2026" },
  { href: "/nganh-dao-tao", label: "Ngành đào tạo" },
  { href: "/cong-khai", label: "Công khai chất lượng" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/hop-tac", label: "Hợp tác doanh nghiệp" },
  { href: "/tin-tuc", label: "Tin tức & Sự kiện" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

export function SiteFooter() {
  return (
    <footer className="mt-24 w-full bg-primary-container pb-8 pt-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-display text-base font-extrabold text-primary-container">
                IES
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold uppercase leading-tight tracking-tight text-white">IES Sài Gòn</span>
                <span className="text-[11px] uppercase text-white/75">Trường Trung cấp Tin học Kinh tế Sài Gòn</span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              Đào tạo gắn liền thực hành, định hướng tương lai vững vàng cho thế hệ trẻ.
            </p>
            <div className="space-y-2 pt-1 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Icon name="call" className="text-[18px] text-tertiary-fixed" /> Hotline tuyển sinh: 09xx.xxx.xxx
              </span>
              <span className="flex items-center gap-2">
                <Icon name="mail" className="text-[18px] text-tertiary-fixed" /> tuyensinh@ies.edu.vn
              </span>
              <span className="flex items-center gap-2">
                <Icon name="location_on" className="text-[18px] text-tertiary-fixed" /> Cơ sở Tân Bình, TP. Hồ Chí Minh
              </span>
            </div>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Liên kết nhanh</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-1.5 transition-colors hover:text-tertiary-fixed">
                    <Icon name="chevron_right" className="text-[14px] text-tertiary-fixed" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Đăng ký tư vấn nhanh</h4>
            <p className="text-sm text-white/80">
              Để lại số điện thoại, cán bộ tư vấn tuyển sinh IES sẽ gọi lại giải đáp thông tin miễn phí trong ngày.
            </p>
            <Link
              href="/#dang-ky"
              className="inline-flex w-full items-center justify-center rounded-lg bg-cta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              Đăng ký tư vấn
            </Link>
            <div className="flex items-center gap-2 pt-1 text-xs text-tertiary-fixed">
              <Icon name="verified" className="text-[16px]" />
              Bảo mật tuyệt đối thông tin học sinh & phụ huynh
            </div>
          </div>
        </div>
        <p className="pt-6 text-center text-xs text-white/60">
          © 2026 Trường Trung cấp Tin học Kinh tế Sài Gòn (IES). Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
}
