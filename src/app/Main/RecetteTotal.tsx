import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecetteTotalprops {
	total: number;
}
export default function RecetteTotal({ total }: RecetteTotalprops) {
	const formatter = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "MGA",
	});
	return (
		<Card className="w-full h-full">
			<CardHeader className="h-1/6">
				<CardTitle className="h-full flex flex-row justify-center items-center">
					<p>Recette Total :</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6 flex flex-row justify-center font-bold">
				<p>{formatter.format(total)}</p>
			</CardContent>
		</Card>
	);
}
