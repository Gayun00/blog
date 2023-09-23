import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, ReactNode } from "react";

interface Props {
  url: string;
  children: ReactNode;
}

function LinkButton({ url, children }: Props) {
  return (
    <Link href={url} className="flex items-center justify-between w-full">
      <div className="flex items-center">{children}</div>
    </Link>
  );
}

export function Icon({ image, Icon }: { image?: string; Icon?: any }) {
  return (
    <>
      {image && <Image src={image} width={20} height={20} alt="" />}
      {Icon && (
        <div className="ml-1 flex items-center justify-center">{Icon}</div>
      )}
    </>
  );
}

export function Name({ name }: { name: string }) {
  return <p className="ml-2">{name}</p>;
}

LinkButton.Icon = Icon;
LinkButton.Name = Name;

export default LinkButton;
