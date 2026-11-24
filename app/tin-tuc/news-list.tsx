"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, NEWS } from "./data";

export function NewsList() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]["key"]>("all");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return NEWS.filter(
      (n) =>
        (cat === "all" || n.category === cat) &&
        (!kw || n.title.toLowerCase().includes(kw) || n.excerpt.toLowerCase().includes(kw)),
    );
  }, [cat, q]);

  return (
    <>
      <div className="relative z-20 mx-auto -mt-6 max-w-[1280px] px-4 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-4 rounded-2xl bg-surface-container-lowest p-4 shadow-[0_4px_24px_rgba(15,85,135,0.08)] sm:p-5 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCat(c.key)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  cat === c.key
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant/70">search</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm kiếm tin tức, sự kiện..."
              className="h-11 w-full rounded-xl bg-surface-container-low pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 transition-all duration-150 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#005a6a]">
              <span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim" />
              Bản tin thời sự nhà trường
            </div>
            <h3 className="font-display text-3xl font-bold tracking-tight text-on-surface md:text-4xl">Danh sách tin mới nhất</h3>
          </div>
          <p className="max-w-md text-sm text-on-surface-variant">
            Theo dõi quy chế đào tạo, cam kết chất lượng chuẩn nghề nghiệp quốc gia và các cơ hội học bổng mới nhất.
          </p>
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-on-surface-variant">Không tìm thấy tin phù hợp.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((n) => (
              <article
                key={n.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(15,85,135,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,85,135,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-dim">
                  <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                    {n.categoryLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[15px]">event</span>
                      <span>{n.date}</span>
                      <span className="text-outline-variant">•</span>
                      <span>{n.author}</span>
                    </div>
                    <h3 className="line-clamp-2 font-display text-lg font-semibold text-on-surface transition-colors group-hover:text-primary">{n.title}</h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-on-surface-variant">{n.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-surface-container-high/40 pt-3">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-all group-hover:gap-2">
                      Xem chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-outline">share</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
