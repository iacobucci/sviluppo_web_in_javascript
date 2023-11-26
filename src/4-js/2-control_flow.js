let line;
for (let x = 0; x < 10; x++) { // assegnamento, condizione di ciclo, istruzione a fine ciclo
	line = ""
	for (let y = 0; y < 10; y++) {
		line += (x * y) + " ";
	}
	console.log(line); 
} 