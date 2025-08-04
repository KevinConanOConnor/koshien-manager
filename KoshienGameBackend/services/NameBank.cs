using System.Text.Json;

public class NameBank
{
    public List<string> FirstNames { get; private set; } = new();
    public List<string> LastNames { get; private set; } = new();

    private readonly Random _rng = new();

    public NameBank(string firstNamePath, string lastNamePath)
    {
        FirstNames = JsonSerializer.Deserialize<List<string>>(File.ReadAllText(firstNamePath))!;
        LastNames = JsonSerializer.Deserialize<List<string>>(File.ReadAllText(lastNamePath))!;
    }

    public string RandomFirstName()
    {
        if (FirstNames.Count == 0) return "Unknown";
        return FirstNames[_rng.Next(FirstNames.Count)];
    }

    public string RandomLastName()
    {
        if (LastNames.Count == 0) return "Unknown";
        return LastNames[_rng.Next(LastNames.Count)];
    }
}
