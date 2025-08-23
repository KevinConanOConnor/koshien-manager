namespace KoshienGameBackend.Models;
using KoshienGameBackend.Data.Enums;

public class Pitch
{
    public int Id { get; set; }

    public PitchType Type { get; set; }

    public int Velocity { get; set; }   // 0–1000
    public int Movement { get; set; }
    public int Control { get; set; }

    // Foreign key to Arsenal
    public int ArsenalId { get; set; }
    public Arsenal? Arsenal { get; set; }
}
