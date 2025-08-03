import { NextRequest, NextResponse } from "next/server";
import { getPlayer } from "@/data/TestPlayers";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  const player = getPlayer(id); // Implement this function to find player by id
  if (!player) {
    return NextResponse.json({ error: "Player not found" }, { status: 404 });
  }

  return NextResponse.json(player);
}
