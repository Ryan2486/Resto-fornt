import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { menu } from "../../Model";
import FormModifier from "./Form/FormModifier";
interface ChildComponentProps {
	menu: menu;
	ModifierCallback: () => void;
}

export default function App({ menu, ModifierCallback }: ChildComponentProps) {
	const [isopen, setopen] = useState<boolean>(false);
	const ModalCallback = () => {
		ModifierCallback();
		setopen(false);
	};
	return (
		<Dialog open={isopen} onOpenChange={setopen}>
			<DialogTrigger asChild>
				<Button
					className="bg-[#004085]"
					onClick={() => {
						setopen(true);
					}}>
					Modifier
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Ajouter Plat</DialogTitle>
					<DialogDescription>
						Modifier un plat dans votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				<FormModifier menu={menu} ModifierCallback={ModalCallback} />
			</DialogContent>
		</Dialog>
	);
}
