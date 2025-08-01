interface Props {
  name: string;
  value: number;
}

export default function StatDisplay({ name, value }: Props) {
  const color = getStatColor(value);

  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-700">{name}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

export function getStatColor(value: number): string {
  if (value >= 120) return "text-purple-600";      // Rare elite, NPB Star
  if (value >= 110) return "text-purple-500";      // Top High School National level
  if (value >= 100) return "text-violet-500";      // Top high school tier
  if (value >= 90) return "text-indigo-500";       // Excellent
  if (value >= 80) return "text-blue-500";         // Strong
  if (value >= 70) return "text-blue-400";         // Solid
  if (value >= 60) return "text-blue-300";         // Average
  if (value >= 50) return "text-gray-300";         // Slightly below average
  if (value >= 40) return "text-gray-500";         // Mediocre
  if (value >= 30) return "text-zinc-400";         // Poor
  if (value >= 20) return "text-zinc-600";         // Very poor
  return "text-zinc-800";                          // Dreadful
}
