import { LayoutGrid } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row ">
			<div className="flex flex-col items-center bg-[#004085] h-screen w-1/6 text-2xl text-white space-y-4">
				<Image
					src={"/Lotus_Blue.png"}
					alt="Logo"
					width="200"
					height={200}></Image>
				<div className="flex flex-row items-center space-x-2">
					<LayoutGrid />
					<p>Dashboard</p>
				</div>
				<p>Menu</p>
				<p>Réservation</p>
				<p>Commande</p>
			</div>
			<div className="w-full m-4 h-screen">{children}</div>
		</div>
	);
}
