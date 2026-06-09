import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Vessel | 良船事工",
  description: "Good Vessel is a non-profit ministry dedicated to serve non-profit small budget organizations with IT software services and AI modernization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
