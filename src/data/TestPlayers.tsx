import { Player } from "@/models/player";
import { FieldingPosition } from "@/models/positions";
import { Pitch, PitchType } from "@/models/pitching";
import { recalculateOveralls } from "@/lib/playerRatings";

export const players: Player[] = [
  {
    id: "1",
    firstName: "Satoru",
    lastName: "Furuya",
    fullName: "Satoru Furuya",
    yearLabel: "Sophomore",
    jerseyNumber: 11,
    year: 2,
    heightCm: 185,
    weightKg: 70,
    hittingOverall: 0,
    pitchingOverall: 0,
    fieldingOverall: 0,

    personality: {
      BaseballIQ: 470,
      WorkEthic: 520,
      Composure: 680,
      Charisma: 400,
      Coachability: 500,
      Fortitude: 600,
      Flair: 350,
    },

    rawStrength: 600,
    coreStrength: 570,
    speed: 500,

    positionalRange: {
      "P": 750,
      "RF": 250,
    },
    fieldingTechnique: 500,
    armStrength: 720,
    armAccuracy: 550,

    contact: 420,
    gamePower: 500,
    battingEye: 380,

    potentialCoordination: 500,
    potentialStrength: 720,
    potentialSpeed: 580,

    hasPitchingHistory: true,
    pitchingVelocity: 780, // ≈104 mph real-world
    pitchingControl: 520,
    pitchingMovement: 600,
    pitchingStamina: 450,

    pitches: [
      {
        type: PitchType.FourSeamFastball,
        velocity: 750,
        control: 480,
        movement: 350,
      },
      {
        type: PitchType.Slider,
        velocity: 620,
        control: 460,
        movement: 600,
      },
      {
        type: PitchType.Changeup,
        velocity: 580,
        control: 430,
        movement: 480,
      },
    ],

    confidence: 550,
    energy: 800,
    bonds: ["Sawamura"],
  },

  {
    id: "2",
    firstName: "Daiki",
    lastName: "Nakamura",
    fullName: "Daiki Nakamura",
    yearLabel: "Freshman",
    jerseyNumber: 22,
    year: 1,
    heightCm: 172,
    weightKg: 65,
    hittingOverall: 0,
    pitchingOverall: 0,
    fieldingOverall: 0,

    personality: {
      BaseballIQ: 400,
      WorkEthic: 420,
      Composure: 380,
      Charisma: 370,
      Coachability: 420,
      Fortitude: 400,
      Flair: 390,
    },

    rawStrength: 420,
    coreStrength: 400,
    speed: 480,

    positionalRange: {
      "2B": 450,
      "SS": 370,
      "3B": 320,
    },
    fieldingTechnique: 400,
    armStrength: 400,
    armAccuracy: 400,

    contact: 450,
    gamePower: 320,
    battingEye: 420,

    potentialCoordination: 480,
    potentialStrength: 450,
    potentialSpeed: 480,

    hasPitchingHistory: false,
    pitchingVelocity: 320,
    pitchingControl: 360,
    pitchingMovement: 320,
    pitchingStamina: 400,

    pitches: [],

    confidence: 400,
    energy: 700,
    bonds: [],
  },

  {
    id: "4",
    firstName: "Yuuki",
    lastName: "Tetsuya",
    fullName: "Yuuki Tetsuya",
    yearLabel: "Senior",
    jerseyNumber: 3,
    year: 3,
    heightCm: 180,
    weightKg: 78,
    hittingOverall: 0,
    pitchingOverall: 0,
    fieldingOverall: 0,

    personality: {
      BaseballIQ: 850,
      WorkEthic: 900,
      Composure: 800,
      Charisma: 880,
      Coachability: 850,
      Fortitude: 880,
      Flair: 500,
    },

    rawStrength: 830,
    coreStrength: 800,
    speed: 480,

    positionalRange: {
      "1B": 820,
      "3B": 350,
    },
    fieldingTechnique: 700,
    armStrength: 600,
    armAccuracy: 620,

    contact: 850,
    gamePower: 720,
    battingEye: 840,

    potentialCoordination: 880,
    potentialStrength: 800,
    potentialSpeed: 480,

    hasPitchingHistory: false,
    pitchingVelocity: 0,
    pitchingControl: 0,
    pitchingMovement: 0,
    pitchingStamina: 0,
    pitches: [],

    confidence: 800,
    energy: 750,
    bonds: ["Miyuki", "Eijun", "Furuya"],
  },
];


players.forEach((player, i) => {
  players[i] = recalculateOveralls(player);
});
