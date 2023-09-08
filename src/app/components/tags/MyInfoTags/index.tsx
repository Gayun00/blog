import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MyInfoTags({ children }: Props) {
  return (
    <div className="px-20 flex justify-between items-center h-36 gap-x-20">
      <p className="text-xl">저는</p>
      {children}
      <p className="text-xl">개발자입니다.</p>
    </div>
  );
}

export default MyInfoTags;
