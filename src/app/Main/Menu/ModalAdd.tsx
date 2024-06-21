import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-[#004085]">Ajouter</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Ajouter Plat</DialogTitle>
					<DialogDescription>
						Ajouter des plats dans votre magnifique restaurant
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="idplat" className="text-right">
							ID du plat
						</Label>
						<Input
							id="idplat"
							placeholder="Identifiant"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="nomplat" className="text-right">
							Désignation du plat
						</Label>
						<Input
							id="nomplat"
							placeholder="Désignation du plat"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="pu" className="text-right">
							Prix Unitaire
						</Label>
						<Input
							required={true}
							type="number"
							id="pu"
							placeholder="Prix unitaire"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" className="bg-[#004085]">
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
