import { redirect } from "next/navigation";
import { FunnelChart, TrafficChart } from "@/components/ba/charts";
import { ExportButton } from "@/components/ba/export-button";
import { logout } from "@/actions/auth";
import { requireRole } from "@/lib/auth";
import { createSessionClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function BaPage() {
  const auth = await requireRole(["ba", "admin"]);
  if (!auth) redirect("/login");

  const supabase = createSessionClient();
  const since = new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString();

  const [{ data: events }, { data: leads }] = await Promise.all([
    supabase.from("events").select("type, created_at").gte("created_at", since).limit(50000),
    supabase
      .from("leads")
      .select("id, name, phone, major, created_at")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  const count = (type: string) => (events ?? []).filter((e) => e.type === type).length;
  const funnel = [
    { step: "Lượt xem", count: count("page_view") },
    { step: "Click form", count: count("form_click") },
    { step: "Gửi đăng ký", count: count("form_submit") },
  ];

  const byDay = new Map<string, number>();
  for (const e of events ?? []) {
    if (e.type !== "page_view") continue;
    const day = e.created_at.slice(5, 10);
    byDay.set(day, (byDay.get(day) ?? 0) + 1);
  }
  const traffic = [...byDay.entries()].sort().map(([day, views]) => ({ day, views }));

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">BA Analytics (14 ngày)</h1>
        <div className="flex items-center gap-4">
          <ExportButton />
          <form action={logout}><button className="text-sm underline">Đăng xuất</button></form>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Funnel chuyển đổi</h2>
          <FunnelChart data={funnel} />
        </section>
        <section className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Lưu lượng truy cập</h2>
          <TrafficChart data={traffic} />
        </section>
      </div>

      <section className="overflow-x-auto rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 font-semibold">Leads mới nhất</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">Họ tên</th><th>SĐT</th><th>Ngành</th><th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {(leads ?? []).map((l) => (
              <tr key={l.id} className="border-b last:border-0">
                <td className="py-2">{l.name}</td>
                <td>{l.phone}</td>
                <td>{l.major}</td>
                <td>{new Date(l.created_at).toLocaleString("vi-VN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
