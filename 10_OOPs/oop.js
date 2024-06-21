// const user = {
//   username: "Himz",
//   loginCount: 8,
//   signIn: true,

//   getUserdetails: function () {
//     //console.log("Got user details from database");
//     //console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.loginCount);
// user.getUserdetails();
// //console.log(this);

//******Constructor */

function user(username, loginCount, isLoggedIn) {
  this.isLoggedIn = isLoggedIn;
  this.username = username;
  this.loginCount = loginCount;

  this.greeting = function () {
    console.log(`Hi ${this.username}`);
  };
  return this;
}

const userOne = new user("Himz", 10, true);
const userTwo = new user("Scorpion", 101, false);

console.log(userOne);
console.log(userTwo);
userOne.greeting();
