const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc,  currval)=> acc + currval, 0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "javaScript Course",
        cost: 2999
    },
    {
        itemName: " python Course",
        cost: 999
    },
    {
        itemName: " full stack web dev Course",
        cost: 12999
    },
    {
        itemName: "data science Course",
        cost: 14999
    },
]

const CartTotal = shoppingCart.reduce((acc, item)=> acc + item.cost, 0)
console.log(CartTotal);


