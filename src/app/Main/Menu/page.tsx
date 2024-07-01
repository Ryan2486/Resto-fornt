"use client";

import { DataTable } from "@/Personnaliser/DataTable";
import Modal from "@/Personnaliser/Modal";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { menu } from "../../../Personnaliser/Model";
import { Notif } from "../../../Personnaliser/Notif";
import FormAdd from "./Modal/Form/AddForm";
import { columnsAndCallback } from "./columns";

export default function page() {
	const [menus, setMenus] = useState<menu[]>([]);
	const [OpenModal, setOpenModal] = useState<boolean>(false);
	const { NotificationSuccessDelete, NotificationError } = Notif();
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
		setOpenModal(false);
		setMenus((prev) => [...prev, data]);
	};
	const columns = columnsAndCallback(
		NotificationSuccessDelete,
		NotificationError,
		fetchData
	);
	return (
		<div>
			<DataTable
				columns={columns}
				columnsRech="nomplat"
				placeholderInput="Filter designation plat..."
				data={menus}>
				<Modal
					isopen={OpenModal}
					setopen={setOpenModal}
					TitleBtn="Ajouter"
					TitleModal="Ajouter Menu"
					Description="Ajouter un plat dans votre magnifique réstaurant">
					<FormAdd AddCallbackModal={AddCallback}></FormAdd>
				</Modal>
			</DataTable>
		</div>
	);
}
