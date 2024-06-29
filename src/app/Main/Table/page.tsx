"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { Table } from "../Model";
import { Notif } from "../Notif";
import { columnsAndCallback } from "./columns";
import { DataTable } from "./tables";

export default function page() {
	const [tables, setTables] = useState<Table[]>([]);
	const { NotificationError, NotificationSuccessDelete } = Notif();
	const fetchData = async () => {
		try {
			const response = await axios.get("/tables");
			setTables(response.data);
		} catch (error: any) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	const columns = columnsAndCallback(
		fetchData,
		NotificationError,
		NotificationSuccessDelete
	);
	return (
		<div>
			<DataTable columns={columns} data={tables}></DataTable>
		</div>
	);
}
