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

export default function DialogDemo() {
	const [isopen, setopen] = useState<boolean>(false);
	const AddCallbackModal = (menu: menu) => {
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
					Ajouter
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Ajouter Table</DialogTitle>
					<DialogDescription>
						Ajouter des tables dans votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				{/* <FormAdd AddCallbackModal={AddCallbackModal} /> */}
			</DialogContent>
		</Dialog>
	);
}
