import { PostMetaData } from "@/types";
import React from "react";
import Post from "../Post";

interface Props {
  title: string;
  posts: PostMetaData[];
}

function Posts({ title, posts }: Props) {
  return (
    <section className="p-8 flex flex-col items-center md:items-start">
      <h2 className="text-2xl mb-5 md:ml-3">{title}</h2>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-8 gap-y-28 w-full">
        {posts.map((post) => (
          <Post key={post.title} data={post} />
        ))}
      </ul>
    </section>
  );
}

export default Posts;
