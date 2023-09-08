import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TagList({ children }: Props) {
  return <div className="flex flex-col gap-y-3">{children}</div>;
}

export default TagList;
