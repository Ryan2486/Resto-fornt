"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { menu } from "../Model";
import { columnsAndCallback } from "./columns";
import { DataTable } from "./tables";
export default function page() {
	const [menus, setMenus] = useState<menu[]>([]);
	const fetchData = async () => {
		try {
			const response = await axios.get("/menus");
			setMenus(response.data);
		} catch (error: any) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const AddCallback = (data: menu) => {
		console.log(data);
		setMenus((prev) => [...prev, data]);
	};
	const columns = columnsAndCallback(fetchData);
	return (
		<div>
			<DataTable columns={columns} data={menus} AddCallback={AddCallback} />
		</div>
	);
}
