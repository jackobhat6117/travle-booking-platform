"use client";
import { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "@/components/custom/faceted-filter";
import { getDropDownValues } from "@/lib/tableUtils";
import { DataTablePagination } from "@/components/custom/pagination-controls";
import useStore from "@/store/demo";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    onRowSelectionChange: setRowSelection,

    onSortingChange: setSorting,

    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnOrder,
    },

    getPaginationRowModel: getPaginationRowModel(),

    onColumnOrderChange: setColumnOrder,

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedRowModel: getFacetedRowModel(),

    onColumnVisibilityChange: setColumnVisibility,

    initialState: {
      pagination: { pageSize: 5 },
    },

    meta: {
      myOwnMethod: () => {
        console.log("Custom method");
      },
    },
  });

  const isFiltered = table.getState().columnFilters.length > 0;
  const counter = useStore((state) => state.counter);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
  
        <h4>This is to demonstrate the store functionality, the library used is called Zustand and its amazing unlike redux</h4>
        <p>Counter: {counter}</p>
        <Button onClick={increment}>Increment</Button>
        <Button className="ml-4" onClick={decrement}>Decrement</Button>
   
      <div className="flex justify-between py-4">
        <div className="flex gap-3">
          <Input
            placeholder="Filter by name"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <div className="flex-col">
            {table.getColumn("location") && (
              <DataTableFacetedFilter
                column={table.getColumn("location")}
                title="Location"
                options={getDropDownValues(data, "location")}
              />
            )}
          </div>
          <div>
            {table.getColumn("status") && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="Status"
                options={getDropDownValues(data, "status")}
              />
            )}
          </div>

          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="w-40 p-2"
            >
              Clear filters
            </Button>
          )}
        </div>

        <Button
          onClick={() => {
            table.resetRowSelection(),
              table.resetColumnFilters(),
              table.resetColumnVisibility();
            table.resetColumnOrder();
          }}
          variant="outline"
          className="text-red-800 border-red-800"
        >
          Reset table
        </Button>
      </div>

      {/* Column selection button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Select columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value: any) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-3 border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className=""
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            {table.getFooterGroups().map((footerGroup) => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </div>
      <div className="flex justify-end pt-4">
        <DataTablePagination table={table}></DataTablePagination>
      </div>

      <div className="flex justify-between py-4">
        <h1>
          H1 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h1>
        <h2>
          H2 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h2>
        <h3>
          H3 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h3>
        <h4>
          H4 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h4>
        <h5>
          H5 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h5>
        <h6>
          H6 This is a demo page, you can start cloning this folder app/user and
          continue to modify or add files to the folder as your need
        </h6>
      </div>
    </div>
  );
}
