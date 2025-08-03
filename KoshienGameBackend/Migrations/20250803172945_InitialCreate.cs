using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoshienGameBackend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FieldingRangeProfile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    _C = table.Column<int>(type: "INTEGER", nullable: false),
                    _1B = table.Column<int>(type: "INTEGER", nullable: false),
                    _2B = table.Column<int>(type: "INTEGER", nullable: false),
                    _3B = table.Column<int>(type: "INTEGER", nullable: false),
                    _SS = table.Column<int>(type: "INTEGER", nullable: false),
                    _LF = table.Column<int>(type: "INTEGER", nullable: false),
                    _CF = table.Column<int>(type: "INTEGER", nullable: false),
                    _RF = table.Column<int>(type: "INTEGER", nullable: false),
                    _P = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FieldingRangeProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PersonalityProfile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BaseballIQ = table.Column<int>(type: "INTEGER", nullable: false),
                    WorkEthic = table.Column<int>(type: "INTEGER", nullable: false),
                    Composure = table.Column<int>(type: "INTEGER", nullable: false),
                    Charisma = table.Column<int>(type: "INTEGER", nullable: false),
                    Coachability = table.Column<int>(type: "INTEGER", nullable: false),
                    Fortitude = table.Column<int>(type: "INTEGER", nullable: false),
                    Flair = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalityProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Schools",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Prefecture = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schools", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    Year = table.Column<int>(type: "INTEGER", nullable: false),
                    HeightCm = table.Column<int>(type: "INTEGER", nullable: false),
                    PrimaryPosition = table.Column<string>(type: "TEXT", nullable: false),
                    BattingSide = table.Column<string>(type: "TEXT", nullable: false),
                    ThrowingHand = table.Column<string>(type: "TEXT", nullable: false),
                    HittingOverall = table.Column<int>(type: "INTEGER", nullable: false),
                    FieldingOverall = table.Column<int>(type: "INTEGER", nullable: false),
                    PitchingOverall = table.Column<int>(type: "INTEGER", nullable: false),
                    PersonalityProfileId = table.Column<int>(type: "INTEGER", nullable: false),
                    RawStrength = table.Column<int>(type: "INTEGER", nullable: false),
                    CoreStrength = table.Column<int>(type: "INTEGER", nullable: false),
                    Speed = table.Column<int>(type: "INTEGER", nullable: false),
                    FieldingRangeProfileId = table.Column<int>(type: "INTEGER", nullable: false),
                    FieldingTechnique = table.Column<int>(type: "INTEGER", nullable: false),
                    ArmStrength = table.Column<int>(type: "INTEGER", nullable: false),
                    ArmAccuracy = table.Column<int>(type: "INTEGER", nullable: false),
                    GameCalling = table.Column<int>(type: "INTEGER", nullable: false),
                    Contact = table.Column<int>(type: "INTEGER", nullable: false),
                    GamePower = table.Column<int>(type: "INTEGER", nullable: false),
                    BattingEye = table.Column<int>(type: "INTEGER", nullable: false),
                    PotentialHitting = table.Column<int>(type: "INTEGER", nullable: false),
                    PotentialCoordination = table.Column<int>(type: "INTEGER", nullable: false),
                    PotentialStrength = table.Column<int>(type: "INTEGER", nullable: false),
                    PotentialSpeed = table.Column<int>(type: "INTEGER", nullable: false),
                    HasPitchingHistory = table.Column<bool>(type: "INTEGER", nullable: false),
                    PitchingVelocity = table.Column<int>(type: "INTEGER", nullable: false),
                    PitchingControl = table.Column<int>(type: "INTEGER", nullable: false),
                    PitchingMovement = table.Column<int>(type: "INTEGER", nullable: false),
                    PitchingStamina = table.Column<int>(type: "INTEGER", nullable: false),
                    Confidence = table.Column<int>(type: "INTEGER", nullable: false),
                    Energy = table.Column<int>(type: "INTEGER", nullable: false),
                    BondsJson = table.Column<string>(type: "TEXT", nullable: false),
                    AbilitySigma = table.Column<double>(type: "REAL", nullable: true),
                    PotentialSigma = table.Column<double>(type: "REAL", nullable: true),
                    PersonalitySigma = table.Column<double>(type: "REAL", nullable: true),
                    HittingArchetype = table.Column<string>(type: "TEXT", nullable: true),
                    HittingPotentialArchetype = table.Column<string>(type: "TEXT", nullable: true),
                    PitchingArchetype = table.Column<string>(type: "TEXT", nullable: true),
                    SchoolId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Players_FieldingRangeProfile_FieldingRangeProfileId",
                        column: x => x.FieldingRangeProfileId,
                        principalTable: "FieldingRangeProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Players_PersonalityProfile_PersonalityProfileId",
                        column: x => x.PersonalityProfileId,
                        principalTable: "PersonalityProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Players_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Arsenal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PlayerId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arsenal", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Arsenal_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pitch",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    Velocity = table.Column<int>(type: "INTEGER", nullable: false),
                    Movement = table.Column<int>(type: "INTEGER", nullable: false),
                    Control = table.Column<int>(type: "INTEGER", nullable: false),
                    ArsenalId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pitch", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pitch_Arsenal_ArsenalId",
                        column: x => x.ArsenalId,
                        principalTable: "Arsenal",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Arsenal_PlayerId",
                table: "Arsenal",
                column: "PlayerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pitch_ArsenalId",
                table: "Pitch",
                column: "ArsenalId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_FieldingRangeProfileId",
                table: "Players",
                column: "FieldingRangeProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_PersonalityProfileId",
                table: "Players",
                column: "PersonalityProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_SchoolId",
                table: "Players",
                column: "SchoolId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pitch");

            migrationBuilder.DropTable(
                name: "Arsenal");

            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.DropTable(
                name: "FieldingRangeProfile");

            migrationBuilder.DropTable(
                name: "PersonalityProfile");

            migrationBuilder.DropTable(
                name: "Schools");
        }
    }
}
