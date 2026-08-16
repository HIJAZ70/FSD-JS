// function
// function sayHello ()//<- parameter
//  {
//     // LOGIC.............
//     console.log("hello!")
// }
// sayHello()//<-function call;
// sayHello();
// sayHello();
// sayHello();

// function parameter -> name
// function sayHello (name){
// console.log("Hello",name)
// }

//function Argument = anu,FELIX,isaac
// sayHello("Anu");
// sayHello("Felix");
// sayHello("Isaac");

// function sayHello (fname,lname){
// console.log("Hello",fname+" "+lname)
// }
// sayHello("James","Smith");
// sayHello("John","Johnson");
// sayHello("Robert","Williams");

// function return
// function add(a,b){
//     return a + b;


// }
// let Result = add(40,60)
// console.log("Result=", Result);

// function add(a,b){
//     // a +=4
//     // b +=6
//     a =4
//         //   result=10
//      b =6
//     return a + b;


// }
// let Result = add(40,60)
// console.log("Result=", Result);

// function add (a,b,c){
//     a = 100
//     b = 55 
//     c = 45
//     return a - b + c;
// }
//  console.log("OUT=",add())

//  function expression
// let sayHello = function(){
//     console.log("Hello !!!!")
// }
// sayHello()

// Arrow function

//  const sayHello = () =>{
//     console.log("hello")
//  }
//  sayHello()

//  Arrow function with parameter and return, short ver
// let add = (a,b) => a*b;
// let rst = add(2,15);
// console.log("Result=",rst);

// let add = (c,d) =>{
//     c = 10;
//     d = 20;
//     return c + d;

// }
// console.log(add());
 
const mark = (score) =>{
    if(score >= 90) return "A+"
    if(score >= 80) return "A"
    if(score >= 70) return "B+"
    if(score >= 60) return "B"
    if(score >= 65) return "C+"
    if(score >= 50) return "C"
    if(score >= 55) return "D+"
    if(score >= 40) return "D"
     return "NEFH!!!";
}
let MRK = mark(89)
console.log("NOTHING WILL WORK UNLESS YOU DO =",MRK);
