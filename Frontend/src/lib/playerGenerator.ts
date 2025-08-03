import { generateSigma, generateStat, randomFromArray, sigmaToFreshmanInternal, weightedRandom } from "./mathGenerators";
import firstNames from "./first_names.json";
import lastNames from "./last_names.json";
import { balancedHitterArchetype, hitterArchetypes, ArsenalArchetype, weightedPitchingArchetypes} from "./archetypes";
import { getNextPlayerId } from "./playerIDCounter";
import { FieldingPosition } from "@/models/positions";
import { PersonalityProfile, Player } from "@/models/player";
import { Pitch, PitchType } from "@/models/pitching";
import { addPlayer, getAllPlayers } from "@/data/TestPlayers";
import { recalculateOveralls } from "./playerRatings";


function generateSigmas(): {
  abilitySigma: number;
  potentialSigma: number;
  personalitySigma: number;
} {
  const abilitySigma = generateSigma();

  const rhoPotential = 0.25;
  const rhoPersonality = 0.25;

  const potentialSigma = abilitySigma * rhoPotential + generateSigma();
  const personalitySigma = abilitySigma * rhoPersonality + generateSigma();

  return {
    abilitySigma,
    potentialSigma,
    personalitySigma,
  };
}

export function generateFirstYearFromScratch(){
  console.log("Generating New First Year.")
  const firstName = randomFromArray(firstNames);
  const lastName = randomFromArray(lastNames);
  const heightCm = generateStat(167, 6);

  const heightOffset = (heightCm - 167) * 0.05;  // height raises potential mostly


  const { abilitySigma, potentialSigma, personalitySigma } = generateSigmas();
  const heightAdjustedPotentialSigma = potentialSigma + heightOffset;

  let newPlayer = generateFirstYear(firstName, lastName, heightCm, abilitySigma, heightAdjustedPotentialSigma, personalitySigma);
  newPlayer = recalculateOveralls(newPlayer)
  
  console.log("Generated new player: ", newPlayer)
  addPlayer(newPlayer)
}

function randomBattingSide(): "L" | "R" | "S" {
  return Math.random() < 0.1
    ? "S"
    : Math.random() < 0.3
    ? "L"
    : "R";
}

function randomThrowingHand(): "L" | "R" {
  return Math.random() < 0.2 ? "L" : "R";
}


export function generatePersonality(sigma: number): PersonalityProfile {
  const baseline = sigmaToFreshmanInternal(sigma);

  return {
    BaseballIQ: generateStat(baseline),
    WorkEthic: generateStat(baseline),
    Composure: generateStat(baseline),
    Charisma: generateStat(baseline),
    Coachability: generateStat(baseline),
    Fortitude: generateStat(baseline),
    Flair: generateStat(baseline),
  };
}


function generateHittingAbility(sigma: number){
  const baseline = sigmaToFreshmanInternal(sigma);
  const archetype = Math.random() < 0.3 ? randomFromArray(hitterArchetypes) : balancedHitterArchetype;

  const w = archetype.abilityWeights;

  const contact = generateStat(baseline * w.contact);
  const gamePower = generateStat(baseline * w.gamePower);
  const battingEye = generateStat(baseline * w.battingEye);

  const fieldingOverall = generateStat(baseline * w.fieldingOverall);
  const speed = generateStat(baseline * w.speed);
  const armStrength = generateStat(baseline * w.armStrength);
  const armAccuracy = generateStat(baseline * w.armAccuracy);
  const fieldingTechnique = generateStat(baseline * w.fieldingTechnique);

  const rawStrength = generateStat(baseline * w.rawStrength);
  const coreStrength = generateStat(baseline * w.coreStrength);

  const hittingOverall = Math.round((contact + gamePower + battingEye) / 3);


  const position = randomFromArray(archetype.positions)
  
  return {
    archetype: archetype.name,
    contact,
    gamePower,
    battingEye,
    hittingOverall,

    fieldingOverall,
    speed,
    armStrength,
    armAccuracy,
    fieldingTechnique,

    rawStrength,
    coreStrength,
    position,
  };
}


function velocityHeightBonus(heightCm: number): number {
  return (heightCm - 167) * 0.05;  // height raises velocity potential mostly. In this scenario player 10 cm taller than average would likely be half a std.dev above mean in velocity. 30 cm taller (so 6'5 as a 14 year old) would already probably be 1.5x a harder thrower
}



//Potential sigma can really be though of as a talentSigma
export function generatePotentialRatings(potentialSigma: number, heightCm: number) {
  const baseline = sigmaToFreshmanInternal(potentialSigma);
  const heightBonus = velocityHeightBonus(heightCm)
  const velocityBaseline = sigmaToFreshmanInternal(potentialSigma + heightBonus);

  return {
    potentialHitting: generateStat(baseline),
    potentialCoordination: generateStat(baseline),
    potentialStrength: generateStat(baseline),
    potentialSpeed: generateStat(baseline),
    pitchingVelocity: generateStat(velocityBaseline),
    pitchingMovement: generateStat(baseline),
    pitchingControl: generateStat(baseline),
  };
}


