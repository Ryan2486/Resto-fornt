import { menu } from "../Model";
import { columns } from "./columns";
import { DataTable } from "./tables";
async function getData(): Promise<menu[]> {
	// Fetch data from your API here.
	return [
		{ idplat: "CURR-001", nomplat: "Poulet au curry", pu: 20000 },
		{ idplat: "JIAO-002", nomplat: "Jiaozi", pu: 15000 },
		{ idplat: "CLQ-003", nomplat: "Canard laquÃ©", pu: 50000 },
		{ idplat: "NOUD-004", nomplat: "Nouilles sautÃ©es", pu: 15000 },
		{ idplat: "LHEA-005", nomplat: "Lion s head", pu: 20000 },
		{ idplat: "SOUP-006", nomplat: "Soupe aigre-piquante", pu: 18000 },
		{ idplat: "TOFU-007", nomplat: "Tofu mapo", pu: 16000 },
		{ idplat: "POIS-008", nomplat: "Poisson entier Ã  la vapeur", pu: 55000 },
		{
			idplat: "CREV-009",
			nomplat: "Crevettes sauce aux haricots noirs",
			pu: 30000,
		},
		{ idplat: "CARA-010", nomplat: "Poulet au caramel", pu: 35000 },
	];
}
export default async function page() {
	const data = await getData();
	return (
		<div>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
