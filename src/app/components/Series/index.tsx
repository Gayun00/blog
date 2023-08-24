import { PostData } from "@/types";
import React from "react";
import Post from "../Post";
import PostsLayout from "../layouts/PostsLayout";

interface Props {
  title: string;
  posts: PostData[];
}

function Series({ title, posts }: Props) {
  return (
    <PostsLayout title={title}>
      {posts.map((post, idx) => (
        <Post key={idx} data={post} path={`/posts/${post.pathname}`} />
      ))}
    </PostsLayout>
  );
}

export default Series;
