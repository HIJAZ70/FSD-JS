// console.log("hello");
// let name="arun"
// console.log( name);
// console.log("Name:",name)
// console.log(typeof name);

// let age="34";
// //console.log(age);
// console.log(typeof age);

//type conversion
// let age=18;
// console.log( typeof age);
// var age=Number("49")
// console.log(typeof age);
// console.log(Number ( "qwqw"));
// console.log(String(true));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Number(""));
// console.log(Number(true));
// console.log(Number(false));
// console.log( String(true));

//  let city; //undefined?
// let city = null
// console.log( typeof city) Object
// console.log( typeof city);


// console.log( typeof String( undefined))
// console.log( typeof String( null))

// console.log(  String( undefined))

// console.log(  String( null))
// console.log(Boolean(0));

// console.log(Boolean(1));

// console.log(Boolean(true));
// console.log( typeof Boolean("false"));
// console.log(Boolean("null"));true
// console.log(Boolean(true));false
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// type  coercion , auto
// console.log(typeof 10+2);
// console.log(typeof "10"+2); str
// console.log( typeof 2+"5"); Number
// console.log( 2+"5"-5*"10"); //NaN -25
// console.log( "5"+11+10); str 51110
// let x = (5 == "5") 
// console.log(x); true
// let x = "50" - 45 + 5;
// console.log(x); number 10
// let cal ="19" * 11;
// console.log(typeof cal , cal); num 209
//   let a = "10"/4;
//   console.log( typeof a , a);2.5 num

//   let b = 100 % "30";
//   console.log(typeof b , b);
  
// Arithmetic operators
// let x = 5;
// let y = 2;
// let z = x + y;
// console.log(z); 

// let x = 15;
// let y = 9;
// let z = x - y;
// console.log(z);

// let x = 51;
// let y = 21;
// let z = x * y;
// console.log(z);

// let x = 8;
// let y = 3;
// let z = x / y;
// console.log(z);

// let x = 5;
// let y = 2;
// let z = x % y;
// console.log(z);

// Assignment Operators
// let x = 10;
// console.log(x);

// let x = 10;
// x += 5;
// console.log(x);

// let x = 10;
// x -= 5;
// console.log(x);

// let x = 10;
// x *= 5;
// console.log(x);

//  let x = 10;
// x/=5;
// console.log(x);

// Comparison Operators
// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 > mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 < mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 >= mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 <= mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 == mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 === mark2;
// console.log(result);

// let mark1 = 50;
// let mark2 = 25;
// let result = mark1 != mark2;
// console.log(result);

// logical operators

// let x = 6;
// let y = 3;
// let z = (x < 10 && y > 1)
// console.log(z);


// let x = 6;
// let y = -3;
// let z = (x > 0 && y > 0)
// console.log(z);



// let x = 6;
// let y = -3;
// let z = (x > 0 || y > 0)
// console.log(z);

// control statements
// let mark = 48; 
// if (mark >= 48){
//     console.log("pass!!");
    
// }
// console.log("All the best");

// let mark = 30; 
// if (mark >=48){
//     console.log("passed!!")
// }
// console.log("All the best😊");

// let mark = 36;
// if (mark >= 48){
//     console.log("passed!!👍👍");
    
// }else{
//     console.log("you are failed!!👎👎");
    
// }
// console.log("All the best😊");

// let mark = 50;
// if (mark >= 48){
//     console.log("passed!!👍👍");
    
// }else{
//     console.log("you are failed!!👎👎");
    
// }
// console.log("All the best😊");
//   let mark = 1;
//   if(mark >= 90){
//     console.log("A+");
    
//   }else if(mark >= 80 ){
//     console.log("A");
    
//   }else if(mark >= 75){
//    console.log("B+");

//   }else if(mark >= 70){
//     console.log("B");
    
//   }else if(mark >= 65){
//     console.log("C+");
    
//   }else if(mark >= 60){
//     console.log("C");
    
//   }else if(mark >= 55){
//     console.log("D+");
    
//   }else if(mark >= 50){
//     console.log("D");
    
//   }else if(mark <= 49){
//     console.log("E");
//     console.log("you are NEFH 🛑🛑");
    
    
//   }
//   console.log("All the best");
  

let month = 1; 
let Name;

switch (month) {
  case 1:
    Name = "January";
    break;
  case 2:
    Name = "February";
    break;
  case 3:
    Name = "March";
    break;
  case 4:
    Name = "April";
    break;
  case 12:
    Name = "December";
    break;
  default:
    Name = "Invalid month"; 
}

console.log(Name);