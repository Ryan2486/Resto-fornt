"use client";

import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { menu } from "../../../Personnaliser/Model";
import ModalMofi from "./Modal/UpdateModal";

export const columnsAndCallback = (
	NotifDeleteSucc: (Msg: string) => void,
	NotifDeleteErr: (Msg: string) => void,
	Refecth: () => Promise<void>
): ColumnDef<menu>[] => [
	{
		accessorKey: "idplat",
		header: "ID du plat",
	},
	{
		accessorKey: "nomplat",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Nom du plat
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "pu",
		header: () => <div className="text-center">PU</div>,
		cell: ({ row }) => {
			return (
				<div className="text-center font-bold">
					{formatter.format(row.getValue("pu"))}
				</div>
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
			const menu: menu = row.original;

			return (
				<div className="space-x-3 text-center">
					<ModalMofi ModifierCallback={Refecth} menu={menu} />
					<Button
						variant="destructive"
						onClick={() => {
							DeleteMenuFct(
								menu.idplat,
								Refecth,
								NotifDeleteSucc,
								NotifDeleteErr
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

const formatter = new Intl.NumberFormat("fr-FR", {
	style: "currency",
	currency: "MGA",
});

const DeleteMenuFct = async (
	idplat: string,
	Refecth: () => Promise<void>,
	NotifDeleteSucc: (Msg: string) => void,
	NotifDeleteErr: (Msg: string) => void
) => {
	try {
		const rep = await axios.delete("/menus/" + idplat);
		NotifDeleteSucc(idplat);
		Refecth();
	} catch (error: any) {
		NotifDeleteErr(error.response.data);
	}
};
