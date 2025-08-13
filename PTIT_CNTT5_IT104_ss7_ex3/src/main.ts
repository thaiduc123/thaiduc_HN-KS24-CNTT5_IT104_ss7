abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise(): void;
  printName(): void {
    console.log(`Ten: ${this.name}`);
  }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("Meo meo");
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("Gau gau");
    }
}

let myCat = new Cat("Tom");
let myDog = new Dog("Spike");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();