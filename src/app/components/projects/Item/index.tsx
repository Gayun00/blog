import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  imageUrl: string;
}

function Item({ title, imageUrl }: Props) {
  return (
    <li>
      <Image alt="project_thumbnail" width={400} height={30} src={imageUrl} />
      <h3 className="mt-4 text-center">{title}</h3>
    </li>
  );
}

export default Item;
