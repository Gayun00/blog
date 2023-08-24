import { getPostsOfSeries } from "@/utils";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: Request,
  { params }: { params: { series: string } }
) {
  const res = await getPostsOfSeries(params.series);

  return NextResponse.json({ data: res });
}
