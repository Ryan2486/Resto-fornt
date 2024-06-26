"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import z from "zod";

export default function page() {
	const commandeshema = z.object({
		idcom: z.string().describe("ID de la commande"),
	});
	return (
		<AutoForm formSchema={commandeshema}>
			<AutoFormSubmit />
		</AutoForm>
	);
}
