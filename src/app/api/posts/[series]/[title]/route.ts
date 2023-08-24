import { getFileFromFolder } from "@/utils";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: Request,
  { params }: { params: { title: string } }
) {
  const res = await getFileFromFolder("__posts", params.title);

  return NextResponse.json({ data: res });
}
