import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function Layout({ title, children }: Props) {
  return (
    <div className="p-20 w-full flex flex-col gap-y-10">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Layout;
