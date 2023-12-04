export let condomini = [
	{ id: "cond1", via: "Vicolo Stretto" },
	{ id: "cond2", via: "Bastioni Gran Sasso" },
	{ id: "cond3", via: "Parco della Vittoria" }
];

export let residenti = [
	{ id: "res1", nome: "Mario", cognome: "Rossi", idCondominio: "cond1" },
	{ id: "res2", nome: "Luigi", cognome: "Verdi", idCondominio: "cond1" },
	{ id: "res3", nome: "Giovanni", cognome: "Bianchi", idCondominio: "cond2" },
	{ id: "res4", nome: "Paolo", cognome: "Neri", idCondominio: "cond2" },
	{ id: "res5", nome: "Giuseppe", cognome: "Gialli", idCondominio: "cond3" }
];

export let pagamenti = [
	{ id: "pag1", importo: 100, versato: 0, idResidente: "res1" },
	{ id: "pag2", importo: 100, versato: 0, idResidente: "res1" },
	{ id: "pag3", importo: 100, versato: 0, idResidente: "res2" },
	{ id: "pag4", importo: 100, versato: 0, idResidente: "res2" },
	{ id: "pag5", importo: 100, versato: 0, idResidente: "res3" },
	{ id: "pag6", importo: 100, versato: 0, idResidente: "res3" },
	{ id: "pag7", importo: 100, versato: 0, idResidente: "res4" },
	{ id: "pag8", importo: 100, versato: 0, idResidente: "res4" },
	{ id: "pag9", importo: 100, versato: 0, idResidente: "res5" },
	{ id: "pag10", importo: 100, versato: 0, idResidente: "res5" }
];