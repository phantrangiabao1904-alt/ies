"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

// State chung giữa khối định hướng, thẻ ngành, ô số điện thoại ở hero và form đăng ký.
type Ctx = {
  major: string;
  setMajor: (name: string) => void;
  phone: string;
  setPhone: (p: string) => void;
};

const MajorContext = createContext<Ctx | null>(null);

export function MajorProvider({ children }: { children: ReactNode }) {
  const [major, setMajor] = useState("");
  const [phone, setPhone] = useState("");
  const value = useMemo(() => ({ major, setMajor, phone, setPhone }), [major, phone]);
  return <MajorContext.Provider value={value}>{children}</MajorContext.Provider>;
}

export function useMajorSelection(): Ctx {
  const ctx = useContext(MajorContext);
  if (!ctx) throw new Error("useMajorSelection phải nằm trong MajorProvider");
  return ctx;
}
