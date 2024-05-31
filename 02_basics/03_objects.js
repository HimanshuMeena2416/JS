//singleton
//Object.create;

//object literals

const mysym = Symbol("key1");
const JsUser = {
  name: "himz",
  "full name": "himz scorpion",
  age: 18,
  [mysym]: "mykey1", //symbol ko aise likhte hai..square brac mai
  location: "udaipur",
  email: "abc@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); //we will not use it
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "xyz@gmail.com"; //aise change kr skte hai values

//Object.freeze(JsUser); //ye freeze ho gya ..ab change nhi kr skte apn isme

JsUser.greeting = function () {
  console.log("hello buddy");
};

JsUser.greeting2 = function () {
  return `hello js user, ${this.name}`;
};

JsUser.greeting();
console.log(JsUser.greeting2());
