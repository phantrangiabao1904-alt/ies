"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export const HOME_FAQ: FaqItem[] = [
  {
    q: "Học sinh tốt nghiệp THCS có đăng ký được không?",
    a: "Được. Trường xét tuyển bằng học bạ THCS, không thi tuyển áp lực và nhận hồ sơ liên tục.",
  },
  {
    q: "Thời gian đào tạo bao lâu thì ra trường?",
    a: "Từ 1,5 đến 2 năm để lấy bằng Trung cấp chính quy, hoặc 3 năm với hệ song bằng THPT.",
  },
  {
    q: "Học xong nhận bằng gì? Có học tiếp lên được không?",
    a: "Nhận bằng Trung cấp chính quy và bằng THPT, liên thông lên Cao đẳng, Đại học.",
  },
  {
    q: "Học phí và chính sách hỗ trợ theo Nghị định 81 ra sao?",
    a: "Học sinh tốt nghiệp THCS được Nhà nước cấp bù học phí nghề theo NĐ 81/2021/NĐ-CP.",
  },
];

export function Faq({ items = HOME_FAQ }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-card border border-line bg-white shadow-sm">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left font-display text-base font-bold text-brand"
            >
              <span>{i + 1}. {item.q}</span>
              <span
                className="material-symbols-outlined transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              >
                expand_more
              </span>
            </button>
            {isOpen && <div className="px-6 pb-6 text-ink">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
