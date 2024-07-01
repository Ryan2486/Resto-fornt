import { menu } from "@/Personnaliser/Model";
import { Notif } from "@/Personnaliser/Notif";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "@/lib/axios";
import z from "zod";
interface ChildComponentProps {
	AddCallbackModal: (data: menu) => void;
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
				AddCallbackModal(rep.data);
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
