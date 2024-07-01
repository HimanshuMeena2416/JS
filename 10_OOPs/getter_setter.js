//this class based syntax is used mostly ..95%

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //getter setter sath likhne pdte hai
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const user1 = new User("12@gmail.com", "abc");

console.log(user1.email);
