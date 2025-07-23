"use client";

import { useParams } from "next/navigation";
import { players } from "@/data/TestPlayers";
import PlayerCard from "@/components/player/PlayerCard";
import OverviewTab from "@/components/player/OverviewTab";
import PitchingOverviewTab from "@/components/player/PitchingOverviewTab";
import { useState } from "react";
import { Player } from "@/models/player";

type TabOption = "overview" | "pitchingOverview" | "coach" | "stats";

export default function PlayerPage() {
  const { id } = useParams();
  const player: Player | undefined = players.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState<TabOption>("overview");

  if (!player) return <div className="p-4">Player not found</div>;

  const tabs: { key: TabOption; label: string }[] = [
    { key: "overview", label: "Batting" },
    { key: "pitchingOverview", label: "Pitching" },
    { key: "coach", label: "Coach Report" },
    { key: "stats", label: "Stats Log" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab player={player} />;
      case "pitchingOverview":
        return <PitchingOverviewTab player={player} />;
      case "coach":
        return <div className="text-gray-500 italic">Coach report coming soon…</div>;
      case "stats":
        return <div className="text-gray-500 italic">Stat log not yet implemented.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <PlayerCard player={player} />

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 px-2 font-medium border-b-2 ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