//Function to determine whether a player should be generated as a pitcher too.
function shouldBePitcher(abilitySigma: number): boolean {
  // Logistic-like scale: higher sigma = higher odds
  const baseChance = 0.15; // minimum chance even for low sigma
  const bonus = Math.max(0, abilitySigma) * 0.1;
  return Math.random() < baseChance + bonus;
}


export function generatePitchArsenal(
  abilitySigma: number,
  heightCm: number,
  archetype: ArsenalArchetype
): Pitch[] {
  const base = sigmaToFreshmanInternal(abilitySigma);
  //Height gives players velocity bonuses
  const velocityBase = base + velocityHeightBonus(heightCm);

  //Pitchers with deeper arsenal's have less focus on each pitch. As a result they will get penalties to movement and placement of their pitchesoverall
  let qualityScale;
  if (archetype.pitchTypes.length == 1)
    qualityScale = 1.1;
  else if (archetype.pitchTypes.length == 2)
    qualityScale = 1;
  else if (archetype.pitchTypes.length == 3)
    qualityScale = 0.9;
  else
    qualityScale = 0.8;

  return archetype.pitchTypes.map((type, index) => {

    // Movement and control are based on regular ability baseline
    const movement = generateStat(base * qualityScale);
    const control = generateStat(base * qualityScale);
    const velocity = generateStat(velocityBase);
    return {
      type,
      velocity,
      movement,
      control,
    };
  });
}


export function generateFirstYear(firstName: string, lastName: string, heightCm : number, abilitySigma: number, potentialSigma: number, personalitySigma: number): Player {
  const id = getNextPlayerId();
  const year = 1;
  const battingSide = randomBattingSide();
  const throwingHand = randomThrowingHand();

  const personality = generatePersonality(personalitySigma);
  const hittingAbility = generateHittingAbility(abilitySigma);
  const potential = generatePotentialRatings(potentialSigma, heightCm);
  

  const position = hittingAbility.position;
  const fieldingAbility = (hittingAbility.fieldingOverall + hittingAbility.fieldingTechnique) / 2.25
  
  const positionalRange: Partial<Record<FieldingPosition, number>> = {
    [position]: Math.round(fieldingAbility),
  };



  //This block of code is for handling whether to make a pitcher and their relevant stat generations
  const dummyArchetype = {
    name: "Basic Thrower",
    pitchTypes: [PitchType.FourSeamFastball],
  };

  let primaryPosition = position
  let hasPitchingHistory = false
  let arsenalArchetype: ArsenalArchetype = dummyArchetype;
  let pitches: Pitch[];
  if (shouldBePitcher(abilitySigma) && position != FieldingPosition.Catcher)
  {
    hasPitchingHistory = true;
    arsenalArchetype = weightedRandom(weightedPitchingArchetypes)
    pitches = generatePitchArsenal(abilitySigma, heightCm, arsenalArchetype)
    primaryPosition = FieldingPosition.Pitcher
  }
  else
  {
    // Not a pitcher — give a basic 4SFB with lowered skill
    const reducedAbility = abilitySigma - 0.75;
    pitches = generatePitchArsenal(reducedAbility, heightCm, dummyArchetype);
  }



  //Generate Game Calling attribute only for catchers
  let gameCalling = 0;
  if (position === FieldingPosition.Catcher)
  {
    const iq = personality.BaseballIQ;
    const composure = personality.Composure;
    const base = (iq + composure) / 2;
    gameCalling = generateStat(base, 25);
  }

  return {
    id,
    firstName,
    lastName,
    year,
    heightCm,
    primaryPosition,

    battingSide,
    throwingHand,

    hittingOverall: 0,
    fieldingOverall: 0,
    pitchingOverall: 0,

    personality,

    rawStrength: hittingAbility.rawStrength,
    coreStrength: hittingAbility.coreStrength,
    speed: hittingAbility.speed,

    positionalRange,
    fieldingTechnique: hittingAbility.fieldingTechnique,
    armStrength: hittingAbility.armStrength,
    armAccuracy: hittingAbility.armAccuracy,
    gameCalling,

    contact: hittingAbility.contact,
    gamePower: hittingAbility.gamePower,
    battingEye: hittingAbility.battingEye,

    potentialHitting: potential.potentialHitting,
    potentialCoordination: potential.potentialCoordination,
    potentialStrength: potential.potentialStrength,
    potentialSpeed: potential.potentialSpeed,

    hasPitchingHistory,
    pitchingVelocity: 0,
    pitchingControl: 0,
    pitchingMovement: 0,
    pitchingStamina: 0,
    pitches,

    confidence: 1000,
    energy: 1000,

    bonds: [],
    fullName: `${firstName} ${lastName}`,
    yearLabel: year === 1 ? "First Year" : year === 2 ? "Second Year" : "Third Year",

    abilitySigma,
    potentialSigma,
    personalitySigma,

    hittingArchetype: hittingAbility.archetype,
    hittingPotentialArchetype: undefined,
    pitchingArchetype: arsenalArchetype.name,
  };
}
