namespace KoshienGameBackend.Models;

public class School
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Prefecture { get; set; } = "";

    public List<Player> Players { get; set; } = new();
}
