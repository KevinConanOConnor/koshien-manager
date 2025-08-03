import { stat } from "fs";

export interface Weighted<T> {
  item: T;
  weight: number;
}


// 🎲 Normal distribution generator using Box-Muller transform
function normal(mean: number, stddev: number): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2); // ~N(0,1)
  return z * stddev + mean;
}

// 🎯 Maps a player's ability sigma to an internal 1000-scale rating as a freshman
export function sigmaToFreshmanInternal(sigma: number): number {
  const base = 392;         // 0σ maps to ~55 visible
  const perSigma = 59;    // 3σ maps to ~80 visible
  return Math.round(base + sigma * perSigma);
}

// 🎯 Generates a stat by sampling normally around a mean with clamping
export function generateStat(mean: number, stdDev: number = 30, min = 0, max = 1000): number {
  const value = normal(mean, stdDev);
  return Math.max(min, Math.min(max, Math.round(value)));
}


export function generateSigma(): number {
  const standardNormal = normal(0, 1)
  return standardNormal;
}



//Take in a an array of type T and get a random value from it
export function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}


//Given an array of items with weights, select an random item from the array
export function weightedRandom<T>(items: { item: T; weight: number }[]): T {
  const total = items.reduce((sum, { weight }) => sum + weight, 0);
  const r = Math.random() * total;
  let acc = 0;
  for (const { item, weight } of items) {
    acc += weight;
    if (r <= acc) return item;
  }
  return items[items.length - 1].item;
}