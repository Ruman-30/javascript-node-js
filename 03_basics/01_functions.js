function addsum(num1, num2) {
    let result = num1 + num2
    return result
    // console.log(num1 + num2)
}
const result = addsum(7, 5)
// console.log("Result:",result);

const facebook = function (username = "sam") {
    if (!username) {
        //  console.log("please enter a username");
        return
    }
    return `${username} is logged in`
}
// console.log(facebook("ruman khan"))

const calculateCartPrice = function (val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 5000));

const user = {
    username: "ruman",
    price: 999
}

// function handleObjects(anyobject) {
//  console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
// }


// handleObjects({
//     username: "amaan",
//     price: 899
// })

const myNewArray = [200, 400, 100, 800]

function returnFirstValue (getArray){
  return getArray[1]
}
// console.log(returnFirstValue(myNewArray));
console.log(returnFirstValue([200, 900, 700,, 300]))