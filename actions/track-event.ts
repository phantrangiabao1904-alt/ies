"use server";

import { z } from "zod";
import { createSessionClient } from "@/lib/supabase/server";

const eventSchema = z.object({
  type: z.enum(["page_view", "form_click", "form_submit"]),
  referrer: z.string().max(500).optional(),
});

// Ghi sự kiện funnel. Dùng anon key; RLS chỉ cho INSERT.
export async function trackEvent(input: unknown): Promise<void> {
  const parsed = eventSchema.safeParse(input);
  if (!parsed.success) {
    return;
  }
  const supabase = createSessionClient();
  await supabase.from("events").insert({
    type: parsed.data.type,
    referrer: parsed.data.referrer ?? null,
  });
}
