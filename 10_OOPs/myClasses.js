class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const user1 = new User("ramesh", "333@gmail.com", 1122333);

console.log(user1.encryptPassword());
