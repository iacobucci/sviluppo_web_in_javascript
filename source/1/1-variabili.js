let x; // dichiarazione di una variabile, inizialmente è **undefined**
let greeting = "Hello, world!"; // dichiarazione e inizializzazione

let rad = 2; let pi = 3.1415 // tipo number
let nullVariable = null // null

const PI = 3.1415; // costante, case sensitivity

try {
	PI = 4 // TypeError! 
} catch (e) {
	console.log(e.message);
}