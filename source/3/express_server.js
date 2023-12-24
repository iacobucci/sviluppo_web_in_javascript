import express from 'express'; // importiamo il modulo express

const app = express(); // creiamo l'applicazione

app.use(express.static('public')); // serviamo i files statici

app.listen(3000); // mettiamo in ascolto l'applicazione sulla porta 3000
