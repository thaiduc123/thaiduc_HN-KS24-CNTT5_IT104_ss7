"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Ten: ${this.name}`);
        console.log(`Cong ti: ${this.company}`);
        console.log(`SDT: ${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`So luong thanh vien: ${this.teamSize}`);
    }
}
let man = new Manager("THD", "THDMN", "039687546", 5);
man.printInfo();
//# sourceMappingURL=main.js.map