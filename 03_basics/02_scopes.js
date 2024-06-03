//var c = 300; dont use var
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30; //ye block scope ke bahar nhi aana chahiye tha pr aa gya...islie let use kro
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//   const username = "Himz";
//   function two() {
//     const password = "abc123";
//     console.log(username); //chl jayga kyuki ye uske lie toh gobal hi hua na
//   }
//   //console.log(password); nhi execute hoga kyuki ye sirf fun two ke scope tk tha
//   two();
// }

// one();

// if (true) {
//   const username = "himz";
//   if (username === "himz") {
//     const sirname = "scorpion";
//     console.log(username + sirname);
//   }
//   //console.log(sirname); //nhi chlega kyuki parent child ke variable nhi access kr skte
// }

//console.log(username); //nhi hoga access kyuki ye if tk hi tha uske bahar nhi

//++++++++++++++Interesting+++++++++++++

console.log(addone(7)); //chl jayga
function addone(num) {
  return num + 1;
}

console.log(addtwo(5)); //nhi chalega
const addtwo = function (num) {
  return num + 2;
};
