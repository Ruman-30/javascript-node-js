// Immediately Invoked Functions Expressions (IIFE)

(function chai(){
    console.log("DB connected");
})();

(chai = (name)=> {
    console.log(`DB connected two ${name}`);
})("ruman")