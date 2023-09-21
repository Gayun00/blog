import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TagsSentence({ children }: Props) {
  return (
    <div className="px-10 flex justify-between w-full h-36 gap-x-20">
      {children}
      <p className="py-2 text-xl">웹 프론트엔드 개발자입니다.</p>
    </div>
  );
}

export default TagsSentence;
