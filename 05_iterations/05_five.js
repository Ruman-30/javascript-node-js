const myArray = ["java", "js", "python", "ruby", "cpp"]
// myArray.forEach( (val) => {
//   console.log(val);
// })

// myArray.forEach( function (val) {
//   console.log(val);
// } )
// function printMe(item){
//   console.log(item);
// }

// myArray.forEach(printMe)

myArray.forEach( (item, index, arr)=> {
  // console.log(item, index, arr);
} )

const myCoding = [
  {
  languageName: "javaScript",
  languageFileName: "js"
  },
  {
  languageName: "java",
  languageFileName: "java"
  },
  {
  languageName: "python",
  languageFileName: "py"
  },
]

myCoding.forEach( (item)=> {
  console.log(`${item.languageName} short form is ${item.languageFileName}`);
} )