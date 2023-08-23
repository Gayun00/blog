import React, { ReactNode } from "react";

interface Props {
  title: String;
  children: ReactNode;
}

function PostsLayout({ title, children }: Props) {
  return (
    <section className="p-8 flex flex-col items-center">
      <h2 className="text-2xl mb-5">{title}</h2>
      <ul className="flex flex-col gap-y-28 w-full">{children}</ul>
    </section>
  );
}

export default PostsLayout;
