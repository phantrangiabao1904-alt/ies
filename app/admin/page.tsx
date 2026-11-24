import { redirect } from "next/navigation";
import { SortableList } from "@/components/admin/sortable-list";
import { requireRole } from "@/lib/auth";
import { createSessionClient } from "@/lib/supabase/server";
import { logout } from "@/actions/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // Kiểm tra lần hai ngoài middleware (defense in depth).
  const auth = await requireRole(["admin"]);
  if (!auth) redirect("/login");
  const supabase = createSessionClient();
  const [{ data: sections }, { data: courses }] = await Promise.all([
    supabase.from("sections").select("id, title").order("position"),
    supabase.from("courses").select("id, name").order("position"),
  ]);

  return (
    <main className="mx-auto max-w-3xl space-y-10 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản trị Landing Page</h1>
        <form action={logout}><button className="text-sm underline">Đăng xuất</button></form>
      </header>
      <section>
        <h2 className="mb-3 text-lg font-semibold">Thứ tự các section</h2>
        <SortableList table="sections"
          initial={(sections ?? []).map((s) => ({ id: s.id, label: s.title }))} />
      </section>
      <section>
        <h2 className="mb-3 text-lg font-semibold">Thứ tự khóa học</h2>
        <SortableList table="courses"
          initial={(courses ?? []).map((c) => ({ id: c.id, label: c.name }))} />
      </section>
    </main>
  );
}
