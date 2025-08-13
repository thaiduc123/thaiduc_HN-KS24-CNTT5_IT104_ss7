class Account {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;
  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.isLogin = false;
  }
login(password: string): void {
    if (password === this.password) {
      this.isLogin = true;
      console.log(`Dang nhap thanh cong`);
    } else {
      console.log("Dang nhap ko thanh cong");
    }
  }

logout(): void {
    if (this.isLogin) {
      this.isLogin = false;
      console.log("Dang xuat thanh cong");
    }
  }
}
class userAcc extends Account {
status: string;
  constructor(
    id: string,
    userName: string,
    password: string,
    role: string,
    status: string
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  public login(password: string): void {
    if (this.status === "banned") {
      console.log(`Tai khoan da bi khoa`);
      return;
    }
    super.login(password);
  }
}
class adminAcc extends Account {
   banUser(user: userAcc): void {
    user.status = "banned";
    console.log(`Nguoi dung da bi khoa`);
  }
}
const user1 = new userAcc("U001", "thanh", "123456", "user", "active");
const admin1 = new adminAcc("A001", "admin", "admin123", "admin");
console.log("== Trước khi ban ==");
user1.login("123456");
console.log("\n== Admin ban user ==");
admin1.banUser(user1);
console.log("\n== Sau khi ban ==");
user1.login("123456");
