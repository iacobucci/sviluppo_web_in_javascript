let numero = 11;

let i = 2; let primo = true;
while (true) { 
	if ( i >= numero) {
		break; // esci fuori dal ciclo
	}
	if ( numero % i == 0 ) { // se i resto della divisione è zero
		primo = false;
		break; 
	}
	i++;
} 

console.log("Il numero " + numero + " è primo? " + primo); // Il numero 11 è primo? true