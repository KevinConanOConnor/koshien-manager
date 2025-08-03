// Pitch types, with short codes like "4SFB" (4-seam fastball), "SL" (slider), etc.
export enum PitchType {
  FourSeamFastball = "4SFB",
  TwoSeamFastball = "2SFB",
  Cutter = "CUT",
  Slider = "SL",
  Curveball = "CB",
  Changeup = "CH",
  Splitter = "SPL",
  Forkball = "FB",
  Sinker = "SNK",
  Knuckleball = "KNK"
}

// Represents an individual pitch in a player's arsenal (0-1000 scale)
export interface Pitch {
  type: PitchType;        // Type of pitch (e.g., Fastball, Slider)
  velocity: number;       // Current Velocity (1000 = 105 mph peak for fastball, 0 = 50 mph peak fastball)
  movement: number;       // Break or deviation of the pitch 
  control: number;        // Ability to locate the pitch 
}



function convertVelocityRatingToMPH(rating: number, pitchType: PitchType): number {
  const pitchTypeMaxVelocity: Record<PitchType, number> = {
    [PitchType.FourSeamFastball]: 105,
    [PitchType.TwoSeamFastball]: 102,
    [PitchType.Cutter]: 96,
    [PitchType.Slider]: 90,
    [PitchType.Curveball]: 80,
    [PitchType.Changeup]: 90,
    [PitchType.Splitter]: 88,
    [PitchType.Forkball]: 85,
    [PitchType.Sinker]: 95,
    [PitchType.Knuckleball]: 70,
  };

  const maxMPH = pitchTypeMaxVelocity[pitchType];
  const minMPH = 50; // universal baseline

  return Math.round(minMPH + (rating / 1000) * (maxMPH - minMPH));
}

