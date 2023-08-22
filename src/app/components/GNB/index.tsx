"use client";
import React, { ReactComponentElement, ReactNode } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { IconType } from "react-icons";
function Gnb() {
  return (
    <div className="fixed bottom-10 pl-8 pr-8 flex justify-center items-center gap-x-8 h-12 bg-slate-primary rounded-primary shadow-new-morph">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="flex gap-x-5">
          <GnbItem Button={AiOutlineHome} href="/"></GnbItem>

          <GnbItem Button={GoProjectRoadmap}>
            <ul className="flex flex-col">
              <Link href="/portfolio">portfolio</Link>

              <Link href="/posts">Blog</Link>
            </ul>
          </GnbItem>

          <GnbItem Button={SlSocialGithub} href={"/"}>
            <ul className="List two">
              <Link href="/portfolio">portfolio</Link>
              <Link href="/posts">Blog</Link>
            </ul>
          </GnbItem>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        {/* <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div> */}
      </NavigationMenu.Root>
    </div>
  );
}

interface GnbItemProps {
  Button: IconType;
  children?: ReactNode;
  href?: string;
}

function GnbItem({ Button, href, children }: GnbItemProps) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="flex">
        {href ? (
          <Link href={href}>
            <Button />
          </Link>
        ) : (
          <Button />
        )}
        {children && <CaretDownIcon className="CaretDown" aria-hidden />}
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute top-10">
        {children}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

export default Gnb;
