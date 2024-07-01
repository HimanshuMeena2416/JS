//rare syntax....

const User = {
  _email: "11@gm.com",
  _password: "abc",

  get emailll() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const obj = Object.create(User);
console.log(obj.emailll);
console.log(obj._email);
