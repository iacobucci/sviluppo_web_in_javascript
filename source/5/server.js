import express from 'express';
import path from 'path';


const app = express();

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'dist', 'index.html');
console.log(pub);

app.use((req, res, next) => {
	if (req.url.startsWith('/api')) {
		next();
		return;
	}
	if (req.url.startsWith('/js') || req.url.startsWith('/css') || req.url === '/favicon.ico') {
		res.sendFile(path.join(__dirname, "dist", req.url));
	}
	else {
		res.sendFile(path.join(__dirname, "dist", "index.html"));
	}
});

import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


import { Sequelize, Op } from 'sequelize';
import { sequelize } from './model/index.js';
import { Condominio } from './model/Condominio.js';
import { Pagamento } from './model/Pagamento.js';
import { Residente } from './model/Residente.js';
import { User } from './model/User.js';
import { ResidentiCondomini } from './model/ResidentiCondomini.js';

import authMiddleware from './middleware/auth.js';

app.post('/api/listusers', authMiddleware, async (req, res) => {

	if (!req.user.admin) {
		res.json({ error: "Non sei admin" });
		return;
	}

	let users = await User.findAll({where: {admin: false}});
	users = users.map(u => {
		return { id: u.id, email: u.email, admin: u.admin };
	});
	res.json(users);
});

app.post('/api/getresidente', authMiddleware, async (req, res) => {
	
	if (req.user.admin) {
		res.json({ error: "Gli admin non sono residenti" });
		return;
	}

	let residente = await req.user.getResidente()
	if (!residente) {
		res.json({ error: "Non sei residente, contatta l'amministratore" });
		return;
	}

	res.json(residente);
});

app.post('/api/listcondomini', authMiddleware, async (req, res) => {
	let condominios;

	if (!req.user.admin) {
		let residente = await req.user.getResidente();
		condominios = await residente.getCondominios();
	}
	else {
		condominios = await Condominio.findAll();
	}

	res.json(condominios);
});


app.post('/api/listresidenti', authMiddleware, async (req, res) => {

	if (!req.user.admin) {
		res.json({ error: "Non sei admin" });
		return;
	}

	let { idCondominio } = req.body;

	let residenti
	if (idCondominio == undefined) {
		let residenti = await Residente.findAll();
	}
	else {
		let condominio = await Condominio.findByPk(idCondominio);
		residenti = await condominio.getResidentes();
	}
	res.json(residenti);
});

app.post('/api/listpagamenti', authMiddleware, async (req, res) => {


	let { idResidente } = req.body;

	let residente = await req.user.getResidente();

	if (!req.user.admin) {
		if (idResidente != residente.id) {
			res.json({ error: "Non hai i permessi per questa lista" });
			return;
		}
	}

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

	res.json({ daVersare, versati });
});

app.post('/api/versapagamento', authMiddleware, async (req, res) => {

	if (!req.user.admin) {
		res.json({ error: "Non sei admin" });
		return;
	}

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


import dotenv from 'dotenv';
dotenv.config();

import jwt from "jsonwebtoken";

app.post('/api/registrazione', async (req, res) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ where: { email: email } });
		if (existingUser) {
			res.json({ error: 'Utente già esistente' });
			return;
		}

		const newUser = await User.create({
			email: email,
			password: password,
		});

		const token = jwt.sign(
			{ user: { id: newUser.id } },
			process.env.JWT_SECRET
		);

		res.json({ token: token, admin: newUser.admin, email: newUser.email });
	}
	catch (error) {
		console.log(error);
		res.json({ error: 'Errore' });
	}
});

app.post('/api/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ where: { email: email } });

		if (!existingUser) {
			res.json({ error: 'Utente non esistente' });
			return;
		}

		if (existingUser.password !== password) {
			res.json({ error: 'Password non valida' });
			return;
		}

		const token = jwt.sign(
			{ user: { id: existingUser.id } },
			process.env.JWT_SECRET
		);

		res.json({ token: token, admin: existingUser.admin, email: existingUser.email });
	}
	catch (error) {
		console.log(error)
		res.json({ error: 'Errore' });
	}
});

app.post('/api/whoami', authMiddleware, async (req, res) => {
	res.json({ email: req.user.email, admin: req.user.admin });
});


sequelize.sync().then(async () => {

	console.log('Database synced');

	app.listen(port, () => {
		console.log('Server is listening on port ' + port);
	});

}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
