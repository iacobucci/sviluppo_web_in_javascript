function sleepFor(t: number) {
	return new Promise((resolve: (value: string) => void, reject: (reason: string) => void) => {
		setTimeout(() => { resolve("sleep " + t); }, t);
	})
};

function f1(): number | string {
	if (Math.random() > 0.5)
		return 1;
	else
		return "";
}



function f2(n: boolean): number | string {
	if (n)
		return 1;
	else
		return "";
}


typeof (f2(true))
typeof (f2(false))