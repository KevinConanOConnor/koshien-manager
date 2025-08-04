public class HittingArchetype : IArchetype
{
    public string Name { get; init; } = "";
    public Dictionary<string, double> StatWeights { get; init; } = new();
    public double SelectionWeight { get; init; } = 1.0;

    public FieldingPosition[] AvailablePositions { get; init; } = Array.Empty<FieldingPosition>();
}

//Hitting Archetypes Validator to make sure all hitting archetypes have neccessary stat keys for debugging
public static class HittingStatKeys
{
    public static readonly string[] RequiredKeys = new[]
    {
        "Contact",
        "GamePower",
        "BattingEye",
        "HittingOverall",
        "RawStrength",
        "CoreStrength",
        "Speed",
        "FieldingTechnique",
        "ArmStrength",
        "PotentialHitting",
        "PotentialCoordination",
        "PotentialStrength",
        "PotentialSpeed",
        "Stamina"
    };
}

public static class HittingArchetypeValidator
{
    public static void Validate(HittingArchetype archetype)
    {
        foreach (var key in HittingStatKeys.RequiredKeys)
        {
            if (!archetype.StatWeights.ContainsKey(key))
                throw new ArgumentException($"Missing required stat weight: {key} in archetype {archetype.Name}");
        }
    }
}



public static class HittingArchetypes
{
    public static readonly HittingArchetype Balanced = new()
    {
        Name = "Balanced",
        SelectionWeight = 1.0,
        StatWeights = new Dictionary<string, double>
        {
            { "Contact", 1.0 },
            { "GamePower", 1.0 },
            { "BattingEye", 1.0 },
            { "HittingOverall", 1.0 },
            { "RawStrength", 1.0 },
            { "CoreStrength", 1.0 },
            { "Speed", 1.0 },
            { "FieldingTechnique", 1.0 },
            { "ArmStrength", 1.0 },
            { "PotentialHitting", 1.0 },
            { "PotentialCoordination", 1.0 },
            { "PotentialStrength", 1.0 },
            { "PotentialSpeed", 1.0 },
            { "Stamina", 1.0},
        },
        AvailablePositions = new[]
        {
            FieldingPosition._C,
            FieldingPosition._SS,
            FieldingPosition._3B,
            FieldingPosition._2B,
            FieldingPosition._1B,
            FieldingPosition._CF,
            FieldingPosition._LF,
            FieldingPosition._RF,
        }
    };

    public static readonly List<HittingArchetype> All = new()
    {
        Balanced
        // Add more later
    };
}
























