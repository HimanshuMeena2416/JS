// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// function addTwoNumbers(number1, number2) {
//   return number1 + number2;
//   console.log("hi"); //return ke baad ka kbhi run nhi hoga
// }

// addTwoNumbers(5, 4); //9
// addTwoNumbers(5, "4"); //54
// addTwoNumbers(5, "b"); //5b

// let result = addTwoNumbers(47, 53);
// console.log(result);

function loginUserMessage(username = "raj") {
  if (username === undefined) {
    console.log("please enetr a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Himz"));
// console.log(loginUserMessage());

// function calculateCartPrice(num1) {
//   return num1;
// }
// console.log(calculateCartPrice(800, 300, 400)); //it will give 800 but we want all three

// function calculateCartPrice(...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(800, 300, 400, 450, 440));// output an array with all values

// function calculateCartPrice(num2, num3, ...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(800, 300, 400, 450, 440)); // output [400,450,440] because yhi hai num1 mai

const user = {
  username: "himz",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "raj",
  price: 299,
}); //object can be passed directly

const myNewArray = [200, 400, 500, 99];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([345, 55, 643, 56]));
