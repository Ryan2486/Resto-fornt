"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import z from "zod";

// interface Childrenprops {
// 	ModalCallBack: () => void;
// }
export default function () {
	const schema = z.object({
		idservice: z.string(),
		nomcli: z.string(),
		dateDeReservation: z.date(),
		dateReserve: z.date(),
	});
	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(data) => {
				console.log(data);
			}}>
			<DialogFooter>
				<AutoFormSubmit></AutoFormSubmit>
			</DialogFooter>
		</AutoForm>
	);
}
