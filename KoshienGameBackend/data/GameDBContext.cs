using Microsoft.EntityFrameworkCore;
using KoshienGameBackend.Models;

namespace KoshienGameBackend.Data;

public class GameDbContext : DbContext
{
    public GameDbContext(DbContextOptions<GameDbContext> options)
        : base(options) { }

    public DbSet<Player> Players => Set<Player>();
    public DbSet<School> Schools => Set<School>();
}
