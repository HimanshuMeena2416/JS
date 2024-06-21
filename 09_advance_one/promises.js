// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls
//   //cryptography related,network
//   setTimeout(function () {
//     console.log("Async task completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 resolved");
// });

// const promisethree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "himz", email: "123@gmail.com" });
//   }, 1000);
// });

// promisethree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Himz", password: "122333" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     // console.log(user);
//     return user.username;
//   })
//   .then((myusername) => {
//     console.log(myusername);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("the promise is either resolved or rejected");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "122333" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

//********TRY CATCH FORMAT */

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

//********>then .catch method */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
