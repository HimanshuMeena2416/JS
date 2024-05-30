// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); //changes num to string
// console.log(balance.toFixed(2)); //2 digits after point

// const otherNumer = 123.8966;
// console.log(otherNumer.toPrecision(4)); //precise value of 4 digits..round off krke..string return krega

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN")); //apni country ke accn digits aaygi

//+++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(3, 7, 2, 5));
// console.log(Math.max(3, 7, 2, 5));

//console.log(Math.random()); //random value between 0 and 1
// formula for generation random number
const min = 1;
max = 6;
//Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
