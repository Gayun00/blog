import { NextResponse } from "next/server";
import { getSeries } from "@/utils";

export async function GET() {
  const res = await getSeries();

  return NextResponse.json({ data: res });
}
