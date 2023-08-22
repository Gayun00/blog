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
    <html lang="en" className="text-gray-primary">
      <body className=" flex flex-col items-center bg-slate-primary">
        <Header />
        <div className="max-w-lg w-screen">{children}</div>
      </body>
    </html>
  );
}
