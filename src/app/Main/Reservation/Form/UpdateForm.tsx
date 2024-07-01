"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import z from "zod";
import { Reservation, Table } from "../../../../Personnaliser/Model";

interface Childrenprops {
	Reservation: Reservation;
	ModalCallBack: () => void;
}
export default function ({ ModalCallBack, Reservation }: Childrenprops) {
	const [tables, settables] = useState<any>([]);
	const fetchtable = async () => {
		try {
			const rep = await axios.get("/tables");
			settables(rep.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchtable();
	}, []);
	const schema = z.object({
		idreserv: z
			.string()
			.describe("Id de reservation")
			.default(Reservation.idreserv),
		nomcli: z.string().describe("Nom du client").default(Reservation.nomcli),
		dateDeReserv: z
			.date()
			.describe("Date de reservation")
			.default(new Date(Reservation.dateDeReserv)),
		dateReserve: z
			.date()
			.describe("Réservation pour le")
			.default(new Date(Reservation.dateReserve)),
		table: z.object({
			idtable: z
				.enum(tables.map((table: Table) => table.idtable))
				.describe("Id de table")
				.default(Reservation.table.idtable),
		}),
	});
	const onSubmit = async (data: Reservation) => {
		try {
			const rep = await axios.put("/reservations/" + data.idreserv, data);
			ModalCallBack();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(data: any) => {
				onSubmit(data);
			}}>
			<DialogFooter>
				<AutoFormSubmit></AutoFormSubmit>
			</DialogFooter>
		</AutoForm>
	);
}
