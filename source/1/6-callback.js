function differenza(a, b){
	return a - b;
}

function operazione(a, b, callback) {
	return callback(a, b);
}

let x = operazione(1, 2, differenza);

let y = operazione(1, 2, function(a, b) {
	return a * b; // prodotto
});

let z = operazione(1, 2, (a,b) => a / b) // divisione

console.log(x); // -1

console.log(y); // 2

console.log(z); // 0.5