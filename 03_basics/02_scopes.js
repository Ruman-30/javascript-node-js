//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ruman"
    function two(){
        const website = "youtube"
        // console.log(`${username} is using ${website}`)
    }
    // console.log(website)
    two()
}
one()
// console.log(username)
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

const addone = function(num){
    console.log(num + 1)
}
addone(5)

function addtwo(num){
    console.log(num + 2)
}
addtwo(9)