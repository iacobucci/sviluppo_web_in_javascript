import express from 'express';
import path from 'path';

const app = express();

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'public');

app.use(express.static(pub));

import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


import { Sequelize, Op } from 'sequelize';
import { sequelize } from './model/index.js';
import { Condominio } from './model/Condominio.js';
import { Pagamento } from './model/Pagamento.js';
import { Residente } from './model/Residente.js';
import { ResidentiCondomini } from './model/ResidentiCondomini.js';

app.post('/api/listcondomini', async (req, res) => {
	let condominios = await Condominio.findAll();
	res.json(condominios);
});


app.post('/api/listresidenti', async (req, res) => {
	let { idCondominio } = req.body;
	let condominio = await Condominio.findByPk(idCondominio);
	let residentiDelCondominio = await condominio.getResidentes();
	res.json(residentiDelCondominio);
});

app.post('/api/listpagamenti', async (req, res) => {
	let { idResidente } = req.body;

	const daVersare = await Pagamento.findAll({
		where: {
			idResidente: idResidente,
			versato: 
				{ [Op.lt]: Sequelize.literal('importo') }
		}
	});

	const versati = await Pagamento.findAll({
		where: {
			idResidente: idResidente,
			versato:
				{ [Op.gte]: Sequelize.literal('importo') }
		},
	});

	console.log(daVersare, versati);

	res.json({ daVersare, versati });
});

app.post('/api/versapagamento', async (req, res) => {
	let { idPagamento, versamento } = req.body;
	let pagamento = await Pagamento.findByPk(idPagamento);

	if (!pagamento) {
		res.json({ error: "Pagamento non trovato" });
		return;
	}

	if (versamento <= pagamento.importo - pagamento.versato) {
		pagamento.versato += parseInt(versamento);
		try {
			await pagamento.save();
			res.json(pagamento);
		}
		catch (err) {
			res.json({ error: "Errore nel salvataggio" });
		}
	}
	else {
		res.json({ error: "Versamento troppo alto" });
	}
});

const port = process.env.PORT || 3000;



sequelize.sync().then(async () => {

	console.log('Database synced');

	app.listen(port, () => {
		console.log('Server is listening on port ' + port);
	});

}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
