using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace KoshienGameBackend.Services;

public static class NameBank
{
    public List<string> FirstNames;
    public List<string> LastNames;
    private readonly Random _rng = new();


    // Static file paths (relative to project root, e.g., KoshienGameBackend/Data/)
    private static readonly string FirstNamePath = Path.Combine(AppContext.BaseDirectory, "Data", "firstNames.json");
    private static readonly string LastNamePath = Path.Combine(AppContext.BaseDirectory, "Data", "lastNames.json");


    // Default names if JSON fails (curated for realism)
    private static readonly string[] DefaultFirstNames = {
        "Haruto", "Ren", "Yuto", "Sota", "Kaito", "Asahi", "Hinata", "Riku", "Yuma", "Takumi"
    };
    private static readonly string[] DefaultLastNames = {
        "Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Saito"
    };


    public NameBank(string firstNamePath, string lastNamePath)
    {
        FirstNames = JsonSerializer.Deserialize<List<string>>(File.ReadAllText(firstNamePath))!;
        LastNames = JsonSerializer.Deserialize<List<string>>(File.ReadAllText(lastNamePath))!;
    }

    // Static constructor to initialize name lists
    static NameBank()
    {
        _rng = new Random(); // Thread-safe alternative below if needed
        FirstNames = LoadNames(FirstNamePath, DefaultFirstNames);
        LastNames = LoadNames(LastNamePath, DefaultLastNames);
    }


    private static List<string> LoadNames(string path, string[] fallback)
    {
        try
        {
            if (!File.Exists(path))
            {
                Console.WriteLine($"Warning: Name file {path} not found. Using fallback names.");
                return new List<string>(fallback);
            }

            string json = File.ReadAllText(path);
            var names = JsonSerializer.Deserialize<List<string>>(json);
            if (names == null || names.Count == 0)
            {
                Console.WriteLine($"Warning: Name file {path} is empty or invalid. Using fallback names.");
                return new List<string>(fallback);
            }
            return names;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading names from {path}: {ex.Message}. Using fallback names.");
            return new List<string>(fallback);
        }
    }


    public static string RandomFirstName()
    {
        lock (_rng) // Thread safety for multi-threaded API
        {
            return FirstNames[_rng.Next(FirstNames.Count)];
        }
    }

    public static string RandomLastName()
    {
        lock (_rng) // Thread safety
        {
            return LastNames[_rng.Next(LastNames.Count)];
        }
    }

}
