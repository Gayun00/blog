import { PostMetaData } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  posts: PostMetaData[];
}

function Posts({ title, posts }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Posts;
