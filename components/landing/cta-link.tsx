"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/actions/track-event";
import { firePixels } from "@/lib/analytics";
import { useMajorSelection } from "./major-context";

type Props = {
  href: string;
  event?: "cta_call" | "cta_zalo" | "cta_register";
  majorName?: string;
  className?: string;
  children: ReactNode;
};

// Liên kết CTA: ghi sự kiện (Supabase + pixel) và, nếu có ngành, chọn sẵn ngành trong form.
export function CtaLink({ href, event, majorName, className, children }: Props) {
  const { setMajor } = useMajorSelection();
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        if (majorName) setMajor(majorName);
        if (event) {
          trackEvent({ type: event });
          firePixels(event, majorName ? { major: majorName } : undefined);
        }
      }}
    >
      {children}
    </a>
  );
}
