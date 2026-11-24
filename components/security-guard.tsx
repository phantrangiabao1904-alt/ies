"use client";

import { useEffect } from "react";

// Lớp phòng thủ bề mặt: chỉ cản người dùng thường. Bảo mật thật nằm ở RLS và kiểm tra role phía server.
export function SecurityGuard() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const devtoolsCombo = e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key);
      const viewSource = e.ctrlKey && key === "u";
      if (e.key === "F12" || devtoolsCombo || viewSource) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
