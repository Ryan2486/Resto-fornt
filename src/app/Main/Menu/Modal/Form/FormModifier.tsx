import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "@/lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { menu } from "../../../Model";
interface ChildComponentProps {
	menu: menu;
	ModifierCallback: () => void;
}
const schema = yup.object().shape({
	idplat: yup.string().required("ID du plat est requis"),
	nomplat: yup.string().required("Désignation du plat est requise"),
	pu: yup
		.number()
		.typeError("Prix unitaire doit être un nombre")
		.required("Prix unitaire est requis"),
});

export default function FormModifier({
	menu,
	ModifierCallback,
}: ChildComponentProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid gap-4 py-4">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="idplat" className="text-right">
						ID du plat
					</Label>
					<div className="col-span-3">
						<Input
							id="idplat"
							placeholder="Identifiant"
							value={menu.idplat}
							{...register("idplat")}
							className={`col-span-3 `}
						/>
						{errors.idplat && (
							<p className="text-red-500 text-sm">{errors.idplat.message}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="nomplat" className="text-right">
						Désignation du plat
					</Label>
					<div className="col-span-3">
						<Input
							id="nomplat"
							placeholder="Désignation du plat"
							defaultValue={menu.nomplat}
							{...register("nomplat")}
							className={`col-span-3 `}
						/>
						{errors.nomplat && (
							<p className="text-red-500 text-sm">{errors.nomplat.message}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="pu" className="text-right">
						Prix Unitaire
					</Label>
					<div className="col-span-3">
						<Input
							required={true}
							type="number"
							id="pu"
							placeholder="Prix unitaire"
							defaultValue={menu.pu}
							{...register("pu")}
							className={`col-span-3`}
						/>
						{errors.pu && (
							<p className="text-red-500 text-sm">{errors.pu.message}</p>
						)}
					</div>
				</div>
			</div>
			<DialogFooter>
				<Button type="submit" className="bg-[#004085]">
					Save changes
				</Button>
			</DialogFooter>
		</form>
	);
}
