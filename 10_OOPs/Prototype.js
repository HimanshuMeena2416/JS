// // let myName = "Himz    ";

// // console.log(myName.truelength()); //ye hai nhi banakr inject krna hai taki sari strings ke sath use kr sku

// let myPlayers = ["Sachin", "Dhoni"];

// let playerRole = {
//   Sachin: "anchor",
//   Dhoni: "hitter",

//   getDhoniRole: function () {
//     console.log(`Mahi is ${this.Dhoni}`);
//   },
// };

// Object.prototype.himz = function () {
//   console.log(`Himz is omnipresent`);
// }; //humne himz naam ka function banakr object me inject kr diya taki sbhi use kr ske ise kyuki sbhi object hi toh hote hai

// playerRole.himz();

// myPlayers.himz();

// Array.prototype.hibuddy = function () {
//   console.log(`testing...Array k lie banaya hai`);
// }; //inject function in all arrays to check wether it be be automatically injected to objects

// //inheritance
// //old approach
// const User = {
//   name: "himz",
//   email: "123@gmail.com",
// };
// const Teacher = {
//   makevideo: true,
// };

// const TeachingSupport = {
//   isavailable: false,
// };

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: ture,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User;

// //modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherString = "Himzscorpion   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};//string me naya function add kr lia

anotherString.trueLength();

"karan kaur".trueLength();
