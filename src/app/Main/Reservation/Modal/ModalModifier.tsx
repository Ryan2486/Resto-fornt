import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function ModalModifier() {
	const [isopen, setopen] = useState<boolean>(false);
	return (
		<Dialog open={isopen}>
			<DialogTrigger>
				<Button
					className="bg-[#004085]"
					onClick={() => {
						setopen(true);
					}}>
					Modifier
				</Button>
			</DialogTrigger>
			<DialogContent></DialogContent>
		</Dialog>
	);
}
