// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// const userEmail = []

// if (userEmail.length === 0 ) {
//     console.log("empty array");
// }
// const userEmail = {}

// if (Object.keys(userEmail).length === 0 ) {
//     console.log("empty object");
// }

// Nullish Coelescing Operator (??): null undifined

let val1;
// val1 = 10 ?? 20
// val1 = null ?? 10
// val1 = undefined ?? 30
// val1 = null ?? undefined ?? 10
// val1 = null ?? 5 ?? 10


console.log(val1);

// Terniary Operator

// conditiion ? true : false 
const hotCoffee = 120
hotCoffee <= 80 ? console.log("coffee price is less than 80") : console.log("coffee price is more than 80");