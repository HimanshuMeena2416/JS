class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    //isko koi bhi access nhi kr payga kyuki static bana diya
    return `123`;
  }
}

const user1 = new User("rajat");

//console.log(user1.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user3 = new Teacher("Shraddha", "11@gmail.com");
console.log(user3.createId());
