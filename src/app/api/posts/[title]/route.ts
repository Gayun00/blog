import { NextResponse } from "next/server";
import { getPost, getRelatedPosts } from "@/utils";

export async function GET(
  _: Request,
  { params }: { params: { title: string } }
) {
  const res = await getPost(decodeURI(params?.title) || "");
  const relatedPosts = getRelatedPosts(decodeURI(params.title));
  return NextResponse.json({ data: res, relatedPosts });
}
