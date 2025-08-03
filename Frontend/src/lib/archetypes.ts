import { PitchType } from "@/models/pitching";
import { FieldingPosition } from "@/models/positions";
import { Weighted } from "./mathGenerators";

export interface Archetype {
    name: string;
    abilityWeights: Record<string, number>;
    positions: FieldingPosition[];
  }
  
  
  export const balancedHitterArchetype: Archetype = {
    name: "Balanced Hitter",
    abilityWeights: {
      contact: 1,
      gamePower: 1,
      battingEye: 1,
      fieldingOverall: 1,
      speed: 1.15,
      armStrength: 1,
      armAccuracy: 1,
      fieldingTechnique: 1,
      rawStrength: 1,
      coreStrength: 1,
    },
    positions: [
      FieldingPosition.Catcher,
      FieldingPosition.FirstBase,
      FieldingPosition.ThirdBase,
      FieldingPosition.Shortstop,
      FieldingPosition.SecondBase,
      FieldingPosition.CenterField,
      FieldingPosition.LeftField,
      FieldingPosition.RightField,
      FieldingPosition.CenterField,
    ],
  };
  
  export const hitterArchetypes: Archetype[] = [
    {
      name: "Power Hitter",
      abilityWeights: { contact: 0.9, gamePower: 1.3, battingEye: 0.95, fieldingOverall: 0.9, speed: 1.15, armStrength: 1.0, armAccuracy: 0.9, fieldingTechnique: 0.9, rawStrength: 1.1, coreStrength: 1.0 },
      positions: [FieldingPosition.Catcher,FieldingPosition.FirstBase, FieldingPosition.ThirdBase,FieldingPosition.LeftField, FieldingPosition.RightField],
    },
    {
      name: "Contact Specialist",
      abilityWeights: { contact: 1.3, gamePower: 0.8, battingEye: 1.05, fieldingOverall: 0.9, speed: 1.15, armStrength: 0.95, armAccuracy: 0.95, fieldingTechnique: 1.0, rawStrength: 0.9, coreStrength: 1.0 },
      positions: [FieldingPosition.Catcher, FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField],
    },
    {
      name: "Slugger",
      abilityWeights: { contact: 0.85, gamePower: 1.35, battingEye: 0.95, fieldingOverall: 0.85, speed: 1.15, armStrength: 0.95, armAccuracy: 0.95, fieldingTechnique: 0.85, rawStrength: 1.15, coreStrength: 1.0 },
      positions: [FieldingPosition.Catcher,FieldingPosition.FirstBase, FieldingPosition.ThirdBase,FieldingPosition.LeftField, FieldingPosition.RightField],
    },
    {
      name: "Speedster",
      abilityWeights: { contact: 1.05, gamePower: 0.75, battingEye: 1.0, fieldingOverall: 1.05, speed: 1.3, armStrength: 0.95, armAccuracy: 0.95, fieldingTechnique: 1.0, rawStrength: 0.85, coreStrength: 1.0 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField],
    },
    {
      name: "Glove First",
      abilityWeights: { contact: 0.9, gamePower: 0.75, battingEye: 0.9, fieldingOverall: 1.3, speed: 1.2, armStrength: 1.05, armAccuracy: 1.05, fieldingTechnique: 1.25, rawStrength: 0.85, coreStrength: 0.95 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField],
    },
    {
      name: "Slap Hitter",
      abilityWeights: { contact: 1.25, gamePower: 0.7, battingEye: 1.1, fieldingOverall: 0.95, speed: 1.25, armStrength: 0.9, armAccuracy: 0.9, fieldingTechnique: 1.0, rawStrength: 0.8, coreStrength: 1.0 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField, FieldingPosition.LeftField],
    },
    {
      name: "Line Drive Hitter",
      abilityWeights: { contact: 1.2, gamePower: 1.0, battingEye: 1.1, fieldingOverall: 1.0, speed: 1.2, armStrength: 0.95, armAccuracy: 0.95, fieldingTechnique: 1.0, rawStrength: 0.95, coreStrength: 0.9 },
      positions: [FieldingPosition.Catcher, FieldingPosition.SecondBase, FieldingPosition.CenterField, FieldingPosition.LeftField, FieldingPosition.Shortstop],
    },
    {
      name: "Toolsy Prospect",
      abilityWeights: { contact: 1.05, gamePower: 1.05, battingEye: 0.95, fieldingOverall: 1.05, speed: 1.2, armStrength: 1.05, armAccuracy: 0.95, fieldingTechnique: 1.05, rawStrength: 1.0, coreStrength: 0.85 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField, FieldingPosition.RightField, FieldingPosition.Catcher, FieldingPosition.Shortstop],
    },
    {
      name: "Utility Guy",
      abilityWeights: { contact: 1.0, gamePower: 0.85, battingEye: 1.05, fieldingOverall: 1.1, speed: 1.15, armStrength: 0.95, armAccuracy: 1.0, fieldingTechnique: 1.05, rawStrength: 0.95, coreStrength: 0.9 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField, FieldingPosition.LeftField],
    },
    {
      name: "Gap Hitter",
      abilityWeights: { contact: 1.15, gamePower: 1.1, battingEye: 1.0, fieldingOverall: 0.95, speed: 1.2, armStrength: 0.95, armAccuracy: 0.95, fieldingTechnique: 1.0, rawStrength: 0.95, coreStrength: 0.95 },
      positions: [FieldingPosition.Shortstop, FieldingPosition.SecondBase, FieldingPosition.CenterField, FieldingPosition.LeftField, FieldingPosition.Catcher],
    }
  ];
  


  export interface PotentialArchetype {
    name: string;
    weights: {
      potentialHitting: number;
      potentialCoordination: number;
      potentialStrength: number;
      potentialSpeed: number;
      pitchingVelocity: number;
      pitchingMovement: number;
      pitchingControl: number;
    };
  }
  

  export const potentialArchetypes: { archetype: PotentialArchetype; weight: number }[] = [
    {
      archetype: {
        name: "Balanced",
        weights: {
          potentialHitting: 1,
          potentialCoordination: 1,
          potentialStrength: 1,
          potentialSpeed: 1,
          pitchingVelocity: 1,
          pitchingMovement: 1,
          pitchingControl: 1,
        },
      },
      weight: 0.55,
    },
    {
      archetype: {
        name: "Power Arm",
        weights: {
          potentialHitting: 0.85,
          potentialCoordination: 0.95,
          potentialStrength: 1.2,
          potentialSpeed: 0.9,
          pitchingVelocity: 1.4,
          pitchingMovement: 1.05,
          pitchingControl: 0.65,
        },
      },
      weight: 0.08,
    },
    {
      archetype: {
        name: "Crafty Pitcher",
        weights: {
          potentialHitting: 0.9,
          potentialCoordination: 1.05,
          potentialStrength: 0.9,
          potentialSpeed: 1.0,
          pitchingVelocity: 0.8,
          pitchingMovement: 1.2,
          pitchingControl: 1.15,
        },
      },
      weight: 0.07,
    },
    {
      archetype: {
        name: "Speedy Utility",
        weights: {
          potentialHitting: 1.0,
          potentialCoordination: 0.95,
          potentialStrength: 0.85,
          potentialSpeed: 1.35,
          pitchingVelocity: 1.0,
          pitchingMovement: 0.9,
          pitchingControl: 0.95,
        },
      },
      weight: 0.06,
    },
    {
      archetype: {
        name: "Toolsy Enigma",
        weights: {
          potentialHitting: 1.15,
          potentialCoordination: 1.1,
          potentialStrength: 1.1,
          potentialSpeed: 0.9,
          pitchingVelocity: 0.85,
          pitchingMovement: 0.95,
          pitchingControl: 0.85,
        },
      },
      weight: 0.04,
    },
    {
      archetype: {
        name: "Raw Project",
        weights: {
          potentialHitting: 0.75,
          potentialCoordination: 0.85,
          potentialStrength: 1.2,
          potentialSpeed: 1.1,
          pitchingVelocity: 1.1,
          pitchingMovement: 1.0,
          pitchingControl: 0.7,
        },
      },
      weight: 0.035,
    },
    {
      archetype: {
        name: "Soft Toss Specialist",
        weights: {
          potentialHitting: 0.9,
          potentialCoordination: 1.1,
          potentialStrength: 0.85,
          potentialSpeed: 0.95,
          pitchingVelocity: 0.75,
          pitchingMovement: 1.25,
          pitchingControl: 1.15,
        },
      },
      weight: 0.025,
    },
    {
      archetype: {
        name: "Thrower not Pitcher",
        weights: {
          potentialHitting: 0.95,
          potentialCoordination: 0.8,
          potentialStrength: 1.15,
          potentialSpeed: 1.0,
          pitchingVelocity: 1.2,
          pitchingMovement: 0.8,
          pitchingControl: 0.75,
        },
      },
      weight: 0.025,
    },
    {
      archetype: {
        name: "Power Hitter",
        weights: {
          potentialHitting: 1.25,
          potentialCoordination: 0.9,
          potentialStrength: 1.25,
          potentialSpeed: 0.9,
          pitchingVelocity: 0.85,
          pitchingMovement: 0.8,
          pitchingControl: 0.85,
        },
      },
      weight: 0.025,
    },
    {
      archetype: {
        name: "Strength Athlete",
        weights: {
          potentialHitting: 1.0,
          potentialCoordination: 0.85,
          potentialStrength: 1.35,
          potentialSpeed: 1.1,
          pitchingVelocity: 1.1,
          pitchingMovement: 0.85,
          pitchingControl: 0.75,
        },
      },
      weight: 0.015,
    },
  ];
  





  /** A freshman’s visible pitch mix                                    */
