import { Notif } from "@/app/Main/Notif";
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
	const { NotificationError, NotificationSuccessUpdate } = Notif();
	const schema = z.object({
		idplat: z.string().default(menu.idplat),
		nomplat: z.string().default(menu.nomplat),
		pu: z.number().default(menu.pu),
	});
	const onSubmit = async (data: menu) => {
		try {
			await axios.put("/menus/" + data.idplat, data);
			NotificationSuccessUpdate(data.idplat);
			ModifierCallback();
		} catch (error: any) {
			NotificationError(error.response.data);
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
