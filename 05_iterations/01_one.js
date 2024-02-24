// for loop

for (var i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // console.log("5 is the best number");
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    //  console.log(`outer loop value: ${i}`);
    for (let r = 1; r <= 10; r++) {
    //  console.log(`inner loop value: ${r} outer loop ${i}`);
    //console.log(i + ' * ' + r + ' = ' + i*r);
   }    
}
const myArray = ["ironman", "thor", "spiderman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let i = 0; i < 20; i++) {
//    if (i == 5) {
//     console.log("5 detected");
//    break;
//    }
//    console.log(`value of i is: ${i}`);
// }
for (let i = 0; i < 20; i++) {
   if (i == 5) {
    console.log("5 detected");
   continue;
   }
   console.log(`value of i is: ${i}`);
}
