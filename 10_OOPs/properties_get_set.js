//old method......new method me toh getter setter use krte hai

function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase() + "rrr";
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const obj = new user("111@gmail.com", "abc");

console.log(obj.password);
