import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import z from "zod";
import { menu } from "../../../Model";
interface ChildComponentProps {
	menu: menu;
	ModifierCallback: () => void;
}

export default function FormModifier({
	menu,
	ModifierCallback,
}: ChildComponentProps) {
	const schema = z.object({
		idplat: z.string().default(menu.idplat),
		nomplat: z.string().default(menu.nomplat),
		pu: z.number().default(menu.pu),
	});
	const onSubmit = async (data: menu) => {
		try {
			const rep = await axios.post("/menus", data);
			ModifierCallback();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<AutoForm
			formSchema={schema}
			onSubmit={(data: menu) => {
				onSubmit(data);
			}}
			fieldConfig={{
				idplat: {
					inputProps: {
						disabled: true,
					},
				},
			}}>
			<DialogFooter>
				<AutoFormSubmit></AutoFormSubmit>
			</DialogFooter>
		</AutoForm>
	);
}
