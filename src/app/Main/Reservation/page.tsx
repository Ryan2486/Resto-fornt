"use client";

import { DataTable } from "@/Personnaliser/DataTable";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { Reservation } from "../../../Personnaliser/Model";
import AddModal from "./Modal/AddModal";
import { columnsAndCallback } from "./columns";

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
				columns={columns}
				columnsRech="nomcli"
				placeholderInput="Filter nom du client..."
				data={reservations}>
				<AddModal AddDataFct={AddDataFct} />
			</DataTable>
		</div>
	);
}
