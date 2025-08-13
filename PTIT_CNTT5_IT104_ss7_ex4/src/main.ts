abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo(): void {
    console.log(`Ten: ${this.name}`);
  }
}

class Student extends Person {
    id: string;
    constructor(name: string, id: string){
        super(name);
        this.id=id;
    }
    displayInfo(): void {
        console.log(`Ten hoc sinh: ${this.name}\n ID: ${this.id}`);
    }
}
class Teacher extends Person {
    subject: string;
    constructor(name: string, subject: string){
        super(name);
        this.subject=subject;
    }
    displayInfo(): void {
        console.log(`Ten giao vien: ${this.name}\n Mon hoc: ${this.subject}`);
    }
}

let s = new Student("A", "B24DTCN001");
let t = new Teacher("B", "Toan");
s.displayInfo();
t.displayInfo();