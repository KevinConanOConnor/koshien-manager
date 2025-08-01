// 🎲 Normal distribution generator using Box-Muller transform
function generateStat(mean: number, stdDev: number, min = 0, max = 140): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // Avoid 0
  while (v === 0) v = Math.random();

  const standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  let value = Math.round(standardNormal * stdDev + mean);

  // Clamp to allowed range
  return Math.max(min, Math.min(max, value));
}


export function generateSigma(): number {
  let u = 0, v = 0;
  // Keep retrying if we get 0 (log(0) is undefined)
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  // Box-Muller transform
  const standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return standardNormal;
}
