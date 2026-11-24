"use client";

import { useTransition } from "react";
import { exportLeadsCsv } from "@/actions/export-leads";

export function ExportButton() {
  const [pending, startTransition] = useTransition();

  function onClick() {
    startTransition(async () => {
      const res = await exportLeadsCsv();
      if (!res.ok) {
        alert(res.error);
        return;
      }
      // BOM để Excel đọc đúng tiếng Việt.
      const blob = new Blob(["\ufeff", res.csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  return (
    <button onClick={onClick} disabled={pending}
      className="rounded bg-brand px-4 py-2 font-semibold text-white disabled:opacity-60">
      {pending ? "Đang xuất..." : "Xuất CSV cho Telesales"}
    </button>
  );
}
