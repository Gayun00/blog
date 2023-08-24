import React, { ReactNode } from "react";

interface Props {
  title: String;
  children: ReactNode;
}

function PostsLayout({ title, children }: Props) {
  return (
    <section className="flex flex-col items-center md:items-start w-full">
      <h2 className="text-2xl mb-5 md:ml-3">{title}</h2>
      <ul className="grid grid-cols-1 gap-y-36 md:grid-cols-3 md:gap-x-10 md:gap-y-36">
        {children}
      </ul>
    </section>
  );
}

export default PostsLayout;
