"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { Reservation } from "../Model";
import { columnsAndCallback } from "./columns";
import { DataTable } from "./tables";

export default function page() {
	const [reservations, setreservations] = useState<Reservation[]>([]);
	const fetchData = async () => {
		try {
			const response = await axios.get("/reservations");
			setreservations(response.data);
		} catch (error: any) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	const AddDataFct = (newReservation: Reservation) => {
		setreservations((prev) => [...prev, newReservation]);
	};
	const columns = columnsAndCallback(fetchData);
	return (
		<div>
			<DataTable
				AddDataFct={AddDataFct}
				columns={columns}
				data={reservations}
			/>
		</div>
	);
}

// async function getData(): Promise<Reservation[]> {
// 	// Fetch data from your API here.
// 	return [
// 		{
// 			idreserv: "RES001",
// 			dateDeReserv: new Date("2023-11-30T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-16T21:00:00.000+00:00"),
// 			nomcli: "John Doe",
// 			table: {
// 				idtable: "T001",
// 				designation: "Table de l Oliveraie",
// 				nbrPlace: 4,
// 			},
// 		},
// 		{
// 			idreserv: "RES002",
// 			dateDeReserv: new Date("2023-11-01T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-17T21:00:00.000+00:00"),
// 			nomcli: "Jane Smith",
// 			table: {
// 				idtable: "T002",
// 				designation: "Table de la Vigne",
// 				nbrPlace: 8,
// 			},
// 		},
// 		{
// 			idreserv: "RES003",
// 			dateDeReserv: new Date("2023-10-02T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-18T21:00:00.000+00:00"),
// 			nomcli: "Robert Johnson",
// 			table: {
// 				idtable: "T003",
// 				designation: "Table du Jardin",
// 				nbrPlace: 6,
// 			},
// 		},
// 		{
// 			idreserv: "RES004",
// 			dateDeReserv: new Date("2023-09-03T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-19T21:00:00.000+00:00"),
// 			nomcli: "Michael Williams",
// 			table: {
// 				idtable: "T004",
// 				designation: "Table des Saveurs",
// 				nbrPlace: 6,
// 			},
// 		},
// 		{
// 			idreserv: "RES005",
// 			dateDeReserv: new Date("2023-08-04T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-20T21:00:00.000+00:00"),
// 			nomcli: "Mary Brown",
// 			table: {
// 				idtable: "T005",
// 				designation: "Table de l OcÃ©an",
// 				nbrPlace: 6,
// 			},
// 		},
// 		{
// 			idreserv: "RES006",
// 			dateDeReserv: new Date("2023-07-05T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-21T21:00:00.000+00:00"),
// 			nomcli: "James Jones",
// 			table: {
// 				idtable: "T006",
// 				designation: "Table de l Horizon",
// 				nbrPlace: 4,
// 			},
// 		},
// 		{
// 			idreserv: "RES007",
// 			dateDeReserv: new Date("2023-06-06T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-22T21:00:00.000+00:00"),
// 			nomcli: "Patricia Garcia",
// 			table: {
// 				idtable: "T007",
// 				designation: "Table des Saisons",
// 				nbrPlace: 4,
// 			},
// 		},
// 		{
// 			idreserv: "RES008",
// 			dateDeReserv: new Date("2023-05-07T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-23T21:00:00.000+00:00"),
// 			nomcli: "Jennifer Martinez",
// 			table: {
// 				idtable: "T008",
// 				designation: "Table du MarchÃ©",
// 				nbrPlace: 4,
// 			},
// 		},
// 		{
// 			idreserv: "RES009",
// 			dateDeReserv: new Date("2023-04-08T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-24T21:00:00.000+00:00"),
// 			nomcli: "William Rodriguez",
// 			table: {
// 				idtable: "T009",
// 				designation: "Table de la Montagne",
// 				nbrPlace: 8,
// 			},
// 		},
// 		{
// 			idreserv: "RES010",
// 			dateDeReserv: new Date("2023-03-09T21:00:00.000+00:00"),
// 			dateReserve: new Date("2024-06-25T21:00:00.000+00:00"),
// 			nomcli: "Linda Davis",
// 			table: {
// 				idtable: "T010",
// 				designation: "Table des Ã‰pices",
// 				nbrPlace: 4,
// 			},
// 		},
// 	];
// }
