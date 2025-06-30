import { NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET(
   req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
