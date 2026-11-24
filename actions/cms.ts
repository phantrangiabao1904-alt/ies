"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { createSessionClient } from "@/lib/supabase/server";

const orderSchema = z.object({
  table: z.enum(["sections", "courses"]),
  ids: z.array(z.string().uuid()).max(200),
});

// Lưu thứ tự kéo-thả. Chỉ admin; RLS cũng chỉ cho admin ghi.
export async function saveOrder(input: unknown): Promise<{ ok: boolean }> {
  const auth = await requireRole(["admin"]);
  const parsed = orderSchema.safeParse(input);
  if (!auth || !parsed.success) {
    return { ok: false };
  }

  const supabase = createSessionClient();
  for (const [index, id] of parsed.data.ids.entries()) {
    const { error } = await supabase
      .from(parsed.data.table)
      .update({ position: index })
      .eq("id", id);
    if (error) {
      return { ok: false };
    }
  }

  revalidatePath("/");
  return { ok: true };
}
