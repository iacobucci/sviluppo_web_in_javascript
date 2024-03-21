import express from 'express'; // importiamo il modulo express

const app = express(); // creiamo l'applicazione

function loggaDataEInviaSaluto(req, res, next) {
	let date = Date();
	console.log("richiesta ricevuta in " + date);
	res.send("Hello, world, it's " + date);
}

function ignoraFavicon(req, res, next) {
	if (req.url == '/favicon.ico') {
		res.end(); // interrompiamo la richiesta
		return;
	}
	next(); // passiamo la richiesta al prossimo middleware
}

app.use(ignoraFavicon);
app.use(loggaDataEInviaSaluto);

app.listen(3000); // mettiamo in ascolto l'applicazione sulla porta 3000