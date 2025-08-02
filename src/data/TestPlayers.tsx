import { Player } from "@/models/player";
import { FieldingPosition } from "@/models/positions";
import { Pitch, PitchType } from "@/models/pitching";
import { recalculateOveralls } from "@/lib/playerRatings";


export async function getPlayers(): Promise<Player[]> {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const res = await fetch(`${baseUrl}/api/players`, {
    cache: "no-store",
  });
  return res.json();
}

const players: Player[] = [];

export function addPlayer(player: Player) {
  players.push(player);
}

export function getAllPlayers(): Player[] {
  return players;
}
