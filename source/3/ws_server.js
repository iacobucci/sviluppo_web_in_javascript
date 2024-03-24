import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import { WebSocketServer } from 'ws';

// stesso funzionamento per il server express

const app = express();

app.use(bodyParser.json());

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
let pub = path.join(__dirname, 'public');
app.use(express.static(pub));

const port = process.env.PORT || 3000;

app.post("/hello", (req, res) => {
	console.log(req.body)
	res.json({ hello: "world", from: "post" });
});

// server websockets

let server = http.createServer(app);

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
	ws.on('message', function message(data) {
		console.log(JSON.parse(data));
		ws.send(JSON.stringify({ hello: "world", from: "ws" }));
	});
});

// non usare app.listen ma server.listen

server.listen(port, () => {
	console.log('Server in ascolto a http://localhost:' + port);
});

// Chiudi tutte le connessioni attive prima di terminare il processo
process.on('SIGINT', function () {
	console.log('Terminazione del processo...');
	wss.clients.forEach(function each(client) {
		client.terminate();
	});
	process.exit();
});

