let date = new Date()
// console.log(date.toString())
// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(date.toUTCString())

date.toLocaleString('default', {
    weekday: "long",
})
// console.log(date)

const createdDate = new Date(2023, 0, 8, 14, 34)
// console.log(createdDate.toLocaleString())
const myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000))