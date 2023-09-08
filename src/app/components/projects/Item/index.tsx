import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function Item({ title, children }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Item;
