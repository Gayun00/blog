import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gygy.log",
  description: "blog for gygy",
};

import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className="mt-12">{children}</body>
    </html>
  );
}
