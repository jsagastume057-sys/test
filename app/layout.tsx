import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FuelID Lunch Delivery | Farm-Fresh School Lunches",
  description:
    "Healthy, whole-food lunches delivered Monday, Wednesday, and Friday for local K-12 families.",
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
