let linea;
let dim = 10;

for (let x = 0; x < dim; x++) { // assegnamento, condizione di ciclo, istruzione a fine ciclo
	linea = ""
	for (let y = 0; y < dim; y++) {
		linea += (x * y) + " ";
	}
	console.log(linea); 
} 
