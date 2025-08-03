using System;

namespace KoshienGameBackend.Services;

public class MathGenerator
{
    private readonly Random _rng = new();

    // 🎲 Normal distribution generator using Box-Muller
    public double Normal(double mean = 0, double stdDev = 1)
    {
        var u1 = 1.0 - _rng.NextDouble();
        var u2 = 1.0 - _rng.NextDouble();
        var z = Math.Sqrt(-2.0 * Math.Log(u1)) * Math.Cos(2.0 * Math.PI * u2);
        return z * stdDev + mean;
    }

    // 🎯 Map ability sigma to internal 1000-scale freshman value
    public int SigmaToFreshmanInternal(double sigma)
    {
        const double baseValue = 392;     // 0σ → ~55 visible
        const double perSigma = 59;       // 3σ → ~80 visible
        return (int)Math.Round(baseValue + sigma * perSigma);
    }

    // 🎯 Generate a clamped stat from normal distribution
    public int GenerateStat(double mean, double stdDev = 30, int min = 0, int max = 1000)
    {
        var value = Normal(mean, stdDev);
        return Math.Clamp((int)Math.Round(value), min, max);
    }

    public double GenerateSigma()
    {
        return Normal(0, 1);
    }

    // Pick random from array
    public T RandomFromArray<T>(T[] array)
    {
        return array[_rng.Next(array.Length)];
    }

    // Weighted random selection
    public T WeightedRandom<T>(List<(T item, double weight)> items)
    {
        var totalWeight = items.Sum(i => i.weight);
        var r = _rng.NextDouble() * totalWeight;
        double acc = 0;

        foreach (var (item, weight) in items)
        {
            acc += weight;
            if (r <= acc)
                return item;
        }

        return items.Last().item;
    }
}
