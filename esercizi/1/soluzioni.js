// funzione che restituisce il massimo tra due numeri
function max2(a, b) { 
	if (a > b) {
		return a;
	}
	else {
		return b;
	}
}

// funzione che restituisce il massimo tra tre numeri, provare ad usare la funzione max2
function max3(a, b, c) { 
	return max2(max2(a, b), c);
}