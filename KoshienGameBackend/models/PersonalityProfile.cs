namespace KoshienGameBackend.Models;

public class PersonalityProfile
{
    public int Id { get; set; } // Needed for EF Core to persist as a table

    public int BaseballIQ { get; set; }
    public int WorkEthic { get; set; }
    public int Composure { get; set; }
    public int Charisma { get; set; }
    public int Coachability { get; set; }
    public int Fortitude { get; set; }
    public int Flair { get; set; }
}
