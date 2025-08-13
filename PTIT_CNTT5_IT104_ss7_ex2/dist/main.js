"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(n) {
        this.speed -= n;
    }
    speedUp(n) {
        this.speed += n;
    }
    showSpeed() {
        console.log(`Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Gear: ${this.gear}`);
    }
}
let bike = new Bicycle("Mountain Bike", 15, "B001", 21);
bike.showSpeed();
bike.speedUp(5);
bike.showSpeed();
bike.slowDown(8);
bike.showSpeed();
console.log("Thông tin:");
bike.showInfo();
//# sourceMappingURL=main.js.map