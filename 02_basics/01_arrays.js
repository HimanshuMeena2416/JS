//Array
const myArr = [15, 1, 11, 3, 4, 5];
// const myHeroes = ["shaktiman", "naaagraj"];
// const myarr2 = new Array(1, 4, 2, 6, 4);

//array methods
// myArr.push(17);
// myArr.push(99);
// myArr.pop(); //last element uda dega

// myArr.unshift(76); // ek element start(left) se aaya jisse last vale ko udna pada
// myArr.shift(); //first element uda dega

// console.log(myArr.includes(77));
// console.log(myArr.indexOf(17));
// console.log(myArr.indexOf(11));

// const newArr = myArr.join(); //join krke string me convert kr deta hai

// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //index 1 to 2 excluding 3 ko dikhata hai. Main array mai change nhi krta

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); //index 1 to 3 including 3 ko katkar alag hi kr deta hai. Main array mai change aa jata hai

console.log(myn2);
console.log("C", myArr);
