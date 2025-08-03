using System.ComponentModel.DataAnnotations;

namespace KoshienGameBackend.Models;

public class Arsenal
{
    public int Id { get; set; }

    // Foreign key to Player
    public Guid PlayerId { get; set; }
    public Player? Player { get; set; }

    // List of up to 6 pitches
    public List<Pitch> Pitches { get; set; } = new();
}
