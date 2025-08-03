using KoshienGameBackend.Data.Archetypes;

namespace KoshienGameBackend.Data;

public static class ArchetypeCatalog
{
    public static readonly List<Weighted<HitterArchetype>> HitterArchetypes = new()
    {
        new(new HitterArchetype("Balanced", new()
        {
            { "contact", 1.0 },
            { "gamePower", 1.0 },
            { "battingEye", 1.0 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.0 },
            { "armStrength", 1.0 },
            { "armAccuracy", 1.0 },
            { "rawStrength", 1.0 },
            { "coreStrength", 1.0 },
        }), 70.0),

        new(new HitterArchetype("Slap Hitter", new()
        {
            { "contact", 1.25 },
            { "gamePower", 0.75 },
            { "battingEye", 1.15 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.1 },
            { "armStrength", 0.85 },
            { "armAccuracy", 0.85 },
            { "rawStrength", 0.9 },
            { "coreStrength", 1.05 },
        }), 3.33),

        new(new HitterArchetype("Power Hitter", new()
        {
            { "contact", 0.85 },
            { "gamePower", 1.4 },
            { "battingEye", 0.85 },
            { "speed", 1.1 },
            { "fieldingTechnique", 0.85 },
            { "armStrength", 1.05 },
            { "armAccuracy", 0.95 },
            { "rawStrength", 1.25 },
            { "coreStrength", 0.7 },
        }), 3.33),

        new(new HitterArchetype("Speed Demon", new()
        {
            { "contact", 0.95 },
            { "gamePower", 0.7 },
            { "battingEye", 0.9 },
            { "speed", 1.3 },
            { "fieldingTechnique", 1.05 },
            { "armStrength", 0.85 },
            { "armAccuracy", 0.85 },
            { "rawStrength", 0.9 },
            { "coreStrength", 1.4 },
        }), 3.33),

        new(new HitterArchetype("Patient Hitter", new()
        {
            { "contact", 1.0 },
            { "gamePower", 0.85 },
            { "battingEye", 1.35 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.0 },
            { "armStrength", 0.9 },
            { "armAccuracy", 0.9 },
            { "rawStrength", 0.9 },
            { "coreStrength", 0.9 },
        }), 3.33),

        new(new HitterArchetype("Athletic Defender", new()
        {
            { "contact", 0.95 },
            { "gamePower", 0.8 },
            { "battingEye", 1.0 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.3 },
            { "armStrength", 1.2 },
            { "armAccuracy", 1.1 },
            { "rawStrength", 0.85 },
            { "coreStrength", 0.7 },
        }), 3.33),

        new(new HitterArchetype("Gamer", new()
        {
            { "contact", 1.05 },
            { "gamePower", 1.0 },
            { "battingEye", 1.1 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.05 },
            { "armStrength", 0.95 },
            { "armAccuracy", 0.95 },
            { "rawStrength", 0.95 },
            { "coreStrength", 0.85 },
        }), 3.33),

        new(new HitterArchetype("Heavy Core", new()
        {
            { "contact", 0.85 },
            { "gamePower", 1.25 },
            { "battingEye", 0.85 },
            { "speed", 1.1 },
            { "fieldingTechnique", 0.9 },
            { "armStrength", 1.1 },
            { "armAccuracy", 1.0 },
            { "rawStrength", 1.15 },
            { "coreStrength", 1.2 },
        }), 3.33),

        new(new HitterArchetype("Smart & Crafty", new()
        {
            { "contact", 1.1 },
            { "gamePower", 0.85 },
            { "battingEye", 1.3 },
            { "speed", 1.1 },
            { "fieldingTechnique", 1.05 },
            { "armStrength", 0.85 },
            { "armAccuracy", 0.85 },
            { "rawStrength", 0.9 },
            { "coreStrength", 1.0 },
        }), 3.33),

        new(new HitterArchetype("Raw Athlete", new()
        {
            { "contact", 0.9 },
            { "gamePower", 1.1 },
            { "battingEye", 0.85 },
            { "speed", 1.2 },
            { "fieldingTechnique", 0.9 },
            { "armStrength", 1.1 },
            { "armAccuracy", 1.05 },
            { "rawStrength", 1.2 },
            { "coreStrength", 0.7 },
        }), 3.33),
    };
}
