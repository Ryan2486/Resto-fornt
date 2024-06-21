"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import moment from "moment";
import { Reservation } from "../Model";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Reservation>[] = [
	{
		accessorKey: "idreserv",
		header: "ID de reservation",
	},
	{
		accessorKey: "nomcli",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Nom du Client
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "table.designation",
		header: "Table",
	},
	{
		accessorKey: "dateReserve",
		header: () => <div className="text-right">Reserver pour</div>,
		cell: ({ row }) => {
			const date = moment(row.getValue("dateReserve")).format("LL");
			return <div className="text-right font-bold">{date}</div>;
		},
	},
	{
		accessorKey: "dateDeReserv",
		header: () => <div className="text-right">Reserver le</div>,
		cell: ({ row }) => {
			const date = moment(row.getValue("dateDeReserv")).format("LL");
			return <div className="text-right font-bold">{date}</div>;
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const reservation = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(reservation.idreserv)
							}>
							Copy commande ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
