import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baseline",
  description: "A planner for bad days, not perfect days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
