"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  useSortable,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};



export function Table<T>({ data, columns }: TableProps<T>) {
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });


  return (
<div className="overflow-x-auto bg-gray-900 border border-gray-700" 
  style={{
    scrollbarWidth: "thin", // Firefox
    scrollbarColor: "rgba(255,255,255,0.1) transparent", // Firefox
  }}
>
      <table className="table-fixed min-w-full text-sm text-gray-200 border-separate border-spacing-0">
        <thead className="bg-gray-800 border-b border-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => {
                const isSorted = header.column.getIsSorted();
                const showBorder = idx !== headerGroup.headers.length - 1;

                return (
                  <th
                    key={header.id}
                    className={`relative p-3 text-left font-semibold tracking-wide select-none transition-colors
                      ${isSorted ? "bg-gray-700 text-white" : "text-gray-300"}
                      ${showBorder ? "border-r border-white" : ""}
                    `}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{  width: header.getSize(), maxWidth: header.getSize() }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " ▲",
                      desc: " ▼",
                    }[isSorted as string] ?? null}

                    {/* Resizer */}
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className="absolute top-0 right-[-1px] bottom-0 w-px bg-white cursor-col-resize select-none"
                      style={{ zIndex: 10 }}
                    />
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-800 hover:bg-gray-800 transition-colors"
            >
              {row.getVisibleCells().map((cell, idx) => {
                const showBorder =
                  idx !== row.getVisibleCells().length - 1;

                return (
                  <td
                  key={cell.id}
                  className={`p-3 text-gray-300 leading-normal overflow-hidden text-ellipsis whitespace-nowrap
                    ${showBorder ? "border-r border-white" : ""}`}
                  style={{ maxWidth: "100%" }}
                  >

                  {flexRender(cell.column.columnDef.cell, cell.getContext())}

                </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
