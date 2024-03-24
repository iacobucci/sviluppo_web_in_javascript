import express from 'express';
import path from 'path';

const app = express();

// esempio di model

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'public');

app.use(express.static(pub));

app.post('/api/hello1', (req, res) => {
	setTimeout(() => {
		res.json({ hello: "world1", from: "post" })
	}, 1000); // simuliamo un ritardo di 1 secondo
});

app.post('/api/hello2', (req, res) => {
	setTimeout(() => {
		let obj = { via: "Vicolo Corto", residenti: [{ nome: "Mario", cognome: "Rossi" }] };
		res.json(obj);
	}, 1000);
});

app.post("/condominio", (req, res) => { 
	let condominio = { via: "Vicolo Corto", residenti: [{ nome: "Mario", cognome: "Rossi" }] };
	res.json(condominio);
});

import bodyParser from 'body-parser';

app.use(bodyParser.json());

app.post("/condominio_by_via", (req, res) => { 
	if (req.body.via)
		res.json({ via: req.body.via, residenti: [{ nome: "Mario", cognome: "Rossi" }] });
	else
		res.status(400).json({ error: "Via mancante" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server in ascolto a http://localhost:' + port);
});