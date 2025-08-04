//Every archetype should define attributes and how the archetypes influences their weighting. As well as a weight that influences the frequency of the archetype's occurence
public interface IArchetype
{
    string Name { get; }
    Dictionary<string, double> StatWeights { get; }
    double SelectionWeight { get; }  // used when randomly choosing an archetype
}
