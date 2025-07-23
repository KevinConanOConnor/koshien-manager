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
  if (value > 100) return "text-purple-600";      // Elite tier
  if (value >= 80) return "text-green-600";
  if (value >= 60) return "text-yellow-600";
  if (value >= 40) return "text-orange-500";
  return "text-red-500";
}
