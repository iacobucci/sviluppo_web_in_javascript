function somma(a, b) {
	return a + b;
}

let x = 1 + 2 + 3;
let y = somma(somma(1, 2), 3); // chiamata nidificata

console.log(y); // 6

function fattoriale(n) {
	if (n == 0) {
		return 1;
	} else {
		return n * fattoriale(n - 1); //chiamata ricorsiva
	}
}

console.log(fattoriale(5)); // 120