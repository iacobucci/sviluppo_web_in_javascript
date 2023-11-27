if (age < 16)   { console.log("You can't drive"); }
else if (age < 21)   { console.log("You can drive but you can't Drink"); }
else   { console.log("You can drink and drive (don't)"); }
let canDrive = (age >= 16); let canDrink = (age >= 21); let canDriveCantDrink = canDrive && !canDrink;

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

let line;
for (let x = 0; x < 10; x++) { // assegnamento, condizione di ciclo, istruzione a fine ciclo
	line = ""
	for (let y = 0; y < 10; y++) {
		linea += (x * y) + " ";
	}
	console.log(line); 
} 