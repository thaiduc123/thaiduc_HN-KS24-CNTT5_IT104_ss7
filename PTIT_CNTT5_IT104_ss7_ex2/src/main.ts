class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;
  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  slowDown(n: number): void {
    this.speed -= n;
  }
  speedUp(n: number): void {
    this.speed += n;
  }
  showSpeed(): void {
    console.log(`Speed: ${this.speed}`);
  }
}
class Bicycle extends Vehicle {
  private gear: number;
  constructor(name: string, speed: number, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  showInfo(): void {
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