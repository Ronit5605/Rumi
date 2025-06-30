import { NextRequest, NextResponse } from "next/server";
import rawTeam from "@/data/team.json";

type Member = {
  name: string;
  role: string;
  img: string;
};

type TeamData = Record<string, Member[]>;

export function GET(
  _: NextRequest,
  { params }: { params: { category: string } }
) {
  const team = rawTeam as TeamData;
  const category = params.category;
  const data = team[category];

  if (!data) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
