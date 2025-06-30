import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
