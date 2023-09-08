import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TagsSentence({ children }: Props) {
  return (
    <div className="flex justify-between h-36 gap-x-20">
      <p className="py-2 text-xl">저는</p>
      {children}
      <p className="py-2 text-xl">개발자입니다.</p>
    </div>
  );
}

export default TagsSentence;
