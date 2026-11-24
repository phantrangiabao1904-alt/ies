export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#0068FF] px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1">
        <span className="material-symbols-outlined text-[20px]">chat</span> Tư vấn Zalo
      </a>
      <a href="tel:09xxxxxxxx"
        className="flex items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1">
        <span className="material-symbols-outlined text-[20px]">call</span> Hotline: 09xx.xxx.xxx
      </a>
    </div>
  );
}
