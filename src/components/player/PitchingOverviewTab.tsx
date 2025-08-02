"use client";

import { Player } from "@/models/player";
import StatDisplay from "@/components/player/StatDisplay";
import { formatStat } from "@/lib/playerRatings";

const Display = ({ name, value }: { name: string; value: number }) => (
  <StatDisplay name={name} value={formatStat(value)} />
);

export default function PitchingOverviewTab({ player }: { player: Player }) {
  return (
    <div className="space-y-6">
      {/* Overall Pitching Rating: Stamina Only */}
      <section>
        <h2 className="text-xl font-bold mb-2">Pitching Overview</h2>
        <div className="grid grid-cols-1 max-w-xs">
          <Display name="Endurance" value={player.pitchingStamina} />
        </div>
      </section>

      {/* Pitch Arsenal */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Pitch Arsenal</h3>
        {player.pitches.length > 0 ? (
          <div className="space-y-3">
            {player.pitches.map((pitch, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-300 p-4 shadow-sm border border-gray-200"
              >
                <div className="text-md font-semibold mb-2 text-gray-800">
                  {pitch.type}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Display name="Velocity" value={pitch.velocity} />
                  <Display name="Control" value={pitch.control} />
                  <Display name="Movement" value={pitch.movement} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 italic">No pitch data available.</p>
        )}
      </section>

      {/* Status Modifiers */}
      <section>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Status Modifiers</h3>
        <div className="space-y-1 text-sm">
          <Display name="Confidence" value={player.confidence} />
          <Display name="Energy" value={player.energy} />
        </div>
      </section>
    </div>
  );
}
