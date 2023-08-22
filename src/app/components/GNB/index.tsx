"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { BsBook } from "react-icons/bs";

function Gnb() {
  return (
    <div className="fixed bottom-5 pl-8 pr-8 flex justify-between items-center min-w-min w-1/3 h-12 bg-slate-primary/50 rounded-primary">
      <GnbButton href="/">
        <AiOutlineHome />
      </GnbButton>

      <GnbButton href="https://github.com/Gayun00">
        <SlSocialGithub />
      </GnbButton>

      <GnbButton href="/portfolio">
        <GoProjectRoadmap />
      </GnbButton>
      <GnbButton href="/posts">
        <BsBook />
      </GnbButton>
    </div>
  );
}

function GnbButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="flex items-center justify-center bg-slate-200 w-10 h-10 rounded-primary"
      href={href}>
      {children}
    </Link>
  );
}

export default Gnb;
