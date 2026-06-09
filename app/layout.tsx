import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Vessel | 好器皿",
  description: "Good Vessel 好器皿 — dedicated to serve non-profit organizations with IT software services and AI modernization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
