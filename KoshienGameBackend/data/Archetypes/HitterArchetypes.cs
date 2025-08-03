namespace KoshienGameBackend.Data.Archetypes;

namespace KoshienGameBackend.Data.Archetypes;

public class HitterArchetype
{
    public string Name { get; set; }
    public Dictionary<string, double> AttributeWeights { get; set; }

    public static readonly List<string> RequiredAttributes = new()
    {
        "contact",
        "gamePower",
        "battingEye",
        "speed",
        "fieldingTechnique",
        "armStrength",
        "armAccuracy",
        "rawStrength",
        "coreStrength"
    };

    public HitterArchetype(string name, Dictionary<string, double> attributeWeights)
    {
        Name = name;
        AttributeWeights = attributeWeights;

        ValidateWeights();
    }

    private void ValidateWeights()
    {
        var missing = RequiredAttributes
            .Where(attr => !AttributeWeights.ContainsKey(attr))
            .ToList();

        if (missing.Any())
        {
            throw new ArgumentException($"Archetype '{Name}' is missing required weights: {string.Join(", ", missing)}");
        }
    }
}

