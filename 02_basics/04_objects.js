//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "rajat";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "raj",
      lastname: "skhekhavat",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "d", 4: "b" };
const obj3 = { 5: "l", 6: "h" };

// const obj4 = Object.assign({}, obj1, obj2, obj3); //assign used to merge objects. {} this empty object is target.

const obj4 = { ...obj1, ...obj2, ...obj3 }; //90% case me apn ye use krenge..similar to that in array

// console.log(obj4);

// when we will get data from database it will be array of objects

const users = [
  { id: 101, email: "abc1@gmail.com" },
  { id: 201, email: "abc2@gmail.com" },
  { id: 301, email: "abc3@gmail.com" },
  { id: 401, email: "abc4@gmail.com" },
];

// console.log(users[2].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //aise apn sari keys pata kr lenge.ek array aayga keys ka
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); //har ek key value pair ka subarray banega

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //to check if that given key is present or not in object
