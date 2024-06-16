"use client";
import { useState } from "react";
import ListePlat from "./ListePlat.json";
import RecetteTotal from "./RecetteTotal";
import ReservationDispo from "./ReservationDispo";
import Reservationdata from "./Reserver.json";
import Top10Plat from "./Top10Plat";

interface Reservation {
	nom: string;
	heure_debut: string;
	heure_fin: string;
	places_max: number;
	// Ajoutez d'autres propriétés si nécessaire selon votre fichier JSON
}
interface PlatChinois {
	nom: string;
	prix: string;
	vente: number;
}

export default function App() {
	const [Reservation, setReservation] =
		useState<Reservation[]>(Reservationdata);
	const [PlatChinois, setPlatChinois] = useState<PlatChinois[]>(ListePlat);

	return (
		<>
			<div className="flex flex-row h-3/5 space-x-5 w-full ">
				<div className="h-full w-2/5 ">
					<ReservationDispo reservations={Reservation} />
				</div>
				<div className="flex flex-col w-3/5 h-full space-y-4">
					<RecetteTotal />
					<Top10Plat Top10={PlatChinois} />
				</div>
			</div>
		</>
	);
}
