import http from 'http' // importiamo il modulo http

const server = http.createServer(); // creiamo il server

server.on('request', (req, res) => { // gestiamo le richieste
	res.end('<html><div style="color: red;">Hello, world!</div></html>');
})

server.listen(3000); // mettiamo in ascolto il server sulla porta 3000
