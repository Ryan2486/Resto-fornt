import { DatePickerDemo } from "@/components/DatePicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Reservation {
	nom: string;
	heure_debut: string;
	heure_fin: string;
	places_max: number;
}

interface ReservationDispoProps {
	reservations: Reservation[];
}

export default function ReservationDispo({
	reservations,
}: ReservationDispoProps) {
	return (
		<Card className="w-full h-full">
			<CardHeader className="h-1/6">
				<CardTitle className="flex flex-row items-center h-full ">
					<p className=" w-3/4">Table disponible pour le :</p>
					<DatePickerDemo />
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6">
				<ScrollArea className="h-full w-full rounded-md border">
					{reservations.map((item, index) => (
						<div key={index} className="flex flex-row m-4">
							<p key={index} className=" w-2/5 flex items-center">
								{item.nom}
							</p>
							<p key={index} className=" w-1/5 flex justify-center">
								{item.places_max}
							</p>
							<p key={index} className=" w-2/5 flex justify-center">
								{item.heure_debut} - {item.heure_fin}
							</p>
						</div>
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
