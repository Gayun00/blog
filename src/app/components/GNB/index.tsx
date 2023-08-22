import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";

function Gnb() {
  return (
    <div className="pl-8 pr-8 flex justify-center items-center gap-x-8 h-12 bg-slate-primary rounded-primary shadow-new-morph">
      <Link href="/">
        <AiOutlineHome />
      </Link>
      <Link href="/">
        <SlSocialGithub />
      </Link>
      <Link href="/">
        <GoProjectRoadmap />
      </Link>
    </div>
  );
}

export default Gnb;
