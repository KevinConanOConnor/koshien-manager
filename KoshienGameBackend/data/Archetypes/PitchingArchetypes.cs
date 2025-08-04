using KoshienGameBackend.Data.Enums;

public class PitchArchetype
{
    public string Name { get; init; } = "";
    
    // Each pitch type and how strongly it's developed (1.0 = normal, <1 = weak, >1 = strong)
    public Dictionary<PitchType, double> PitchPresence { get; init; } = new();

    // Per-pitch stat weightings
    public Dictionary<PitchType, (double VelocityWeight, double MovementWeight, double ControlWeight)> StatWeights { get; init; } = new();

    public double SelectionWeight { get; init; } = 1.0;  // How often this archetype is selected
}
