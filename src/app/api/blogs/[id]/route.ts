import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
