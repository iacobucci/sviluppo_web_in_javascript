import http from 'http' // importiamo il modulo http

const app = http.createServer(); // creiamo il server

app.on('request', (req, res) => {
	let date = Date();
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><div style="color: red;">Hello, world, it\'s ' + date + '</div></html>')
});

app.listen(3000); // mettiamo in ascolto il server sulla porta 3000
