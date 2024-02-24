// singleton
//Object.create

// object literals

const mySym = Symbol("key1")
const myobj = {
    name: "Ruman",
    "full name": "ruman khan",
    [mySym]: "myKey1",
    age: 24,
    email: "ruman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
    
}
// console.log(myobj);
// Object.freeze(myobj)
// myobj.email = "khan@google.com"
// myobj.email = "khan@chatgpt.com"
// console.log(myobj.email);
// console.log(myobj[mySym])

myobj.greeting = function(){
    console.log("hello myobj");
}
console.log(myobj.greeting());

myobj.greetingTwo = function(){
    console.log(`hello myobj my name is ${this.name} and my email is ${this.email}`)
}
console.log(myobj.greetingTwo());