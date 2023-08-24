import { PostMetaData } from "@/types";
import { getListFromFolder } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isFeaturedPost = searchParams.get("filter") == "featured";
  const data = getListFromFolder<PostMetaData>("__posts");
  const featuredPosts = data.filter((post) => post.featured);

  if (isFeaturedPost) {
  }
  return NextResponse.json({ data: isFeaturedPost ? featuredPosts : data });
}
