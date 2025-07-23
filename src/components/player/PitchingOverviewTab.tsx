"use client";

import { Player } from "@/models/player";
import StatDisplay from "@/components/player/StatDisplay";

export default function PitchingOverviewTab({ player }: { player: Player }) {
  return (
    <div className="space-y-6">
      {/* Overall Pitching Rating: Stamina Only */}
      <section>
        <h2 className="text-xl font-bold mb-2">Pitching Overview</h2>
        <div className="grid grid-cols-1 max-w-xs">
          <StatDisplay name="Endurance" value={player.pitchingStamina} />
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
                  <StatDisplay name="Velocity" value={pitch.velocity} />
                  <StatDisplay name="Control" value={pitch.control} />
                  <StatDisplay name="Movement" value={pitch.movement} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 italic">No pitch data available.</p>
        )}
      </section>


      {/* Status Modifiers - Compact, Single Column */}
      <section>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Status Modifiers</h3>
        <div className="space-y-1 text-sm">
          <StatDisplay name="Confidence" value={player.confidence} />
          <StatDisplay name="Energy" value={player.energy} />
        </div>

      </section>
    </div>
  );
}
