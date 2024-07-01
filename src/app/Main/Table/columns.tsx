"use client";

import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Table } from "../../../Personnaliser/Model";

export const columnsAndCallback = (
	Refecth: () => Promise<void>,
	NotifcationErr: (Msg: string) => void,
	NotifcationDelete: (Msg: string) => void
): ColumnDef<Table>[] => [
	{
		accessorKey: "idtable",
		header: "ID de la table",
	},
	{
		accessorKey: "designation",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Désigantion de la table
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "nbrPlace",
		header: () => <div className="text-center">Nbr de place</div>,
		cell: ({ row }) => {
			return (
				<div className="text-center font-bold">{row.getValue("nbrPlace")}</div>
			);
		},
	},
	{
		id: "actions",
		header: () => {
			return (
				<div className="text-center">
					<p>Action</p>
				</div>
			);
		},
		cell: ({ row }) => {
			const table: Table = row.original;

			return (
				<div className="space-x-3 text-center">
					{/* <ModalMofi ModifierCallback={Refecth} table={table} /> */}
					<Button
						variant="destructive"
						onClick={() => {
							DeleteTableFct(
								table.idtable,
								Refecth,
								NotifcationErr,
								NotifcationDelete
							);
						}}>
						Supprimer
					</Button>
				</div>
			);
		},
	},
];

//
//Fonction et autre
//

const DeleteTableFct = async (
	idplat: string,
	Refecth: () => Promise<void>,
	NotifcationErr: (Msg: string) => void,
	NotifcationDelete: (Msg: string) => void
) => {
	try {
		const rep = await axios.delete("/tables/" + idplat);
		NotifcationDelete(idplat);
		Refecth();
	} catch (error: any) {
		NotifcationErr(error.response.data);
	}
};
