import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import z from "zod";
import { menu } from "../../../Model";
interface ChildComponentProps {
	AddCallbackModal: (data: menu, close: boolean) => void;
}

export default function FormAdd({ AddCallbackModal }: ChildComponentProps) {
	const schema = z.object({
		idplat: z.string().describe("ID du plat"),
		nomplat: z.string().describe("Désignation du plat"),
		pu: z.number().describe("Prix"),
	});
	const onSubmit = async (data: menu) => {
		try {
			const rep = await axios.post("/menus", data);
			AddCallbackModal(rep.data, false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(data: menu) => {
				onSubmit(data);
			}}>
			<DialogFooter>
				<AutoFormSubmit />
			</DialogFooter>
		</AutoForm>
	);
}
