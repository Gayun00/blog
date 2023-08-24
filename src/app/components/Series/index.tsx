import { PostData } from "@/types";
import React from "react";
import Post from "../Post";
import PostsLayout from "../layouts/PostsLayout";

interface Props {
  title: string;
  posts: PostData[];
}

function Series({ title, posts }: Props) {
  console.log(posts, "posts");
  return (
    <PostsLayout title={title}>
      {posts.map((post, idx) => (
        <Post key={idx} data={post} pathVariable={`/posts/${post.pathname}`} />
      ))}
    </PostsLayout>
  );
}

export default Series;
