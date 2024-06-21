import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecetteTotalprops {
	total: number;
}
export default function RecetteTotal({ total }: RecetteTotalprops) {
	return (
		<Card className="w-full h-full">
			<CardHeader className="h-1/6">
				<CardTitle className="h-full flex flex-row justify-center items-center">
					<p>Recette Total :</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6 flex flex-row justify-center">
				<p>{total} Ar</p>
			</CardContent>
		</Card>
	);
}
