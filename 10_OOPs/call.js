function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createuser(username, email, password) {
  SetUsername.call(this, username); //mere vale this me set krna username kyuki tum toh ud jaoge
  this.email = email;
  this.password = password;
}

const user = new createuser("ramesh", "123@gmail.com", 122333);

console.log(user);
