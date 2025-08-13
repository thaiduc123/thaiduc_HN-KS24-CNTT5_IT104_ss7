class Employee {
  public name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`Ten: ${this.name}`);
    console.log(`Cong ti: ${this.company}`);
    console.log(`SDT: ${this.phone}`);
  }
}
class Manager extends Employee {
  teamSize: number;
  constructor(name: string, company: string, phone: string, teamSize: number){
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo(): void {
      super.printInfo();
      console.log(`So luong thanh vien: ${this.teamSize}`);
  }
}
let man = new Manager("THD", "THDMN", "039687546", 5);
man.printInfo();