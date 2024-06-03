//this refer to current context

const user = {
  username: "Himz",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    // console.log(this);
  },
};

// user.welcomeMessage();

// user.username = "ramesh";
// user.welcomeMessage();

// console.log(this); // it will give empty object {} here. but in browser we will get windows as window is global object in browser

// function chai() {
//   let username = "himz";
//   console.log(this); //bahut sari value dega
//   console.log(this.username); // functions me this nhi kaam krta for accessing variables. sirf object me aise kaam krta
// }
// chai();

// const chai = function () {
//   let username = "himz";
//   console.log(this); //bahut sari value dega
//   console.log(this.username); // functions me this nhi kaam krta for accessing variables. sirf object me aise kaam krta
// };

// chai();

// const chai = () => {
//   let username = "raj";
//   console.log(this);
//   console.log(this.username);
// };
// chai();

//+++++++++++++++Arrow function++++++++++++++++

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2; //aise bhi run krega
const addTwo = (num1, num2) => ({ username: "raj" }); //object return krne k lie () lagane pdte hai
console.log(addTwo(3, 5));
