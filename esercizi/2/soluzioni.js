// funzione che restituisce un nuovo array filtrando gli elementi pari di arr se pari è true, gli elementi dispari altrimenti. utilizza un ciclo for
function filterArray1(arr, pari) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (pari && arr[i] % 2 === 0) {
			result.push(arr[i]);
		} else if (!pari && arr[i] % 2 !== 0) {
			result.push(arr[i]);
		}
	}
}

// funzione che restituisce un nuovo array filtrando gli elementi pari di arr se pari è true, gli elementi dispari altrimenti. utilizza un Array.filter
function filterArray2(arr, pari) {
	return arr.filter(function (el) {
		return pari ? el % 2 === 0 : el % 2 !== 0;
	});
}

// funzione che restituisce un nuovo array con gli elementi di arr moltiplicati per n. utilizza un ciclo for
function multiplyArray1(arr, n) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i] * n);
	}
	return result;
}

// funzione che restituisce un nuovo array con gli elementi di arr moltiplicati per n. utilizza un Array.map
function multiplyArray2(arr, n) {
	return arr.map(function (el) {
		return el * n;
	});
}

let a = [1, 2, 3]
multiplyArray2(a, 2); // [2, 4, 6]
console.log(a)