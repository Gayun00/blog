import { PostData } from "@/types";
import { getAllPosts, getPost } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isFeaturedPost = searchParams.get("filter") == "featured";
  const postTitle = decodeURI(searchParams.get("title") || "");
  let data: PostData[] = [];

  if (postTitle) {
    data = getPost(postTitle);
  } else {
    const posts = getAllPosts<PostData>();
    const featuredPosts = data.filter((post) => post.featured);
    data = isFeaturedPost ? featuredPosts : posts;
  }
  return NextResponse.json({ data });
}
