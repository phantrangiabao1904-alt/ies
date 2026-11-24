import type { Metadata } from "next";
import { SecurityGuard } from "@/components/security-guard";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) - Tuyển sinh 2026",
  description: "Đăng ký xét tuyển 2026: học nghề thực hành, cam kết việc làm sau tốt nghiệp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface font-body text-ink antialiased">
        <SecurityGuard />
        {children}
      </body>
    </html>
  );
}
