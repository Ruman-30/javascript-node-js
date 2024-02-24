// // if

// if (2 !== "2") {
//     console.log("executed");
// }

// const balance = 1000
// if(balance <= 500){
//  console.log("less than 500");
// }
// else if(balance <= 600){
//  console.log("less than 600");
// }
// else if(balance <= 900){
//     console.log("less than 900");
//    }
// else {
//     console.log("greater than 1000");
// }

const userLoggedInFromEmail = true;
const userLoggedInFromGoogle = true;

// if (userLoggedInFromEmail || userLoggedInFromGoogle) {
//     console.log("logged in successfully");
// }

if (userLoggedInFromEmail && userLoggedInFromGoogle) {
    console.log("logged in successfully");
}