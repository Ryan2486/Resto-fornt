import { Table } from "@/Personnaliser/Model";
import { Notif } from "@/Personnaliser/Notif";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import z from "zod";

interface props {
	AddCallback: (newTable: Table) => void;
}
export default function AddForm({ AddCallback }: props) {
	const { NotificationSuccessAdd, NotificationError } = Notif();
	const schema = z.object({
		idtable: z.string().describe("ID de la table"),
		designation: z.string(),
		nbrPlace: z.number(),
	});

	const onSubmit = async (newTable: Table) => {
		try {
			const rep = await axios.post("tables", newTable);
			NotificationSuccessAdd(newTable.idtable);
			AddCallback(rep.data);
		} catch (error: any) {
			NotificationError(error.response.data);
		}
	};
	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(newTable) => {
				onSubmit(newTable);
			}}>
			<DialogFooter>
				<AutoFormSubmit />
			</DialogFooter>
		</AutoForm>
	);
}
