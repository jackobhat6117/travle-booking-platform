"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/user";
import {
  HiArrowUp,
  HiArrowCircleLeft as HiOutlineArrowLeftCircle,
  HiArrowCircleRight as HiOutlineArrowRightCircle,
} from "react-icons/hi";
import { RiMore2Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Toast } from "@/components/custom/Toast";
import { Badge } from "@/components/ui/badge";
import { moveColumnsDown, moveColumnsUp } from "@/lib/tableUtils";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Name
          <HiArrowUp />
        </div>
      );
    },
    cell: ({ row }) => {
      const { name } = row.original;
      return <div className="font-medium text-left ">{name}</div>;
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Department
          <HiArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left ">
          Location
          <HiArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("location")}</div>
    ),
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Status
          <HiArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const { status } = row.original;
      const colors = {
        active: "bg-green-500",
        "in-active": "bg-yellow-500",
        suspended: "bg-red-500",
        other: "bg-gray-500",
      };

      return (
        <Badge
          variant="outline"
          className={`${colors[status]} text-white justify-center w-3/4`}
        >
          {status}
        </Badge>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <RiMore2Fill></RiMore2Fill>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              <Toast
                buttonText={"Copy employee id"}
                description={"ID copied to clipboard"}
              ></Toast>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View employee</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];
