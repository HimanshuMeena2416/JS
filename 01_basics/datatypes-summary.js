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


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) mai copy milti hai ,heap(non primitive) mai original rference milta

let name1="Himz"
let name2=name1
name2="karan"

console.log(name1);
console.log(name2);

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user1

user2.email="abc@gmail.com"

console.log(user1.email);
console.log(user2.email);