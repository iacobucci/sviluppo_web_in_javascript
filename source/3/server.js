import express from 'express';
import path from 'path';

const app = express();

// esempio di model

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'public');

app.use(express.static(pub));

app.get('/api/hello', (req, res) => {
	res.json({ hello: "world", from: "get" })
});

app.post('/api/hello', (req, res) => {
	res.json({ hello: "world", from: "post" })
});

app.post('/api/bodyparams', (req, res) => {
	console.log(req.body);
	let { param } = JSON.parse(req.body);
	console.log(param);
});


import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

import { condomini, residenti, pagamenti } from './dati.js';

app.post('/api/listcondomini', (req, res) => {
	res.json(condomini);
});

app.post('/api/listresidenti', (req, res) => {
	let { idCondominio } = req.body;
	let residentiDelCondominio = residenti.filter(r => r.idCondominio == idCondominio);
	res.json(residentiDelCondominio);
});

app.post('/api/listpagamenti', (req, res) => {
	let { idResidente } = req.body;
	let daVersare = pagamenti.filter(p => p.idResidente == idResidente && p.importo > p.versato);
	let versati = pagamenti.filter(p => p.idResidente == idResidente && p.importo <= p.versato);

	res.json({daVersare, versati});
});

app.post('/api/versapagamento', (req, res) => {
	let { idPagamento, versamento } = req.body;
	let pagamento = pagamenti.find(p => p.id == idPagamento);

	if (!pagamento) {
		res.json({error: "Pagamento non trovato"});
		return;
	}

	if (versamento <= pagamento.importo - pagamento.versato) {
		pagamento.versato += parseInt(versamento);
		res.json(pagamento);
	}
	else {
		res.json({error: "Versamento troppo alto"});
	}
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server in ascolto a http://localhost:' + port);
});