const myNum = [1, 2, 3];

// const myTotal = myNum.reduce((acc, currval) => {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// const myTotal = myNum.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingcart = [
  { itemName: "js", price: 2999 },
  { itemName: "data science", price: 5999 },
  { itemName: "python", price: 6999 },
  { itemName: "dsa", price: 3999 },
];

const total = shoppingcart.reduce((acc, curr) => acc + curr.price, 0);

console.log(total);
