import { PostData } from "@/types";
import { getAllPosts, getPost, getPostsOfSeries } from "@/utils/processPosts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isFeaturedPost = searchParams.get("filter") == "featured";
  const postTitle = decodeURI(searchParams.get("title") || "");
  const series = decodeURI(searchParams.get("series") || "");
  let data: PostData[] = [];

  if (series) {
    data = await getPostsOfSeries(series);
    return NextResponse.json({ data });
  }

  if (postTitle) {
    data = getPost(postTitle);
    return NextResponse.json({ data });
  }

  const posts = getAllPosts<PostData>();
  const featuredPosts = data.filter((post) => post.featured);
  data = isFeaturedPost ? featuredPosts : posts;
  return NextResponse.json({ data });
}
