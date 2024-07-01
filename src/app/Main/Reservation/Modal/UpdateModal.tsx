"use client";

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
import { Reservation } from "../../../../Personnaliser/Model";
import UpdateForm from "../Form/UpdateForm";
interface ChildComponentProps {
	reservation: Reservation;
	refetch: () => Promise<void>;
}
export default function ModalModifier({
	reservation,
	refetch,
}: ChildComponentProps) {
	const [isopen, setopen] = useState<boolean>(false);
	const ModalCallBack = () => {
		refetch();
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
					<DialogTitle>Modifier une reservation</DialogTitle>
					<DialogDescription>
						Modifier une reservation de votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				<UpdateForm ModalCallBack={ModalCallBack} Reservation={reservation} />
			</DialogContent>
		</Dialog>
	);
}
