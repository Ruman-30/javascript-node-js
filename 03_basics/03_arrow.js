const user = {
    username: "ruman",
    email: "ruman@google.com",
    welcomeMessage: function(){
      // console.log(`${this.username}, welcome to google your email is ${this.email}`);
      // console.log(this);      
    }
}
// Object.freeze(user)
user.welcomeMessage()
user.username = "hitesh"
user.welcomeMessage()
// console.log(this);

// function chai(){
//   let biscuit = "parle G"
//   console.log(this)
// }
// chai()
// const chai = function(){
//   let biscuit = "parle G"
//   console.log(this.biscuit)
// }
// chai()
// console.log(this)

const chai = ()=> {
  let biscuit = "parle G"
    console.log(this)
}
// chai()

// const addnum = (num1, num2) => num1 + num2
// const addnum = (num1, num2) =>( num1 + num2)
const addnum = (num1, num2) => {
 return num1 + num2
}
// console.log(addnum(3,9));
const addnum1 = (num1, num2) => ({username: "ruman"})
console.log(addnum1(3,9));