"use client";

import { useState } from "react";
import type { Major } from "./data";

const TABS = [
  { key: "all", label: "Tất cả 6 ngành" },
  { key: "cong-nghe", label: "Khối Công nghệ số" },
  { key: "kinh-te", label: "Khối Kinh tế & Dịch vụ" },
] as const;

export function MajorFilter({ majors }: { majors: Major[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const shown = tab === "all" ? majors : majors.filter((m) => m.group === tab);

  return (
    <>
      <div className="flex w-fit items-center gap-2 rounded-full bg-surface-dim p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
              tab === t.key ? "bg-brand text-white shadow-sm" : "text-muted hover:text-brand"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {shown.map((m) => (
          <article key={m.id} id={`nganh-${m.id}`} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-dim">
              <img src={m.img} alt={m.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute left-3 top-3 flex items-center gap-2">
                <span className="rounded-md bg-brand px-2.5 py-1 font-display text-xs font-bold text-white shadow">{m.no}</span>
                <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand shadow-sm backdrop-blur-sm">Mã ngành: IES-{m.no} (Demo)</span>
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-brand/80 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                <span className="material-symbols-outlined text-[14px]">schedule</span> Thời gian: 1,5 - 2 năm
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-brand group-hover:text-blue2">{m.name}</h3>
                  <span className="shrink-0 rounded-full bg-cyan/15 px-2.5 py-0.5 text-xs font-medium text-brand">{m.groupLabel}</span>
                </div>
                <p className="font-semibold text-blue2">{m.tagline}</p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                <div className="space-y-1.5 rounded-xl bg-surface p-3">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-brand">
                    <span className="material-symbols-outlined text-[16px] text-cyan">{m.skillsIcon}</span> 3 kỹ năng cốt lõi
                  </div>
                  <ul className="space-y-1 text-xs text-muted">
                    {m.skills.map((s) => (
                      <li key={s} className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1.5 rounded-xl bg-surface p-3">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-blue2">
                    <span className="material-symbols-outlined text-[16px] text-brand">{m.jobsIcon}</span> 3 vị trí việc làm
                  </div>
                  <ul className="space-y-1 text-xs text-muted">
                    {m.jobs.map((s) => (
                      <li key={s} className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue2" />{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
                <span className="flex items-center gap-1 text-xs text-muted">
                  <span className="material-symbols-outlined text-[16px] text-brand">verified</span>{m.footnote}
                </span>
                <a href="/tuyen-sinh" className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm text-white transition-colors hover:bg-blue2">
                  Xem chi tiết ngành <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
