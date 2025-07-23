import { Player } from "@/models/player";

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
  if (!player.hasPitchingHistory) return 0;

  const weights = {
    velocity: 0.35,
    control: 0.35,
    movement: 0.2,
    stamina: 0.1, // You can rename `energy` to `stamina` in the model if you prefer
  };

  const stamina = player.pitchingStamina;

  const score =
    weights.velocity * player.pitchingVelocity +
    weights.control * player.pitchingControl +
    weights.movement * player.pitchingMovement +
    weights.stamina * stamina;

  return Math.round(score);
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