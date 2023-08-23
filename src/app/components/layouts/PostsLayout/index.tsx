import React, { ReactNode } from "react";

interface Props {
  title: String;
  children: ReactNode;
}

function PostsLayout({ title, children }: Props) {
  return (
    <section className="px-8 flex flex-col items-center md:items-start">
      <h2 className="text-2xl mb-5 md:ml-3">{title}</h2>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-8 gap-y-28">
        {children}
      </ul>
    </section>
  );
}

export default PostsLayout;
