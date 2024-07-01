import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from "react";
import {
	Bar,
	CartesianGrid,
	ComposedChart,
	Legend,
	Line,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
interface RecetteMois {
	mois: string;
	recette: number;
}
interface chartprops {
	chartdata: RecetteMois[];
}
// var defaultData: RecetteMois[] = [
// 	{ mois: "Jan", recette: 400 },
// 	{ mois: "Feb", recette: 300 },
// 	{ mois: "Mar", recette: 500 },
// 	{ mois: "Apr", recette: 200 },
// 	{ mois: "May", recette: 600 },
// 	{ mois: "Jun", recette: 700 },
// ];

function ChartRecette({ chartdata }: chartprops) {
	return (
		<Card className="w-full h-full">
			<CardHeader className="h-1/6">
				<CardTitle className="h-full flex flex-row justify-center items-center">
					<p>Recette des 6 derniers mois :</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-5/6">
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart
						key={Math.random()}
						width={500}
						height={400}
						data={chartdata}
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20,
						}}>
						<CartesianGrid stroke="#f5f5f5" />
						<XAxis dataKey="mois" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="recette"
							name={"Recette"}
							barSize={50}
							fill="#413ea0"
						/>
						<Line
							type="monotone"
							dataKey="recette"
							name="Recette"
							stroke="#ff7300"
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
export default memo(ChartRecette);
