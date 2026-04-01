import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FuelID Lunch Delivery | Farm-Fresh Pilot Program",
  description:
    "Healthy, whole-food lunches for K-12 students delivered Monday, Wednesday, and Friday. Join the limited FuelID pilot.",
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
