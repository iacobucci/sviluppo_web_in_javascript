import express from 'express';
import path from 'path';

const app = express();

// esempio di model

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'public');

app.use(express.static(pub));

app.get('/api/hello', (req, res) => {
	setTimeout(() => {
		res.json({ ello: "world1", from: "post" })
	}, 1000); // simuliamo un ritardo di 1 secondo
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server in ascolto a http://localhost:' + port);
});
