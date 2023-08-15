import { ReactNode } from "react";
import Header from "./components/header";

export default function SubLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
