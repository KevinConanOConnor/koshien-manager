import { FieldingPosition } from "./positions";
import { Pitch } from "./pitching";

// 🧠 Mental Traits
export interface PersonalityProfile {
  BaseballIQ: number;      // DEV STAT
  WorkEthic: number;       // DEV STAT
  Composure: number;       // GAME STAT
  Charisma: number;        // DEV STAT
  Coachability: number;    // POTENTIAL DEV STAT
  Fortitude: number;       // POTENTIAL DEV STAT
  Flair: number;           // FLAVOR STAT
}

// 🧍 Player Interface
export interface Player {
  // 🆔 Identity
  id: string;
  firstName: string;
  lastName: string;
  jerseyNumber: number;
  year: number;                     // 1–3 (Freshman, Sophomore, Senior)
  heightCm: number;
  weightKg: number;

  hittingOverall: number;
  fieldingOverall: number;
  pitchingOverall: number;

  // 🧠 Personality
  personality: PersonalityProfile;

  // 🏋️ Physical Traits
  rawStrength: number;             // DEV STAT
  coreStrength: number;            // DEV STAT
  speed: number;                   // GAME STAT

  // ⚾ Fielding & Throwing
  positionalRange: Partial<Record<FieldingPosition, number>>;  // GAME STAT
  fieldingTechnique: number;       // GAME STAT
  armStrength: number;             // GAME STAT (develops from pitchingVelocity)
  armAccuracy: number;             // GAME STAT (develops from pitchingControl)

  // 🥎 Hitting
  contact: number;                 // GAME STAT
  gamePower: number;              // GAME STAT
  battingEye: number;             // GAME STAT

  // 📈 Potentials (Dev Stats)
  potentialCoordination: number;       // Governs Contact + Eye + Fielding Technique
  potentialStrength: number;           // Raw/Core Strength growth
  potentialSpeed: number;              // Speed development

  // 🧪 Pitching Potential + Arsenal
  hasPitchingHistory: boolean;        // If true, UI displays pitcher view
  pitchingVelocity: number;           // DEV STAT - Governs max velocity + arm strength
  pitchingControl: number;            // DEV STAT - Governs command + arm accuracy
  pitchingMovement: number;           // DEV STAT - Governs break on pitches
  pitchingStamina: number;
  pitches: Pitch[];                   // Arsenal (may be empty)



  // 📊 Status Stats
  confidence: number;                 // In-game psychology
  energy: number;                     // Like FM's match fitness

  // 🏅 Narrative
  bonds: string[];

  // 🔧 Utilities
  fullName?: string;
  yearLabel?: string;
}











/* Ratings Scale
| **Rating** | **Tier**                       | **Interpretation**                         |
| ---------- | ------------------------------ | ------------------------------------------ |
| 0–19       | Untrained / Clueless           | Doesn’t know the role                      |
| 20–39      | Poor                           | Inconsistent, a liability                  |
| 40–59      | Below Average / Raw            | Some capability, lacks polish              |
| 60–79      | Solid High School Level        | Average starter or above average backup    |
| 80–99      | Excellent Regional/National HS | Reliable top-tier high school starter      |
| 100–109    | Elite HS / Fringe Pro Prospect | Top 1% nationally – college scout interest |
| 110–120+   | Professional Level Potential   | Draft-grade player, can challenge adults   |
*/