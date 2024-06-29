"use client";

import { toast } from "@/components/ui/use-toast";

export function Notif() {
	const NotificationSuccessAdd = (Msg: string) => {
		toast({
			variant: "default",
			title: "Ajout reussi",
			description: Msg + " ajouter avec succes",
		});
	};
	const NotificationSuccessUpdate = (Msg: string) => {
		toast({
			variant: "default",
			title: "Mofication reussi",
			description: Msg + " modifier avec succes",
		});
	};
	const NotificationSuccessDelete = (Msg: string) => {
		toast({
			variant: "default",
			title: "Suppression reussi",
			description: Msg + " supprimer avec succes",
		});
	};
	const NotificationError = (Msg: string) => {
		toast({
			variant: "destructive",
			title: "Erreur",
			description: Msg,
		});
	};
	return {
		NotificationSuccessAdd,
		NotificationSuccessUpdate,
		NotificationError,
		NotificationSuccessDelete,
	};
}
