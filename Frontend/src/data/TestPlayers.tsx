import { Player } from "@/models/player";
import { FieldingPosition } from "@/models/positions";
import { Pitch, PitchType } from "@/models/pitching";
import { recalculateOveralls } from "@/lib/playerRatings";
import { ParamValue } from "next/dist/server/request/params";


export async function fetchPlayers(): Promise<Player[]> {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const res = await fetch(`${baseUrl}/api/players`, {
    cache: "no-store",
  });
  return res.json();
}


export async function fetchPlayer(id: ParamValue): Promise<Player | undefined> {
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  try {
    const res = await fetch(`${baseUrl}/api/player/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Player not found");
    }

    const player: Player = await res.json();
    return player;
  } catch (error) {
    console.error("Failed to fetch player:", error);
    return undefined;
  }
}





//Simulate DB Code

const players: Player[] = [];

export function addPlayer(player: Player) {
  players.push(player);
}

export function getAllPlayers(): Player[] {
  return players;
}

export function getPlayer(id: string): Player | undefined{
  console.log(id)

  return players.find((player) => id == player.id)
}