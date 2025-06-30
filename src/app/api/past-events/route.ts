import { NextResponse } from "next/server";
import pastEvents from "@/data/pastEvents.json";

export function GET() {
  return NextResponse.json(pastEvents);
}
