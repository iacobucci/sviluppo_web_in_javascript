---
marp: true
---

<script src="../node_modules/mermaid/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true, theme:"forest", mirrorActors:false});</script>

<link rel="stylesheet" href="res/styles.css">

# Variabili

```javascript
let x; // dichiarazione di una variabile, inizialmente è **undefined**
let greeting = "Hello, world!"; // dichiarazione e inizializzazione, tipo stringa
let name = 'John' // tipo stringa, anche con singoli apici

let rad = 2; let pi = 3.1415 // tipo number, più istruzioni in linea
let isJsAwesome = true // tipo boolean (true o false), camelCase
let nullVariable = null // null

let greet_name = name + ", " + greeting; // concatenazione di stringhe, letterali
let degrees = 360 / (2 * pi) * rad /* operazioni aritmetiche, precedenza, 
commento multi linea */
let nan = 1/0 - 1/0 // Infinity - Infinity = NaN (Not a Number)
let isJsDull = !isJsAwesome; // negazione booleana, and: &&, or: ||

const PI = 3.1415; // costante, case sensitivity
x = 1; x = "1" // assegnamento, tipo dinamico, x è stata gia dichiarata e può essere riassegnata
x = PI % 1 // modulo, parte frazionaria, perdita di precisione, 0.14150000000000018 
try {PI = 4} catch (TypeError) {console.log("You can't set a constant")}
```
Usare `console.log(<nome variabile>)` per stampare il valore di una variabile.

---

# Controllo del flusso

```javascript
if (age < 16)   { console.log("You can't drive"); }
else if (age < 21)   { console.log("You can drive but you can't Drink"); }
else   { console.log("You can drink and drive (don't)"); }
let canDrive = (age >= 16); let canDrink = (age >= 21); let canDriveCantDrink = canDrive && !canDrink;
```

```javascript
let i = 2; let prime = true; let number = 11
while (true) { // condizione di ciclo sempre soddisfatta
	if ( i >= number) {
		break; // esci fuori dal ciclo
	}
	if ( number % i == 0 ) { // se i resto della divisione è zero
		prime = false; break; 
	}
	i = i + 1;
} // ternary operator, 
console.log( (prime) ? (number + " is prime") : (number + " is not prime"))
```

```javascript
let line;
for (let x = 0; x < 10; x++) { // assegnamento, condizione di ciclo, istruzione a fine ciclo
	line = ""
	for (let y = 0; y < 10; y++) {
		linea += (x * y) + " ";
	}
	console.log(line); 
} 
```

---

Funzioni  
Array ed oggetti  
Classi  
Asincronia  
Alcune funzioni accessorie  