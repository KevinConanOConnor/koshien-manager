import { Player } from "@/models/player";

export function formatStat(raw: number): number {
  return Math.min(Math.round(raw / 7.1), 140);
};


export function recalculateOveralls(player: Player): Player {
  return {
    ...player,
    hittingOverall: calculateHittingOverall(player),
    pitchingOverall: calculatePitchingOverall(player),
    fieldingOverall: calculateFieldingOverall(player),
  };
}

export function calculateHittingOverall(player: Player): number {
  const weights = {
    contact: 0.4,
    gamePower: 0.25,
    battingEye: 0.25,
    speed: 0.1, // Minor bonus to hitting overall for infield singles, hustle, etc.
  };

  const score =
    weights.contact * player.contact +
    weights.gamePower * player.gamePower +
    weights.battingEye * player.battingEye +
    weights.speed * player.speed;

  return Math.round(score);
}


export function calculatePitchingOverall(player: Player): number {
  if (!player.hasPitchingHistory || player.pitches.length === 0) return 0;

  const staminaWeight = 0.15; // Portion of overall rating from stamina
  const pitchWeightTotal = 1 - staminaWeight;

  // Step 1: Score each pitch (average of 3 qualities)
  const scoredPitches = player.pitches.map(pitch => {
    const score = (pitch.velocity + pitch.movement + pitch.control) / 3;
    return score;
  });

  // Step 2: Sort pitches by effectiveness
  scoredPitches.sort((a, b) => b - a); // Highest-rated first

  // Step 3: Apply diminishing weights
  const weightedPitchScore = scoredPitches.reduce((acc, score, i) => {
    const weight = Math.pow(0.65, i); // Each pitch contributes ~60% as much as the one before
    return acc + score * weight;
  }, 0);

  // Step 4: Normalize pitch score to total weight
  const totalWeight = scoredPitches
    .map((_, i) => Math.pow(0.7, i))
    .reduce((a, b) => a + b, 0);

  const normalizedPitchScore = weightedPitchScore / totalWeight;

  // Step 5: Combine with stamina
  const finalScore =
    pitchWeightTotal * normalizedPitchScore +
    staminaWeight * player.pitchingStamina;

  return Math.round(finalScore);
}




export function calculateFieldingOverall(player: Player): number {
  const { positionalRange, fieldingTechnique, armStrength, armAccuracy } = player;

  // Find top position (highest positional rating)
  const topPosEntry = Object.entries(positionalRange).reduce(
    (best, [pos, rating]) =>
      rating !== undefined && rating > best.rating
        ? { pos, rating }
        : best,
    { pos: null as string | null, rating: -1 }
  );

  if (topPosEntry.rating === -1) return 0; // No valid positions

  // Weighted average calculation
  const positionRating = topPosEntry.rating;
  const overall =
    0.4 * positionRating +
    0.3 * fieldingTechnique +
    0.15 * armStrength +
    0.15 * armAccuracy;

  return Math.round(overall);
}