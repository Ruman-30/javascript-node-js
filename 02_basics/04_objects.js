const tinderUsers = {}
tinderUsers.id = "123abc"
tinderUsers.name = "sammy"
tinderUsers.isLoggedIn = false
// console.log(tinderUsers);

const regularUsers = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "ruman",
            lastname: "khan"
        }
    }
}

// console.log(regularUsers.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));
// console.log(tinderUsers.hasOwnProperty("isLogged"));

const user = [
    {
     id: 1,    
     email: "mygoogle.com"
    },
    {
        id: 1,    
        email: "mygoogle.com"
       },
       {
        id: 1,    
        email: "mygoogle.com"
       },
]

// console.log(user[1].id)

const course = {
    courename: "js in hindi",
    courefee: "$90",
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = course 
console.log(instructor);