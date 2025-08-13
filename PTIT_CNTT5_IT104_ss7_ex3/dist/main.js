"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Ten: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Gau gau");
    }
}
let myCat = new Cat("Tom");
let myDog = new Dog("Spike");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
//# sourceMappingURL=main.js.map