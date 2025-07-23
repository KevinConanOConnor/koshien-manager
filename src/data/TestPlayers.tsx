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
    fieldingOverall:0,

    personality: {
      BaseballIQ: 65,
      WorkEthic: 70,
      Composure: 85,
      Charisma: 50,
      Coachability: 60,
      Fortitude: 75,
      Flair: 40
    },

    rawStrength: 80,
    coreStrength: 75,
    speed: 65,

    positionalRange: {
      "P": 85,
      "RF": 20
    },
    fieldingTechnique: 55,
    armStrength: 90,
    armAccuracy: 70,

    contact: 50,
    gamePower: 60,
    battingEye: 45,

    potentialCoordination: 65,
    potentialStrength: 90,
    potentialSpeed: 70,

    hasPitchingHistory: true,
    pitchingVelocity: 95,
    pitchingControl: 70,
    pitchingMovement: 80,
    pitchingStamina: 60,

    pitches: [
      {
        type: PitchType.FourSeamFastball,
        velocity: 92,
        control: 65,
        movement: 45
      },
      {
        type: PitchType.Slider,
        velocity: 80,
        control: 60,
        movement: 75
      },
      {
        type: PitchType.Changeup,
        velocity: 76,
        control: 55,
        movement: 60
      }
    ],

    confidence: 70,
    energy: 90,
    bonds: ["Sawamura"]
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
    fieldingOverall:0,

    personality: {
      BaseballIQ: 55,
      WorkEthic: 60,
      Composure: 50,
      Charisma: 45,
      Coachability: 60,
      Fortitude: 55,
      Flair: 50
    },

    rawStrength: 55,
    coreStrength: 50,
    speed: 60,

    positionalRange: {
      "2B": 55,
      "SS": 45,
      "3B": 40
    },
    fieldingTechnique: 50,
    armStrength: 50,
    armAccuracy: 50,

    contact: 55,
    gamePower: 40,
    battingEye: 50,

    potentialCoordination: 60,
    potentialStrength: 55,
    potentialSpeed: 60,

    hasPitchingHistory: false,
    pitchingVelocity: 40,
    pitchingControl: 45,
    pitchingMovement: 40,
    pitchingStamina: 60,
    pitches: [],

    confidence: 50,
    energy: 80,
    bonds: []
  }
];

players.forEach((player, i) => {
  players[i] = recalculateOveralls(player);
});
