export interface School {
  id: string;
  name: string;
  prefecture: string;                // e.g., "Tokyo"
  region: string;                    // e.g., "Kanto East" — can differ from prefecture

  coordinates: {
    latitude: number;
    longitude: number;
  };

  demographic: "Urban" | "Suburban" | "Rural";

  type: "Public" | "Private";
  generalPrestige: number;
  academicPrestige: number;
  baseballPrestige: number;

  finances: {
    baseballImportance: number;
    wealthRating: number;
    tuition: number;
  };


  facilities: {
    fieldsLevel: number;
    dormsLevel: number;
    weightRoomLevel: number;
    pitchingFacilities: number;
    healthFacilities: number;
  };


  recruiting: {
    scoutingReach: "Local" | "Regional" | "National"
    activeRecruitingBudget: number;
    scholarshipSlots: number;
  };

  culture: {
    mainFocus: "Discipline" | "Expression";
    disciplinePoints: number;
    expressionPoints: number;
    unlockedArchetypes: string[];
    freeTraditionPoints: number;
    cultureIdentity: string;
  };

  leagueInfo: {
    circuit: string;
    offseasonFriendlyCircuit: string | null;
  };

rivalries: string[];

}

export interface RosterEntry {
  playerId: string;
  jerseyNumber: number;
  yearInSchool: 1 | 2 | 3;
  position: string;
  isCaptain: boolean;
  role: "Starter" | "Rotation" | "Bench";
}


export interface SchoolRoster {
  id: string;
  schoolId: string;
  year: number;

  teamLevel: "A" | "B" | "Reserve"; // Separate objects if needed
  players: RosterEntry[];
}

export interface YearlyRosterSet {
  schoolId: string;
  year: number;
  teams: {
    team: "A" | "B" | "Reserve";
    players: RosterEntry[];
  }[];
}












export interface SchoolHistory {
  schoolId: string;

  totalRecord: {
    wins: number;
    losses: number;
    ties: number;
    totalKoshienAppearances: number;
    totalKoshienWins: number;
    totalRegionalTitles: number;
    establishedYear: number;
  };

  recentSeasons: {
    year: number;
    summerResult: string;
    fallResult: string;
    springResult: string;
    koshienResult?: string;
  }[];
}

