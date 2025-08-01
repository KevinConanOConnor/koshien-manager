// app/player-list/page.tsx (or anywhere)
"use client";

import { Table } from "@/components/Table";
import { Player } from "@/models/player";
import { players } from "@/data/TestPlayers";
import { ColumnDef } from "@tanstack/react-table";

import { CellContext } from "@tanstack/react-table";
import { getStatColor } from "@/components/player/StatDisplay";
import { JSX } from "react";
import Link from "next/link";

function coloredStatCell(info: CellContext<Player, number>): JSX.Element{
  const value = info.getValue();
  const colorClass = getStatColor(value);
  return <span className={`font-semibold ${colorClass}`}>{value}</span>;
}

const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    cell: ({ row }) => {
      const player = row.original;
      return (
        <Link
          href={`/player/${player.id}`}
          className="hover:underline"
        >
          {player.fullName}
        </Link>
      );
    },
  },
  {
    header: "Year",
    accessorKey: "year",
    enableSorting: true,
  },
  {
    header: "Height",
    accessorKey: "heightCm",
    enableSorting: true,
  },
  {
    header: "Weight",
    accessorKey: "weightKg",
    enableSorting: true,
  },
  {
    header: "Contact",
    accessorKey: "contact",
    cell: (info) => coloredStatCell(info as CellContext<Player, number>),
    enableSorting: true,
  },
  {
    header: "Game Power",
    accessorKey: "gamePower",
    cell: (info) => coloredStatCell(info as CellContext<Player, number>),
    enableSorting: true,

  },
  {
    header: "Hitting Overall",
    accessorKey: "hittingOverall",
    cell: (info) => coloredStatCell(info as CellContext<Player, number>),
    enableSorting: true,
  },
];

export default function PlayerListPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Player List</h1>
      <Table data={players} columns={columns} />
    </div>
  );
}
