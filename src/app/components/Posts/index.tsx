import { PostMetaData } from "@/types";
import React from "react";
import Post from "../Post";

interface Props {
  title: string;
  posts: PostMetaData[];
}

function Posts({ title, posts }: Props) {
  return (
    <section className="p-8 flex flex-col items-center">
      <h2 className="text-2xl mb-5">{title}</h2>
      <ul className="flex flex-col gap-y-16">
        {posts.map((post) => (
          <Post key={post.title} data={post} />
        ))}
      </ul>
    </section>
  );
}

export default Posts;
