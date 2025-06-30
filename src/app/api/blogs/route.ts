import { NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET() {
  const brief = blogs.map(({ id, title, imageUrl, excerpt }) => ({
    id,
    title,
    imageUrl,
    excerpt,
  }));

  return NextResponse.json(brief);
}
