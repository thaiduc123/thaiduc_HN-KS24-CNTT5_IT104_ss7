"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ten hoc sinh: ${this.name}\n ID: ${this.id}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Ten giao vien: ${this.name}\n Mon hoc: ${this.subject}`);
    }
}
let s = new Student("A", "B24DTCN001");
let t = new Teacher("B", "Toan");
s.displayInfo();
t.displayInfo();
//# sourceMappingURL=main.js.map