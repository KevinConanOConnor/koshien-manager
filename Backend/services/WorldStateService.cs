using System.Collections.Concurrent;

namespace KoshienGameBackend.Services;

public class WorldStateService
{
    private int _nextPlayerId = 1;
    private int _nextSchoolId = 1;
    private int _nextMatchId = 1;

    // Optional: general-purpose ID mapping
    private readonly ConcurrentDictionary<string, int> _customCounters = new();

    // 🧍 Player ID
    public string GetNextPlayerId()
    {
        return (_nextPlayerId++).ToString();
    }

    public void ResetPlayerIdCounter()
    {
        _nextPlayerId = 1;
    }

    // 🏫 School ID
    public string GetNextSchoolId()
    {
        return (_nextSchoolId++).ToString();
    }

    public void ResetSchoolIdCounter()
    {
        _nextSchoolId = 1;
    }

    // 🎮 Match ID
    public string GetNextMatchId()
    {
        return (_nextMatchId++).ToString();
    }

    public void ResetMatchIdCounter()
    {
        _nextMatchId = 1;
    }

    // 🔧 General-purpose counter (e.g. for test objects, special types)
    public int GetNextCustomId(string category)
    {
        return _customCounters.AddOrUpdate(category, 1, (_, val) => val + 1);
    }

    public void ResetCustomId(string category)
    {
        _customCounters[category] = 1;
    }
}
