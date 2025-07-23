"use client";

import { Player } from "@/models/player";
import StatDisplay from "./StatDisplay";

interface Props {
  player: Player;
}

export default function OverviewTab({ player }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* Left Column: Hitting / Speed / Physical */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold border-b pb-1">Offense & Physical</h2>
        <StatDisplay name="Contact" value={player.contact} />
        <StatDisplay name="Game Power" value={player.gamePower} />
        <StatDisplay name="Batting Eye" value={player.battingEye} />
        <StatDisplay name="Speed" value={player.speed} />
        <StatDisplay name="Raw Strength" value={player.rawStrength} />
        <StatDisplay name="Core Strength" value={player.coreStrength} />
      </div>

      {/* Middle Column: Fielding & Throwing */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold border-b pb-1">Fielding</h2>
        <StatDisplay name="Fielding Technique" value={player.fieldingTechnique} />
        <StatDisplay name="Arm Strength" value={player.armStrength} />
        <StatDisplay name="Arm Accuracy" value={player.armAccuracy} />

        <h3 className="font-semibold mt-4">Positional Range</h3>
        {Object.entries(player.positionalRange)
          .sort(([, a], [, b]) => b - a)
          .map(([pos, val]) => (
            <StatDisplay key={pos} name={pos} value={val} />
          ))}
      </div>

      {/* Right Column: Status / Morale */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold border-b pb-1">Status</h2>
        <StatDisplay name="Confidence" value={player.confidence} />
        <StatDisplay name="Energy" value={player.energy} />
        <p className="text-sm text-gray-500 mt-2">
          Morale, injury status, or narrative effects could go here later.
        </p>
      </div>
    </div>
  );
}