export interface ArsenalArchetype {
    name: string;           // label for scouting reports
    pitchTypes: PitchType[]; // 1–4 pitches in priority order
  }
  
  /** 30 realistic high-school mixes — weighted                           */
  export const weightedPitchingArchetypes: Weighted<ArsenalArchetype>[] = [
    { item: { name: "4SFB-Slider", pitchTypes: [PitchType.FourSeamFastball, PitchType.Slider] }, weight: 0.18 },
    { item: { name: "4SFB-Changeup", pitchTypes: [PitchType.FourSeamFastball, PitchType.Changeup] }, weight: 0.16 },
    { item: { name: "Sinker-Slider", pitchTypes: [PitchType.Sinker, PitchType.Slider] }, weight: 0.09 },
    { item: { name: "4SFB-Curveball", pitchTypes: [PitchType.FourSeamFastball, PitchType.Curveball] }, weight: 0.07 },
    { item: { name: "4SFB-Cutter", pitchTypes: [PitchType.FourSeamFastball, PitchType.Cutter] }, weight: 0.05 },
    { item: { name: "2SFB-Changeup", pitchTypes: [PitchType.TwoSeamFastball, PitchType.Changeup] }, weight: 0.05 },
    { item: { name: "Cutter-Slider", pitchTypes: [PitchType.Cutter, PitchType.Slider] }, weight: 0.035 },
    { item: { name: "Sinker-Changeup", pitchTypes: [PitchType.Sinker, PitchType.Changeup] }, weight: 0.03 },
    { item: { name: "4SFB-Splitter", pitchTypes: [PitchType.FourSeamFastball, PitchType.Splitter] }, weight: 0.025 },
    { item: { name: "4SFB-Cutter (Short‐Arm)", pitchTypes: [PitchType.FourSeamFastball, PitchType.Cutter] }, weight: 0.025 },
  
    // 3-pitch
    { item: { name: "4SFB-Slider-Change", pitchTypes: [PitchType.FourSeamFastball, PitchType.Slider, PitchType.Changeup] }, weight: 0.04 },
    { item: { name: "Sinker-Cutter-Change", pitchTypes: [PitchType.Sinker, PitchType.Cutter, PitchType.Changeup] }, weight: 0.03 },
    { item: { name: "4SFB-Curve-Change", pitchTypes: [PitchType.FourSeamFastball, PitchType.Curveball, PitchType.Changeup] }, weight: 0.025 },
    { item: { name: "4SFB-Curve-Slider", pitchTypes: [PitchType.FourSeamFastball, PitchType.Curveball, PitchType.Slider] }, weight: 0.02 },
    { item: { name: "2SFB-Slider-Change", pitchTypes: [PitchType.TwoSeamFastball, PitchType.Slider, PitchType.Changeup] }, weight: 0.02 },
    { item: { name: "4SFB-Cutter-Splitter", pitchTypes: [PitchType.FourSeamFastball, PitchType.Cutter, PitchType.Splitter] }, weight: 0.015 },
  
    // 4-pitch
    { item: { name: "Classic Four-Mix", pitchTypes: [PitchType.FourSeamFastball, PitchType.Curveball, PitchType.Changeup, PitchType.Slider] }, weight: 0.012 },
    { item: { name: "Power Four-Mix", pitchTypes: [PitchType.FourSeamFastball, PitchType.Slider, PitchType.Splitter, PitchType.Curveball] }, weight: 0.008 },
    { item: { name: "Kitchen Sink", pitchTypes: [PitchType.FourSeamFastball, PitchType.Cutter, PitchType.Curveball, PitchType.Changeup] }, weight: 0.006 },
  
    // niche / novelty
    { item: { name: "4SFB-Forkball", pitchTypes: [PitchType.FourSeamFastball, PitchType.Forkball] }, weight: 0.006 },
    { item: { name: "Cutter-Sinker", pitchTypes: [PitchType.Cutter, PitchType.Sinker] }, weight: 0.006 },
    { item: { name: "Curve-Knuckle", pitchTypes: [PitchType.Curveball, PitchType.Knuckleball] }, weight: 0.004 },
    { item: { name: "Splitter-Slider", pitchTypes: [PitchType.Splitter, PitchType.Slider] }, weight: 0.004 },
    { item: { name: "Ultra-Command (2S-CH)", pitchTypes: [PitchType.TwoSeamFastball, PitchType.Changeup] }, weight: 0.004 },
    { item: { name: "High-Spin FB-Curve", pitchTypes: [PitchType.FourSeamFastball, PitchType.Curveball] }, weight: 0.004 },
    { item: { name: "Low-Velo Command", pitchTypes: [PitchType.FourSeamFastball, PitchType.Changeup] }, weight: 0.004 },
    { item: { name: "Slider-Cutter Sweeper", pitchTypes: [PitchType.Slider, PitchType.Cutter] }, weight: 0.003 },
    { item: { name: "Sinker-Knuckle Oddball", pitchTypes: [PitchType.Sinker, PitchType.Knuckleball] }, weight: 0.003 },
    { item: { name: "Cutter-Splitter", pitchTypes: [PitchType.Cutter, PitchType.Splitter] }, weight: 0.003 },
    { item: { name: "Slider-Curve SharpBreak", pitchTypes: [PitchType.Slider, PitchType.Curveball] }, weight: 0.003 },
    { item: { name: "4SFB-Sinker VeloSink", pitchTypes: [PitchType.FourSeamFastball, PitchType.Sinker] }, weight: 0.003 },
    { item: { name: "Splitter-Curve Depth", pitchTypes: [PitchType.Splitter, PitchType.Curveball] }, weight: 0.003 },
  
    // ultra-rare knuckle
    { item: { name: "Knuckleball Duo", pitchTypes: [PitchType.FourSeamFastball, PitchType.Knuckleball] }, weight: 0.002 },
    { item: { name: "Knuckleball Solo", pitchTypes: [PitchType.Knuckleball] }, weight: 0.0005 },
  ];
  