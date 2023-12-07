class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name} eats.`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	bark() {
		console.log(`${this.name} barks.`);
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	meow() {
		console.log(`${this.name} meows.`);
	}
}

const dog = new Dog('Spike');
const cat = new Cat('Romeo');

dog.eat();
cat.eat();

dog.bark();
cat.bark();
