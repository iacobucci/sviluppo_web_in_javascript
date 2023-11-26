let x; // dichiarazione di una variabile, inizialmente è **undefined**
let greeting = "Hello, world!"; // dichiarazione e inizializzazione, tipo stringa
let name = 'John' // tipo stringa, anche con singoli apici

let rad = 2; let pi = 3.1415 // tipo number, più istruzioni in linea
let isJsAwesome = true // tipo boolean (true o false), camelCase
let nullVariable = null // null

let greet_name = name + ", " + greeting; // concatenazione di stringhe
let degrees = 360 / (2 * pi) * rad /* operazioni aritmetiche, precedenza, 
commento multi linea */
let nan = 1/0 - 1/0 // Infinity - Infinity = NaN (Not a Number)
let isJsDull = !isJsAwesome; // negazione booleana, and: &&, or: ||

const PI = 3.1415; // costante, case sensitivity
x = 1; x = "1" // assegnamento, tipo dinamico, x è stata gia dichiarata e può essere riassegnata
PI = 4 // TypeError
x = PI % 1 // modulo, parte frazionaria, perdita di precisione, 0.14150000000000018 
