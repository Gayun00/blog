import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  selectedTag: string;
  translateSpace: Record<string, string>;
}
function TagList({ children, selectedTag, translateSpace }: Props) {
  return (
    <div
      className={`flex flex-col gap-y-3 w-full ${translateSpace[selectedTag]} duration-300 ease-in-out`}>
      {children}
    </div>
  );
}

export default TagList;
