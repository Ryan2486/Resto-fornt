import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecetteTotal() {
	return (
		<Card className="w-full h-1/6">
			<CardHeader className="h-1/6">
				<CardTitle className="h-full flex flex-row justify-center items-center">
					<p>Recette Total :</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6 flex flex-row justify-center">
				<p>10 250 080 261 000 Ar</p>
			</CardContent>
		</Card>
	);
}
