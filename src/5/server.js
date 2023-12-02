const path = require("path");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite'
});

const userModel = require('./models/user');
const User = userModel(sequelize, DataTypes);

const authMiddleware = require('./middleware/auth');
const jwt = require('jsonwebtoken');


// Route principale che restituisce l'index.html per qualsiasi percorso, tranne quelli che iniziano con /api o /js o /css o /favicon.ico
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

// con body-parser si ottengono i dati inviati dal client nel body della richiesta, e vengono messi in req.body come proprietà. req.body all'inizio è {}.
app.post('/api/echo', (req, res) => {
	const {username, password} = req.body;
	res.json( {username, password} );
});

app.post('/api/register', async (req, res) => {
	try {
		const { username, password } = req.body;

		const existingUser = await User.findOne({ where: { username: username } });
		if (existingUser) {
			return res.status(400).json({ msg: 'L\'utente esiste già' });
		}

		const newUser = await User.create({
			username: username,
			password: password,
		});

		const token = jwt.sign(
			{ user: { id: newUser.id } },
			'your-secret-key',
			{ expiresIn: "1h" }
		);

		res.status(201).json({ token: token});
	}
	catch (error) {
		res.status(500).json({ msg: 'Errore' });
	}
});

app.post('/api/login', async (req, res) => {
	try {
		const { username, password } = req.body;

		const existingUser = await User.findOne({ where: { username: username } });
		if (!existingUser) {
			return res.status(400).json({ msg: 'L\'utente non esiste' });
		}

		if (existingUser.password !== password) {
			return res.status(400).json({ msg: 'Password non valida' });
		}

		const token = jwt.sign(
			{ user: { id: existingUser.id } },
			'your-secret-key',
			{ expiresIn: "1h" }
		);

		res.json({ token: token });
	}
	catch (error) {
		res.status(500).json({ msg: 'Errore' });
	}
});

// il middleware del jwt verifica che il token sia valido e mette in req un oggetto user che ha come proprietà l'id dell'utente
app.post('/api/whoami', authMiddleware, async (req, res) => {

	const user = await User.findOne({ where: { id: req.user.id } });

	if (!user) {
		return res.status(400).json({ msg: 'L\'utente non esiste' });
	}

	res.json({ username: req.user.username });
});

app.post("/api/listall", async (req, res) => {
	const users = await User.findAll();
	res.json(users);
});


sequelize.sync().then(async () => {
	console.log("database synced");

	const port = process.env.PORT || '8080';
	app.listen(port, () => {
		console.log(`server running http://localhost:${port}`);
	});
});