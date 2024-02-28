const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const myNums = myNumbers.map((num)=>{
//     return num + 10
// })
// console.log(myNums);

const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr
                .map((nums)=> nums * 10 )
                .map((nums)=> nums + 1 )
                .filter((nums)=> nums >= 40)
console.log(newArr);

