"use client";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

function NavBar() {
  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">
          <RxHamburgerMenu />
        </Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content className="flex flex-col justify-center items-center gap-y-3 bg-slate-primary w-screen h-40">
            <Menubar.Item className="MenubarItem">
              <Link href="/">Main</Link>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem">
              <Link href="/portfolio" className="pr-3">
                portfolio
              </Link>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem" disabled>
              <Link href="/posts">Blog</Link>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}

export default NavBar;
