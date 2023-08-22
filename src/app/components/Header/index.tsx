import React from "react";
import Image from "next/image";
import NavBar from "../NavBar";

function Header() {
  return (
    <header className="sticky top-0 p-7 flex justify-between items-center w-screen h-12 bg-slate-primary border-solid border-b-2 border-gray z-10">
      <Image src="/images/logo.svg" alt="logo" width={100} height={0} />
      <NavBar />
    </header>
  );
}

export default Header;
