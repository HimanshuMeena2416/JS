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

console.log(loginUserMessage("Himz"));
console.log(loginUserMessage());
