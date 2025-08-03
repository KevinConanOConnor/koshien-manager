[ApiController]
[Route("api/player")]
public class PlayerController : ControllerBase
{
    private readonly PlayerGenerator _playerGenerator;

    public PlayerController(PlayerGenerator playerGenerator)
    {
        _playerGenerator = playerGenerator;
    }

    // GET /api/player/generate
    [HttpGet("generate")]
    public ActionResult<Player> GeneratePlayer()
    {
        var player = _playerGenerator.GeneratePlayer();
        return Ok(player); // Returns JSON
    }
