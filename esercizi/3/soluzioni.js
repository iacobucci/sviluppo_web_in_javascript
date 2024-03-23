function sleep(t) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve("sleep " + t); }, t);
	})
};

function fail(t) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { reject("fail " + t); }, t);
	})
};

function firstFail () {
	sleep(300).then((result) => {
		console.log(result);
		return sleep(200);
	}).then((result) => {
		console.log(result);
		return fail(100);
	}).then((result) => {
		console.log(result);
		return sleep(200);
	}).catch((reason) => {
		console.log(reason);
	});
}


async function main() {
	try {
		let result = await sleep(300) + " ";
		result += await sleep(200);
		return result;
	} catch (reason) {
		console.log(reason);
	}
}

main().then((result) => {
	console.log(result);
});