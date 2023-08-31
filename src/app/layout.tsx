import { Metadata } from "next";
import Gnb from "./components/GNB";
import "./globals.css";

export const metadata: Metadata = {
  title: "gygy.log",
  description: "blog for gygy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-primary">
      <body className=" flex flex-col bg-slate-primary">
        <div className="mb-40">{children}</div>

        <div className="fixed bottom-5 flex justify-center w-screen">
          <Gnb />
        </div>
      </body>
    </html>
  );
}
