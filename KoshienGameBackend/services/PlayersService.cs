// Services/PlayerService.cs
using KoshienGameBackend.Data;
using KoshienGameBackend.Models;
using Microsoft.EntityFrameworkCore;

public class PlayerService
{
    private readonly GameDbContext _context;

    public PlayerService(GameDbContext context)
    {
        _context = context;
    }

    public async Task<List<Player>> GetPlayersAsync()
    {
        return await _context.Players.ToListAsync();
    }

    public async Task<Player> CreatePlayerAsync(Player player)
    {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();
        return player;
    }

    // Services/PlayerService.cs
public async Task<Player> CreateOhtaniAsync()
{
    // Step 1: Create Ohtani's personality profile
    var personality = new PersonalityProfile
    {
        BaseballIQ = 880,
        WorkEthic = 970,
        Composure = 900,
        Charisma = 750,
        Coachability = 940,
        Fortitude = 950,
        Flair = 850
    };

    _context.PersonalityProfiles.Add(personality);
    await _context.SaveChangesAsync(); // Save to generate ID

    // Step 2: Create fielding range profile (competent everywhere)
    var fieldingExperience = new FieldingProfile
    {
        _C = 300,
        _1B = 600,
        _2B = 650,
        _3B = 700,
        _SS = 700,
        _LF = 850,
        _CF = 900,
        _RF = 850,
        _P = 950
    };

    _context.FieldingProfiles.Add(fieldingExperience);
    await _context.SaveChangesAsync(); // Save to generate ID

    // Step 3: Create Ohtani player record
    var player = new Player
    {
        FirstName = "Shohei",
        LastName = "Ohtani",
        Year = 3, // High school 3rd year
        HeightCm = 193,
        PrimaryPosition = "P/OF",
        BattingSide = "L",
        ThrowingHand = "R",

        HittingOverall = 910,
        FieldingOverall = 840,
        PitchingOverall = 960,

        RawStrength = 880,
        CoreStrength = 860,
        Speed = 830,

        FieldingTechnique = 770,
        ArmStrength = 930,
        ArmAccuracy = 860,
        GameCalling = 650,

        Contact = 890,
        GamePower = 920,
        BattingEye = 880,

        PotentialHitting = 950,
        PotentialCoordination = 940,
        PotentialStrength = 930,
        PotentialSpeed = 920,

        HasPitchingHistory = true,
        PitchingVelocity = 970,
        PitchingControl = 910,
        PitchingMovement = 920,
        PitchingStamina = 890,

        Confidence = 900,
        Energy = 1000,
        BondsJson = "[]",

        AbilitySigma = 2.3,
        PotentialSigma = 2.6,
        PersonalitySigma = 2.0,

        HittingArchetype = "Elite Dual Threat",
        HittingPotentialArchetype = "Unicorn",
        PitchingArchetype = "Ace",

        PersonalityProfileId = personality.Id,
        Personality = personality,

        FieldingProfileID = fieldingExperience.Id,
        FieldingExperience = fieldingExperience,
    };

    _context.Players.Add(player);
    await _context.SaveChangesAsync();

    return player;
}

}
