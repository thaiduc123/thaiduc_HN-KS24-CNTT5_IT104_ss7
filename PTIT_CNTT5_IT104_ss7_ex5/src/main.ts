class Account {
  public id: string;
  public userName: string;
  private passWord: string;
  public isLogin: boolean;
  public role: string;
  constructor(id: string, userName: string, passWord: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.passWord = passWord;
    this.isLogin = false;
    this.role = role;
  }
  login(userName:string, passWord: string): void {
    if (passWord === this.passWord && userName === this.userName) {
      this.isLogin = true;
      console.log("Da dang nhap");
    } else {
      console.log("Dang nhap khong thanh cong");
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
  status:string;
  constructor(id: string,userName: string,passWord: string,role: string,status: string) {
    super(id, userName, passWord, role,);
    this.status = status;
    this.isLogin = false;
  }
  login(userName: string, passWord: string): void {
      if(this.status === "banned"){
        console.log("Tai khaon da bi khoa");
      }else{
        console.log("Da dang nhap");
      }
  }
}

const user1 = new userAcc("001", "thanh", "123456", "user", "active");
const user2 = new userAcc("002", "hung", "abcdef", "user", "banned");
console.log("== User 1 ==");
user1.login("thanh","123456");
user1.logout();
console.log("== User 2 ==");
user2.login("hung","abcdef");