import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function DescriptionList({ title, children }: Props) {
  return (
    <div className="p-20">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default DescriptionList;
