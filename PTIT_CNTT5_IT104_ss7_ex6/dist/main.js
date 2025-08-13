"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(password) {
        if (password === this.password) {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        }
        else {
            console.log("Dang nhap ko thanh cong");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log(`Tai khoan da bi khoa`);
            return;
        }
        super.login(password);
    }
}
class adminAcc extends Account {
    banUser(user) {
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
//# sourceMappingURL=main.js.map