// // Math.PI=7
// // console.log(Math.PI);
// //m

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);//yaha se pata chla ki kuch aisi chize bhi hai jo change nhi ho skti

const Course = {
  name: "Python",
  price: 2999,
  isAvailable: true,

  buyCourse() {
    console.log("nhi order hoga");
  },
};

console.log(Object.getOwnPropertyDescriptor(Course, "price")); //course me price ki property

// Object.defineProperty(Course, "price", {
//   writable: false,
//   enumerable: false,
// });

console.log(Object.getOwnPropertyDescriptor(Course, "price"));

for (let [key, value] of Object.entries(Course)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
