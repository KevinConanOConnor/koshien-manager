// Services/ArchetypeService.cs
using YourNamespace.GameData.Archetypes;

namespace KoshienGameBackend.Data.Archetypes;


//Reusable class Pairing Items with a Weight. (Example: Pairing Archetypes with a Weight and keeping an Array of archetypes/weight associations to select from)
public class Weighted<T>
{
    public T Item { get; set; }
    public double Weight { get; set; }

    public Weighted(T item, double weight)
    {
        Item = item;
        Weight = weight;
    }
}


public static class ArchetypeService
{
    private static Random _rand = new();

    public static T WeightedRandom<T>(List<Weighted<T>> items)
    {
        var totalWeight = items.Sum(i => i.Weight);
        var r = _rand.NextDouble() * totalWeight;
        double acc = 0;

        foreach (var item in items)
        {
            acc += item.Weight;
            if (r <= acc) return item.Item;
        }

        return items.Last().Item; // fallback
    }

    public static PotentialArchetype GetRandomPotentialArchetype()
        => WeightedRandom(PotentialArchetypes.All);

    public static HitterArchetype GetRandomHitterArchetype()
        => WeightedRandom(HitterArchetypes.All);

    public static ArsenalArchetype GetRandomArsenalArchetype()
        => WeightedRandom(ArsenalArchetypes.All);
}
