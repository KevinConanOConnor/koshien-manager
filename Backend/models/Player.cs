using System.ComponentModel.DataAnnotations.Schema;

namespace KoshienGameBackend.Models;

public class Player
{
    // 🆔 Identity
    public Guid Id { get; set; } = Guid.NewGuid();
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public int Year { get; set; }  // 1-3

    public int HeightCm { get; set; }
    public FieldingPosition PrimaryPosition { get; set; } // Will replace with enum if defined
    public string BattingSide { get; set; } = "R";     // "L", "R", "S"
    public string ThrowingHand { get; set; } = "R";

    // 📊 Overall. These Stats are Aggregations generated for display purposes
    public int HittingOverall { get; set; }
    public int FieldingOverall { get; set; }
    public int PitchingOverall { get; set; }

    // 🧠 Personality (One-to-One relationship)
    public int PersonalityProfileId { get; set; }
    public PersonalityProfile Personality { get; set; } = new();

    // 🏋️ Physical
    public int RawStrength { get; set; }
    public int CoreStrength { get; set; }
    public int Speed { get; set; }

    // ⚾ Fielding
    public int FieldingProfileID { get; set; }           // FK (foreign key)
    public FieldingProfile FieldingExperience { get; set; } = new(); // Navigation property

    public int FieldingTechnique { get; set; }
    public int ArmStrength { get; set; }
    public int ArmAccuracy { get; set; }
    public int GameCalling { get; set; }

    // 🥎 Hitting
    public int Contact { get; set; }
    public int GamePower { get; set; }
    public int BattingEye { get; set; }

    // 🎯 Potentials, can be thought of of as a talent rating
    public int PotentialHitting { get; set; }
    public int PotentialCoordination { get; set; }
    public int PotentialStrength { get; set; }
    public int PotentialSpeed { get; set; }

    // 🧪 Pitching
    public Arsenal? Arsenal { get; set; }  // 1-to-1 navigation

    public bool HasPitchingHistory { get; set; }
    public int PitchingVelocity { get; set; }
    public int PitchingControl { get; set; }
    public int PitchingMovement { get; set; }
    public int Stamina { get; set; }

    // 📈 Status
    public int Confidence { get; set; }
    public int ArmEnergy { get; set; } //Can be thought of as pitching energy
    public int OverallEnergy { get; set; }

    // 🏅 Narrative
    public string BondsJson { get; set; } = "[]";

    // Meta
    public double? AbilitySigma { get; set; }
    public double? PotentialSigma { get; set; }
    public double? PersonalitySigma { get; set; }

    public string? HittingArchetype { get; set; }
    public string? HittingPotentialArchetype { get; set; }
    public string? PitchingArchetype { get; set; }
}
