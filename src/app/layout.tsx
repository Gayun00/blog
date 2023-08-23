import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gygy.log",
  description: "blog for gygy",
};

import "./globals.css";
import Gnb from "./components/GNB";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-primary">
      <body className="flex flex-col items-center bg-slate-primary">
        {/* TODO: 사용여부 결정 후 삭제 */}
        {/* <Header /> */}
        <div className="mb-40 max-w-lg md:max-w-7xl w-screen">{children}</div>
        <Gnb />
      </body>
    </html>
  );
}
