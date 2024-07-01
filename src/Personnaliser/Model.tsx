export type contenue = {
	idcontenir: number;
	qte: number;
	menu: menu;
};
export type menu = {
	idplat: string;
	nomplat: string;
	pu: number;
};

export type Commande = {
	idcom: string;
	typecom: number;
	datecom: Date;
	contenue: contenue[];
};
export type Reservation = {
	idreserv: string;
	dateDeReserv: Date;
	dateReserve: Date;
	nomcli: string;
	table: Table;
};
export type Table = {
	idtable: string;
	designation: string;
	nbrPlace: number;
};
