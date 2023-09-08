import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function Item({ title, children }: Props) {
  return (
    <li>
      <h3 className="mb-4">{title}</h3>
      {children}
    </li>
  );
}

export default Item;
