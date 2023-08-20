import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 p-3 flex justify-between items-center w-screen h-12 bg-slate-400">
      <div>logo</div>
      <nav className="flex justify-between">
        <Link href="/posts" className="pr-3">
          posts
        </Link>
        <Link href="/portfolio" className="pr-3">
          portfolio
        </Link>
        <Link href="/resume">resume</Link>
      </nav>
    </header>
  );
}

export default Header;
