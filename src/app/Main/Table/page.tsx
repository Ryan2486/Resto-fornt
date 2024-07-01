"use client";

import { DataTable } from "@/Personnaliser/DataTable";
import Modal from "@/Personnaliser/Modal";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { Table } from "../../../Personnaliser/Model";
import { Notif } from "../../../Personnaliser/Notif";
import AddForm from "./Modal/Form/AddForm";
import { columnsAndCallback } from "./columns";

export default function page() {
	const [tables, setTables] = useState<Table[]>([]);
	const [isOpenModal, setOpenModal] = useState<boolean>(false);
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

	const AddCallback = (newTable: Table) => {
		setOpenModal(false);
		setTables((prev) => [...prev, newTable]);
	};
	const columns = columnsAndCallback(
		fetchData,
		NotificationError,
		NotificationSuccessDelete
	);
	return (
		<div>
			<DataTable
				columns={columns}
				columnsRech="designation"
				placeholderInput="Filter designation..."
				data={tables}>
				<Modal
					isopen={isOpenModal}
					setopen={setOpenModal}
					TitleBtn="Ajouter"
					TitleModal="Ajouter Table"
					Description="Ajouter une table dans votre magnifique réstaurant">
					<AddForm AddCallback={AddCallback}></AddForm>
				</Modal>
			</DataTable>
		</div>
	);
}
