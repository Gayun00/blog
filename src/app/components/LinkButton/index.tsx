import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  icon: string;
  name: string;
  url: string;
  description?: string;
}

function LinkButton({ icon, name, url, description }: Props) {
  return (
    <Link href={url} className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Image src={icon} width={20} height={20} alt="" />
        <p className="ml-2">{name}</p>
      </div>
      <p className=" text-xs">{description}</p>
    </Link>
  );
}

export default LinkButton;
