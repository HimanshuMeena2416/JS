const naam = "Himz";
const repoCount = 50;
// console.log(naam + repoCount + "Value"); //old faishened

// //in modern time we use backticks `` . kon baar baar + lagaye

console.log(`Hello my name is ${naam} and my count is ${repoCount}`);

const gameName = new String("Forfdsfza"); //2nd way to declare strings. Isme bahut sare functions mil jayenge. 1st vale me nhi milenge

// console.log(name.__proto__);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("r"));

// console.log(gameName.substring(0, 4)); //0123 ye aayenge 4th nhi aayga

// console.log(gameName.slice(-3)); //last 3 characters

const newString1 = "  karrrran  ";
console.log(newString1);
console.log(newString1.trim()); //removes trailing and leading whitespaces

const url = "https://himz.com/himz%11scorpion";
console.log(url.replace("%11", "-"));
console.log(url.includes("scorpion"));
console.log(url.includes("car"));

const data = "ram,karan,vivek,prakash";
const data_names = data.split(","); // , ke basis pr split krke array mil gya
console.log(data_names);
