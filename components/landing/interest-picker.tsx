"use client";

import { useState } from "react";
import { INTERESTS, MAJORS } from "@/lib/majors";
import { useMajorSelection } from "./major-context";

// Bấm sở thích: đánh dấu sở thích, chọn sẵn ngành đầu tiên khớp trong form.
export function InterestPicker() {
  const { setMajor } = useMajorSelection();
  const [selected, setSelected] = useState<string | null>(null);

  function choose(id: string) {
    const next = selected === id ? null : id;
    setSelected(next);
    const match = next ? MAJORS.find((m) => m.interests.includes(next)) : undefined;
    setMajor(match?.name ?? "");
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {INTERESTS.map((it) => {
        const active = selected === it.id;
        return (
          <button
            key={it.id}
            type="button"
            aria-pressed={active}
            onClick={() => choose(it.id)}
            className={`flex min-h-[64px] items-center gap-4 rounded-xl border p-5 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              active ? "border-white bg-white text-primary" : "border-white/25 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-tertiary-fixed">
              <span className="material-symbols-outlined text-[24px]">{it.icon}</span>
            </span>
            <span className="flex flex-col">
              <span className="font-display text-base font-bold">{it.title}</span>
              <span className={`text-sm ${active ? "text-on-surface-variant" : "text-white/85"}`}>{it.desc}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
