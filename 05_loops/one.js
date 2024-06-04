//for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 4; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 0; j <= 4; j++) {
//     console.log(`inner loop: ${j}`);
//   }
// }

//Tables

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}: `);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j}=` + i * j);
//   }
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//   console.log(myArray[index]);
// }

//break: loop ke bahar fek deta hai
//continue : ek baar maaf kr deta. mtlb ek step skip kr deta hai

// for (let i = 1; i <= 20; i++) {
//   if (i === 5) {
//     console.log("5 detected");
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`value of i is ${i}`);
}
