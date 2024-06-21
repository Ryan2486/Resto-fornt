import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PlatChinois {
	nom: string;
	prix: string;
	vente: number;
}
interface Top10PlatProps {
	Top10: PlatChinois[];
}

export default function Top10Plat({ Top10 }: Top10PlatProps) {
	return (
		<Card className="h-full w-full">
			<CardHeader className="h-1/6">
				<CardTitle className="h-full flex flex-row items-center justify-center">
					<p>Les 10 plats les plus vendus</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6">
				<ScrollArea className="h-full w-full rounded-md border">
					{Top10.map((item, index) => (
						<div key={index} className="flex flex-row m-4">
							<p key={index + item.nom} className=" w-2/5 flex items-center">
								#{index + 1} {item.nom}
							</p>
							<p key={index + item.prix} className=" w-2/5 flex justify-center">
								{item.prix}
							</p>
							<p
								key={index + item.vente}
								className=" w-1/5 flex justify-center">
								{item.vente}
							</p>
						</div>
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
