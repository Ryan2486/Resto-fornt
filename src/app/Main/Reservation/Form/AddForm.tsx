import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import z from "zod";
import { Reservation, Table } from "../../../../Personnaliser/Model";

interface Childrenprops {
	ModalCallBack: (newReservation: Reservation) => void;
}
export default function AddForm({ ModalCallBack }: Childrenprops) {
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
		idreserv: z.string().describe("Id de reservation"),
		nomcli: z.string().describe("Nom du client"),
		dateDeReserv: z.date().describe("Date de réservation"),
		dateReserve: z.date().describe("Réservation pour le"),
		table: z.object({
			idtable: z
				.enum(tables.map((table: Table) => table.idtable))
				.describe("Id de table"),
		}),
	});

	const AddReservation = async (data: any) => {
		try {
			//transformer en objet JS/TS pour axios
			const rep = await axios.post("/reservations", JSON.parse(data));
			ModalCallBack(rep.data);
		} catch (error) {
			console.log(error);
		}
	};
	const FormCallBack = (data: any) => {
		//transformer en JSON string pour les formats de date //pas de solution in fait avec
		AddReservation(JSON.stringify(data));
	};

	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(data) => {
				FormCallBack(data);
			}}>
			<DialogFooter>
				<AutoFormSubmit></AutoFormSubmit>
			</DialogFooter>
		</AutoForm>
	);
}
