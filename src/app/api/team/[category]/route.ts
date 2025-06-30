import { NextRequest, NextResponse } from "next/server";
import rawTeam from "@/data/team.json";

type Member = {
  name: string;
  role: string;
  img: string;
};

type TeamData = Record<string, Member[]>;

export async function GET(
  req: NextRequest,
  context: { params: { category: string } }
) {
  const team = rawTeam as TeamData;
  const { category } = context.params;
  const data = team[category];

  if (!data) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
