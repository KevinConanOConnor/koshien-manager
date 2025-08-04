using KoshienGameBackend.Data;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//Code I added
builder.Services.AddControllers();

builder.Services.AddScoped<PlayerService>();


//Set up a name bank service to generate player names out of.
var firstNamePath = Path.Combine(builder.Environment.ContentRootPath, "Data", "firstNames.json");
var lastNamePath = Path.Combine(builder.Environment.ContentRootPath, "Data", "lastNames.json");
builder.Services.AddSingleton(new NameBank(firstNamePath, lastNamePath));

//Set up Math Service for Number Generation (e.g. normal distribution)
builder.Services.AddSingleton<MathGenerator>();



builder.Services.AddDbContext<GameDbContext>(options =>
    options.UseSqlite("Data Source=game.db"));  // switch to Npgsql later for prod


//After this i didnt add


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapControllers();
app.Run();

