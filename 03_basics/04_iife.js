//immediately invoked function expresssions

//(func definition)() aise likhte hai

// (function DB1() {
//   console.log(`DB CONNECTED`);
// })();

// (() => {
//   console.log(`DB2 CONNECTED`);
// })();

((name) => {
  console.log(`${name} CONNECTED`);
})("karan");
