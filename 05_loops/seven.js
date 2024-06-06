const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumbers = myNumbers.map((num) => num + 10); //map return kr deta hai.for each nhi krta tha

//chaining: method k upr methods
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
