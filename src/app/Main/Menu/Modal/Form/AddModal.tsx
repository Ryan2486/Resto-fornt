import { Notif } from "@/app/Main/Notif";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import z from "zod";
import { menu } from "../../../Model";
interface ChildComponentProps {
	AddCallbackModal: (data: menu, close: boolean) => void;
}

export default function FormAdd({ AddCallbackModal }: ChildComponentProps) {
	const { NotificationError, NotificationSuccessAdd } = Notif();
	const schema = z.object({
		idplat: z.string().describe("ID du plat"),
		nomplat: z.string().describe("Désignation du plat"),
		pu: z.number().describe("Prix"),
	});
	const onSubmit = async (data: menu) => {
		await axios
			.post("/menus", data)
			.then((rep) => {
				AddCallbackModal(rep.data, false);
				NotificationSuccessAdd(rep.data.idplat);
			})
			.catch((error) => {
				NotificationError(error.response.data);
			});
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
