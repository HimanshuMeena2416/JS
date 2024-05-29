//JS is dynamically typed lang i.e we dont need to tell whether it is int or string or...
//Primitive datatypes: call by value
//7 types: String,Number,boolean,null,undefined,symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 34547809866429454n;

// Reference (Non Primitive): call by reference
//Array,Objects,Functions

const heros = ["shaktiman", "nagaraj", "doga"];

let myObj = {
  name: "himz",
  age: 19,
};

const myFunc = function () {
  console.log("hey buddy");
};
