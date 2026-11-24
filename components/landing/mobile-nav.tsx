"use client";

import Link from "next/link";
import { useState } from "react";

type Item = { href: string; label: string };

export function MobileNav({ items, active }: { items: Item[]; active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-container"
      >
        <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-[72px] z-50 border-b border-outline-variant/60 bg-surface-container-lowest shadow-lg">
          <div className="mx-auto flex max-w-[1280px] flex-col px-4 py-2">
            {items.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 py-3.5 text-sm transition-colors last:border-0 hover:text-primary ${
                  active === n.href ? "font-bold text-primary" : "font-semibold text-on-surface-variant"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
