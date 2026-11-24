"use server";

import { z } from "zod";
import { createSessionClient } from "@/lib/supabase/server";

// Khớp constraint events_type_check trong migration 0004.
const eventSchema = z.object({
  type: z.enum([
    "page_view",
    "form_click",
    "form_submit",
    "cta_call",
    "cta_zalo",
    "cta_register",
  ]),
  referrer: z.string().max(500).optional(),
});

// Ghi sự kiện funnel. Dùng anon key; RLS chỉ cho INSERT.
// Không bao giờ throw: theo dõi lỗi không được làm hỏng trải nghiệm người dùng.
export async function trackEvent(input: unknown): Promise<void> {
  const parsed = eventSchema.safeParse(input);
  if (!parsed.success) {
    return;
  }
  try {
    const supabase = createSessionClient();
    await supabase.from("events").insert({
      type: parsed.data.type,
      referrer: parsed.data.referrer ?? null,
    });
  } catch {
    // Bỏ qua lỗi mạng/server, sự kiện chỉ để phân tích.
  }
}
