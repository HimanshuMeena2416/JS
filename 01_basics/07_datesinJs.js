let myDate = new Date(); //Date is an object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 1, 23); //0 for jan 1 for feb 2 for march
// console.log(myCreatedDate.toDateString());

// let myNewDate = new Date("01-14-2024");
// console.log(myNewDate.toLocaleString());

// let myTimestamp = Date.now(); //give value of milliseconds from 1970
// console.log(myTimestamp);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString("default", {
    timeZone: "Asia/Kolkata",
  })
);
