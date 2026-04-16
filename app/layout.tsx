import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhaval Prajapati — Quality Analyst",
  description: "8+ years of QA excellence across software, mobile apps, and web platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
