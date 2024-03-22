// funzione che prende una callback (che prende una callback) e la esegue.

function f1(callback1, callback2) {
	console.log("f1")
	callback1(callback2)
}

function f2(callback) {
	console.log("f2")
	callback()
}

function f3() {
	console.log("f3")
}

f1(f2, f3)


// funzione che ritorna una promise che 

function p1() {
	return new Promise((resolve, reject) => {
		resolve(
			new Promise((resolve, reject) => {
				resolve("p1")
			}));
	})
}

p1().then((result) => {
	console.log(result)
});


async function a1() {
	return new Promise((resolve, reject) => {
		resolve("a1");
	})
}

async function main() {
	let result1 = await a1();
	console.log(result1);
}

main();