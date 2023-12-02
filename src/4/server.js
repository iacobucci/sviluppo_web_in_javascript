const express = require("express");
const path = require("path");

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// Route principale che restituisce l'index.html per qualsiasi percorso
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '8080';

app.use(express.static(__dirname + "/dist/"));

app.listen(port, () => {
	console.log(`server running http://localhost:${port}`);
});

app.get("/cane", (req, res) => {
	res.json({ cane: true });
});
