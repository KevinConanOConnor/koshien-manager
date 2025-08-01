import { generateSigma } from "./mathGenerators";

function generateSigmas(): {
  abilitySigma: number;
  potentialSigma: number;
  personalitySigma: number;
} {
  const abilitySigma = generateSigma();

  const rhoPotential = 0.35;
  const rhoPersonality = 0.25;

  const potentialSigma = abilitySigma * rhoPotential + generateSigma();
  const personalitySigma = abilitySigma * rhoPersonality + generateSigma();

  return {
    abilitySigma,
    potentialSigma,
    personalitySigma,
  };
}



export function playerGeneration(){

}