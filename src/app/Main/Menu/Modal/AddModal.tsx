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
import FormAdd from "./Form/AddModal";
interface ChildComponentProps {
	AddCallback: (data: menu) => void;
}

export default function DialogDemo({ AddCallback }: ChildComponentProps) {
	const [isopen, setopen] = useState<boolean>(false);
	const AddCallbackModal = (menu: menu, close: boolean) => {
		AddCallback(menu);
		setopen(close);
	};

	return (
		<Dialog open={isopen} onOpenChange={setopen}>
			<DialogTrigger asChild>
				<Button
					className="bg-[#004085]"
					onClick={() => {
						setopen(true);
					}}>
					Ajouter
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Ajouter Plat</DialogTitle>
					<DialogDescription>
						Ajouter des plats dans votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				<FormAdd AddCallbackModal={AddCallbackModal} />
			</DialogContent>
		</Dialog>
	);
}
