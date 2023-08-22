import React from "react";
import Image from "next/image";
import NavBar from "../NavBar";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 p-7 flex justify-between items-center w-screen h-12 bg-slate-primary border-solid border-b-2 border-gray z-10">
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={100} height={0} />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
