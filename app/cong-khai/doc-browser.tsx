"use client";

import { useMemo, useState } from "react";
import { CATEGORIES } from "./data";

const YEARS = [2026, 2025, 2024] as const;

export function DocBrowser() {
  const [tab, setTab] = useState(CATEGORIES[0].key);
  const [year, setYear] = useState<number | "all">("all");
  const [q, setQ] = useState("");

  const current = CATEGORIES.find((c) => c.key === tab)!;
  const kw = q.trim().toLowerCase();

  const docs = useMemo(
    () =>
      current.docs.filter(
        (d) =>
          (year === "all" || d.year === year) &&
          (!kw || d.title.toLowerCase().includes(kw) || d.code.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw)),
      ),
    [current, year, kw],
  );

  const total = CATEGORIES.reduce((n, c) => n + c.docs.length, 0);

  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-6 px-4 py-12 lg:grid-cols-12 lg:px-8">
      <aside className="space-y-6 lg:col-span-4">
        <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-outline">Mục lục danh mục</span>
            <span className="text-xs font-semibold text-primary">{total} văn bản</span>
          </div>

          {/* Mobile: dropdown chọn danh mục */}
          <div className="relative lg:hidden">
            <select
              value={tab}
              onChange={(e) => setTab(e.target.value)}
              aria-label="Chọn danh mục công khai"
              className="h-12 w-full appearance-none rounded-lg bg-primary px-4 pr-10 text-sm font-semibold text-on-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {CATEGORIES.map((c) => (
                <option key={c.key} value={c.key} className="text-on-surface">
                  {c.label} ({String(c.docs.length).padStart(2, "0")})
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-primary">expand_more</span>
          </div>

          {/* Desktop: danh sách đầy đủ */}
          <nav className="hidden flex-col gap-1.5 lg:flex">
            {CATEGORIES.map((c) => {
              const on = c.key === tab;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setTab(c.key)}
                  className={`flex w-full items-center justify-between rounded-lg p-3.5 text-left transition-all ${
                    on ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-[20px] ${on ? "text-tertiary-fixed" : "text-primary"}`}>{c.icon}</span>
                    <span className="text-sm font-semibold">{c.label}</span>
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${on ? "bg-white/20 text-white" : "bg-surface-container-highest text-primary"}`}>
                    {String(c.docs.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="rounded-xl bg-sand p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta/20 text-cta">
              <span className="material-symbols-outlined text-[22px]">contact_support</span>
            </span>
            <div>
              <h2 className="mb-1 font-display text-lg font-bold text-primary">Hỗ trợ tra cứu hồ sơ</h2>
              <p className="mb-3 text-sm text-on-surface-variant">Cần bản sao công chứng hoặc giải đáp quy chế đào tạo, vui lòng liên hệ:</p>
              <ul className="space-y-1 text-sm font-semibold text-primary">
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-cta">call</span> Hotline: 09xx.xxx.xxx</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-cta">mail</span> daotao@ies.edu.vn</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-cta">desk</span> Phòng Đào tạo & Khảo thí (Tầng 1)</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div className="space-y-4 lg:col-span-8">
        <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm sm:flex-row sm:items-center">
          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#0F5587]">Danh mục công khai</span>
            <h2 className="font-display text-xl font-bold text-primary">{current.title}</h2>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-surface-container p-1">
            {(["all", ...YEARS] as const).map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  year === y ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {y === "all" ? "Tất cả" : `Năm ${y}`}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <div className="relative max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Lọc văn bản trong danh mục..."
              className="h-11 w-full rounded-xl bg-surface-container-low pl-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {docs.length === 0 ? (
          <p className="rounded-xl bg-surface-container-lowest p-10 text-center text-on-surface-variant shadow-sm">Không có văn bản phù hợp.</p>
        ) : (
          docs.map((d) => (
            <article
              key={d.code}
              className="flex flex-col items-start justify-between gap-4 rounded-xl bg-surface-container-lowest p-5 shadow-sm transition-colors duration-200 hover:bg-surface-container-low sm:flex-row sm:items-center"
            >
              <div className="flex flex-1 items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-outline">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">Mã: {d.code}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>{d.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">attach_file</span>{d.size}</span>
                  </div>
                  <h3 className="font-bold leading-snug text-on-surface">{d.title}</h3>
                  <p className="line-clamp-1 text-sm text-on-surface-variant">{d.desc}</p>
                </div>
              </div>
              {d.file ? (
                <a href={d.file} download className="flex shrink-0 items-center gap-1 self-end rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-[#0B426A] sm:self-center">
                  <span className="material-symbols-outlined text-[18px]">download</span> Tải PDF
                </a>
              ) : (
                <span className="flex shrink-0 items-center gap-1 self-end rounded-full bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface-variant sm:self-center">
                  <span className="material-symbols-outlined text-[18px]">schedule</span> Chưa có file
                </span>
              )}
            </article>
          ))
        )}
      </div>
    </section>
  );
}
