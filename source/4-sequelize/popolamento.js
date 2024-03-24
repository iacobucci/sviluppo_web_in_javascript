import { sequelize } from './model/index.js';
import { Condominio } from './model/Condominio.js';
import { Pagamento } from './model/Pagamento.js';
import { Residente } from './model/Residente.js';
import { ResidentiCondomini } from './model/ResidentiCondomini.js';


async function main() {

	let vs = await Condominio.create({ via: "Vicolo Stretto" });
	let bgs = await Condominio.create({ via: "Bastioni Gran Sasso" });
	let pdd = await Condominio.create({ via: "Parco della Vittoria" });


	let mr = await Residente.create({ nome: "Mario", cognome: "Rossi" });
	await vs.addResidente(mr);

	// console.log(await vs.getResidentes());
	// console.log(await r.getCondominios());

	let lv = await Residente.create({ nome: "Luigi", cognome: "Verdi" });
	await vs.addResidente(lv);

	let gb = await Residente.create({ nome: "Giovanni", cognome: "Bianchi" });
	await bgs.addResidente(gb);

	let pn = await Residente.create({ nome: "Paolo", cognome: "Neri" });
	await bgs.addResidente(pn);

	let gg = await Residente.create({ nome: "Giuseppe", cognome: "Gialli" });
	await pdd.addResidente(gg);


	let p1 = await Pagamento.create({ importo: 100, versato: 0 });
	p1.setResidente(mr);

	let p2 = await Pagamento.create({ importo: 200, versato: 0 });
	p2.setResidente(mr);

	let p3 = await Pagamento.create({ importo: 100, versato: 0 });
	p3.setResidente(lv);

	let p4 = await Pagamento.create({ importo: 200, versato: 0 });
	p4.setResidente(lv);

	let p5 = await Pagamento.create({ importo: 100, versato: 0 });
	p5.setResidente(gb);

	let p6 = await Pagamento.create({ importo: 200, versato: 0 });
	p6.setResidente(gb);

	let p7 = await Pagamento.create({ importo: 100, versato: 0 });
	p7.setResidente(pn);

	let p8 = await Pagamento.create({ importo: 200, versato: 0 });
	p8.setResidente(pn);

	let p9 = await Pagamento.create({ importo: 100, versato: 0 });
	p9.setResidente(gg);

	let p10 = await Pagamento.create({ importo: 200, versato: 0 });
	p10.setResidente(gg);
}

sequelize.sync().then(async () => {
	await main()
});
