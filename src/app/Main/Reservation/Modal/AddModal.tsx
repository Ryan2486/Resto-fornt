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
import { Reservation } from "../../Model";
import AddForm from "../Form/AddForm";

interface Childrenprops {
	AddDataFct: (newReservation: Reservation) => void;
}

export default function AddModal({ AddDataFct }: Childrenprops) {
	const [isopen, setopen] = useState<boolean>(false);

	const AddModalCallBack = (newReservation: Reservation) => {
		setopen(false);
		AddDataFct(newReservation);
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
					<DialogTitle>Ajouter une reservation</DialogTitle>
					<DialogDescription>
						Ajouter une reservation dans votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				<AddForm ModalCallBack={AddModalCallBack} />
			</DialogContent>
		</Dialog>
	);
}
