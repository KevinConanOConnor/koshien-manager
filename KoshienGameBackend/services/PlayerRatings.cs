using KoshienGameBackend.Models;

namespace KoshienGameBackend.Services;

public class PlayerRatingService
{
    public int FormatStat(int raw)
    {
        return Math.Min((int)Math.Round(raw / 7.1), 140);
    }

    public void RecalculateOveralls(Player player)
    {
        player.HittingOverall = CalculateHittingOverall(player);
        player.PitchingOverall = CalculatePitchingOverall(player);
        player.FieldingOverall = CalculateFieldingOverall(player);
    }

    public int CalculateHittingOverall(Player player)
    {
        double score =
            0.4 * player.Contact +
            0.25 * player.GamePower +
            0.25 * player.BattingEye +
            0.1 * player.Speed;

        return (int)Math.Round(score);
    }

    public int CalculatePitchingOverall(Player player)
    {
        if (!player.HasPitchingHistory || player.Arsenal == null || player.Arsenal.Pitches.Count == 0)
            return 0;

        const double staminaWeight = 0.15;
        const double pitchWeightTotal = 1 - staminaWeight;

        var scoredPitches = player.Arsenal.Pitches
            .Select(p => (p.Velocity + p.Movement + p.Control) / 3.0)
            .OrderByDescending(s => s)
            .ToList();

        double weightedPitchScore = scoredPitches
            .Select((score, i) => score * Math.Pow(0.65, i))
            .Sum();

        double totalWeight = scoredPitches
            .Select((_, i) => Math.Pow(0.7, i))
            .Sum();

        double normalizedPitchScore = weightedPitchScore / totalWeight;

        double finalScore = 
            pitchWeightTotal * normalizedPitchScore +
            staminaWeight * player.PitchingStamina;

        return (int)Math.Round(finalScore);
    }

    public int CalculateFieldingOverall(Player player)
    {
        var fieldingProfile = player.FieldingRangeProfile;
        if (fieldingProfile == null) return 0;

        // Get max rating from all positions
        var values = new[]
        {
            fieldingProfile.C,
            fieldingProfile._1B,
            fieldingProfile._2B,
            fieldingProfile._3B,
            fieldingProfile.SS,
            fieldingProfile.LF,
            fieldingProfile.CF,
            fieldingProfile.RF,
            fieldingProfile.P
        };

        var maxRange = values.Max();

        if (maxRange <= 0) return 0;

        double overall = 
            0.4 * maxRange +
            0.3 * player.FieldingTechnique +
            0.15 * player.ArmStrength +
            0.15 * player.ArmAccuracy;

        return (int)Math.Round(overall);
    }
}
