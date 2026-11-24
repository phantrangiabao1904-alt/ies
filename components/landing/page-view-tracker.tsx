"use client";

import { useEffect } from "react";
import { trackEvent } from "@/actions/track-event";

export function PageViewTracker() {
  useEffect(() => {
    trackEvent({ type: "page_view", referrer: document.referrer.slice(0, 500) });
  }, []);
  return null;
}
