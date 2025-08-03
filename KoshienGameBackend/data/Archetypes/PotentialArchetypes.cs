import { PotentialArchetype } from "@/types/archetypes";
import { Weighted } from "@/utils/math";

export const potentialArchetypes: Weighted<PotentialArchetype>[] = [
  {
    item: {
      name: "Balanced",
      weights: {
        potentialHitting: 1.0,
        potentialCoordination: 1.0,
        potentialStrength: 1.0,
        potentialSpeed: 1.0,
        pitchingVelocity: 1.0,
        pitchingMovement: 1.0,
        pitchingControl: 1.0,
      },
    },
    weight: 65,
  },

  // Slight tilts toward various identities
  ...[
    ["Power Hitter",       [1.1, 1.0, 1.15, 0.95, 0.95, 0.9, 0.85]],
    ["Speedy Contact",     [1.05, 1.05, 0.95, 1.15, 0.85, 0.9, 0.95]],
    ["Disciplined Bat",    [1.1, 1.1, 0.9, 1.0, 0.85, 0.9, 1.05]],
    ["Fielding First",     [0.95, 1.1, 1.0, 1.05, 0.85, 0.9, 1.15]],
    ["Well-Rounded",       [1.0, 1.0, 1.05, 1.05, 0.95, 0.95, 1.0]],
    ["Strong Arm",         [0.9, 0.95, 1.15, 1.0, 1.0, 0.9, 1.1]],
    ["Compact Swing",      [1.15, 1.05, 0.9, 1.05, 0.9, 0.9, 0.95]],
    ["Patient Hitter",     [1.05, 1.15, 0.95, 0.95, 0.85, 1.0, 1.0]],
    ["Two-Way Lean",       [1.0, 1.0, 1.0, 0.95, 1.05, 1.0, 1.0]],
    ["Crafty Pitcher",     [0.9, 1.0, 1.0, 1.0, 0.95, 1.15, 1.1]],
    ["Power Pitcher",      [0.85, 0.9, 1.05, 0.95, 1.2, 1.05, 0.9]],
    ["Soft-Toss Control",  [0.9, 1.0, 0.95, 1.05, 0.9, 1.0, 1.2]],
    ["Sinker Slider",      [0.9, 1.0, 1.0, 1.0, 1.05, 1.1, 0.95]],
    ["Late Bloomer",       [0.95, 0.95, 0.95, 0.95, 1.1, 1.1, 1.1]],
    ["Quick Twitch",       [1.05, 1.1, 1.05, 1.2, 0.9, 0.9, 0.8]],
    ["Velocity First",     [0.85, 0.9, 1.0, 1.0, 1.2, 1.0, 0.95]],
    ["Movement Master",    [0.9, 0.95, 1.0, 1.0, 1.0, 1.2, 0.95]],
    ["Control Freak",      [0.95, 1.05, 1.0, 1.0, 0.9, 1.0, 1.2]],
    ["Bat First",          [1.15, 1.05, 1.05, 1.0, 0.9, 0.85, 0.9]],
    ["Glove First",        [0.95, 1.1, 1.05, 1.05, 0.9, 0.9, 1.0]],
    ["Gap Hitter",         [1.1, 1.1, 0.9, 1.05, 0.9, 0.9, 1.0]],
    ["Athletic Utility",   [1.0, 1.05, 1.0, 1.15, 0.85, 0.9, 1.05]],
    ["Lanky Prospect",     [0.9, 1.05, 0.95, 1.1, 1.1, 1.0, 0.9]],
    ["Raw Tools",          [1.0, 0.9, 1.1, 1.2, 1.0, 0.9, 0.9]],
    ["Hit + Control",      [1.1, 1.0, 1.0, 1.0, 0.9, 1.0, 1.1]],
    ["Spin Artist",        [0.9, 0.95, 0.95, 1.0, 0.9, 1.2, 1.1]],
    ["Fastballer",         [0.85, 0.9, 1.05, 1.0, 1.2, 0.9, 0.9]],
    ["Stamina Build",      [1.0, 1.0, 1.1, 1.0, 0.9, 1.0, 1.0]],
    ["Refined Mechanics",  [0.95, 1.05, 1.0, 0.95, 1.0, 1.05, 1.0]],
    ["Athletic Hurler",    [0.9, 0.95, 1.0, 1.15, 1.05, 1.0, 0.95]],
  ].map(([name, w]) => ({
    item: {
      name: name as string,
      weights: {
        potentialHitting: w[0],
        potentialCoordination: w[1],
        potentialStrength: w[2],
        potentialSpeed: w[3],
        pitchingVelocity: w[4],
        pitchingMovement: w[5],
        pitchingControl: w[6],
      },
    },
    weight: 1, // Equal for non-balanced ones
  })),
];
