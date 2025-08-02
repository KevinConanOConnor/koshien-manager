import { formatStat } from "@/lib/playerRatings";
import { getStatColor } from "./StatDisplay";
import { Player } from "@/models/player";

export const DisplayOverall = ({ name, value }: Props) => {
  const formatted = formatStat(value);
  return (
    <div>
      {name}
      <span className={getStatColor(formatted)}> {formatted}</span>
    </div>
  );
};

export default function PlayerCard({ player }: { player: Player }) {
    const isPitcher = player.positionalRange.P !== undefined;

  return (
    <div className="w-[360px] h-[160px] bg-zinc-800 rounded-xl shadow-lg p-4 flex justify-between items-center">
      {/* Left: Avatar & Info */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-zinc-600 rounded-full" />
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-white leading-tight">{player.fullName}</h2>
          <p className="text-sm text-zinc-400">{player.yearLabel}</p>
          <p className="text-sm text-zinc-400">{player.heightCm} cm</p>
        </div>
      </div>

      {/* Right: Ratings */}
      <div className="flex flex-col items-end space-y-1">
        <p className="text-sm font-bold text-white">
            <DisplayOverall name="Hitting Overall" value={player.hittingOverall} />
        </p>
        <p className="text-sm font-bold text-white">
          <DisplayOverall name="Fielding Overall" value={player.fieldingOverall} />
        </p>

        {isPitcher && (
          <p className="text-sm font-bold text-white">
            <DisplayOverall name="Pitching Overall" value={player.pitchingOverall} />
        </p>
        )}
      </div>
    </div>
  );
}
