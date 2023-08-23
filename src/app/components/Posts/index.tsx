import { PostMetaData } from "@/types";
import React from "react";
import Post from "../Post";
import PostsLayout from "../layouts/PostsLayout";

interface Props {
  title: string;
  posts: PostMetaData[];
}

function Posts({ title, posts }: Props) {
  return (
    <PostsLayout title={title}>
      {posts.map((post) => (
        <Post key={post.title} data={post} />
      ))}
    </PostsLayout>
  );
}

export default Posts;
