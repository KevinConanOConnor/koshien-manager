import { getAllPlayers } from "@/data/TestPlayers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getAllPlayers());
}
