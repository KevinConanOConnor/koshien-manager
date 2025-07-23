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

// Represents an individual pitch in a player's arsenal
export interface Pitch {
  type: PitchType;        // Type of pitch (e.g., Fastball, Slider)
  velocity: number;       // Current velocity (e.g., 92 mph)
  movement: number;       // Break or deviation of the pitch (0–100 scale)
  control: number;        // Ability to locate the pitch (0–100 scale)
}
