// Controllers/PlayersController.cs
using Microsoft.AspNetCore.Mvc;
using KoshienGameBackend.Models;
using KoshienGameBackend.Services;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    private readonly PlayerService _playerService;

    public PlayersController(PlayerService playerService)
    {
        _playerService = playerService;
    }

    [HttpGet]
    public async Task<IActionResult> GetPlayers()
    {
        var players = await _playerService.GetPlayersAsync();
        return Ok(players);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPlayer(Guid id)
    {
        var players = await _playerService.GetPlayersAsync();
        return Ok(players);
    }


    [HttpPost]
    public async Task<IActionResult> CreatePlayer([FromBody] Player player)
    {
        var created = await _playerService.CreatePlayerAsync(player);
        return CreatedAtAction(nameof(GetPlayers), new { id = created.Id }, created);
    }

    [HttpPost("sample")]
    public async Task<IActionResult> CreateOhtani()
    {
        var player = await _playerService.CreateOhtaniAsync();
        return CreatedAtAction(nameof(GetPlayer), new { id = player.Id }, player);
    }
}
