"use client";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function List({ title, children }: Props) {
  return (
    <div className="p-20 w-full flex flex-col">
      <h2 className="mb-6">{title}</h2>
      <ul className={`grid grid-cols-3 gap-10 content-start`}>{children}</ul>
    </div>
  );
}

export default List;
