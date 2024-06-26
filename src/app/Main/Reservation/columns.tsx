"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import moment from "moment";
import { Reservation } from "../Model";
import ModalModifier from "./Modal/ModalModifier";

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
		header: "Action",
		cell: ({ row }) => {
			const reservation = row.original;

			return (
				<div>
					<ModalModifier></ModalModifier>
				</div>
			);
		},
	},
];
