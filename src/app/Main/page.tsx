"use client";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import ChartRecette from "./ChartRecette";
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
}
interface PlatChinois {
	nom: string;
	prix: string;
	vente: number;
}
interface RecetteMois {
	mois: string;
	recette: number;
}

export default function App() {
	const [Reservation, setReservation] =
		useState<Reservation[]>(Reservationdata);
	const [PlatChinois, setPlatChinois] = useState<PlatChinois[]>(ListePlat);
	const [recetteTotal, setRecetteTotal] = useState<number>(0);
	const [recetteDernierMois, setrecetteDernierMois] = useState<RecetteMois[]>(
		[]
	);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/Dashboard");
				setRecetteTotal(response.data.totalRecette);
				setrecetteDernierMois(response.data.revenuParMois);
			} catch (error: any) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col h-full space-y-4">
			<div className="flex flex-row h-[500px] space-x-5 w-full  ">
				<div className="h-full w-2/5 ">
					<ReservationDispo reservations={Reservation} />
				</div>
				<div className="flex flex-col w-3/5 space-y-4 h-full">
					<div className="h-[100px]">
						<RecetteTotal total={recetteTotal} />
					</div>
					<div className="h-[384px]">
						<Top10Plat Top10={PlatChinois} />
					</div>
				</div>
			</div>
			<div className="h-[410px] ">
				<ChartRecette chartdata={recetteDernierMois} />
			</div>
		</div>
	);
}
