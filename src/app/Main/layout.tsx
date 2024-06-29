import { Toaster } from "@/components/ui/toaster";
import { LayoutGrid, SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row h-screen w-full cursor-default">
			<div className="flex flex-col items-center bg-[#004085] text-white w-[300px] p-4 space-y-4 fixed left-0 top-0 h-full z-10">
				<Image src={"/Lotus_Blue.png"} alt="Logo" width="200" height={200} />
				<Link
					href={"http://localhost:3000/Main"}
					className="flex items-center justify-center space-x-2 h-14 rounded-lg hover:bg-white hover:text-[#004085] w-full cursor-pointer">
					<LayoutGrid />

					<p className="text-2xl ">Dashboard</p>
				</Link>
				<Link
					href={"http://localhost:3000/Main/Menu"}
					className="flex items-center justify-center space-x-2 h-14 rounded-lg hover:bg-white hover:text-[#004085] w-full cursor-pointer">
					<SquareMenu />

					<p className="text-2xl ">Menu</p>
				</Link>
				<Link
					href={"http://localhost:3000/Main/Table"}
					className="flex items-center justify-center space-x-2 h-14 rounded-lg hover:bg-white hover:text-[#004085] w-full cursor-pointer">
					<p className="text-2xl">Table</p>
				</Link>
				<Link
					href={"http://localhost:3000/Main/Reservation"}
					className="flex items-center justify-center space-x-2 h-14 rounded-lg hover:bg-white hover:text-[#004085] w-full cursor-pointer">
					<p className="text-2xl ">Réservation</p>
				</Link>
				<Link
					href={"http://localhost:3000/Main/Commande"}
					className="flex items-center justify-center space-x-2 h-14 rounded-lg hover:bg-white hover:text-[#004085] w-full cursor-pointer">
					<p className="text-2xl">Commande</p>
				</Link>
			</div>
			<div className="flex-1 ml-[300px] p-4 z-0">{children}</div>
			<Toaster />
		</div>
	);
}
