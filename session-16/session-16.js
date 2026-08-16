// loops

// const { use } = require("react");

// for loop
// for(let a =1; a <= 5; a++){
//     console.log("count=",a)   
// }
//  for(let a =1; a <= 5; a++){
//     {
//         if(a==3);
//         continue;
//     }
//      console.log("count=",a)   
//  }
//  for(let a =1; a <= 5; a++){
//    console.log("count=",a)  
//    {
//     if(a==3)
//     break;
//    } 
//  }



// while loop
// let stock=10;
// while (stock>=0){
//     console.log('stock=',stock);
//     stock--;
    
// }

// do while loop
// let stock=10;
// do{
//     console.log('stock=',stock);
//     stock--;
// }while(stock>0);
//  let fruits = ["mango","banana","apple","grapes","orange"];//length=5
//  console.log(feuits.length)
// console.log(fruits[1]) index

//  let lastindex  = fruits.length - 1;
// console.log(fruits[lastindex])

// for(let i = 0;  i < fruits.length; i++){
//   console.log(fruits[i]);
  
// }
// for(const feuit of fruits){
//   console.log(feuit); //only for array 
  
// }
// let fruits= ["apple", "banana"];
// fruits.push("orange") // add an item to the end of an array 
// console.log('Fruits=',fruits);

// let fruits= ["apple", "banana"];
// fruits.pop() // delete an item to the end of an array 
// console.log('Fruits=',fruits);
// let fruits= ["apple", "banana"];
// fruits.unshift("mango") // add an item to the brginning of an array 
// console.log('Fruits=',fruits);

// let fruits= ["apple", "banana"];
// fruits.shift() // delete an item to the biginning of an array 
// console.log('Fruits=',fruits);


//   let fruits = ["mango","banana","apple","grapes","orange"];
// fruits.splice(0,3); //chenges the contents of an array by removing or replacing existing elements in place
// console.log('Fruits=',fruits);

//   let fruits = ["mango","banana","apple","grapes","orange"];
// fruits.splice(0,1 ,'Dragon fruit'); // replace a item
// console.log('Fruits=',fruits);

//   let fruits = ["mango","banana","apple","grapes","orange"];
// fruits.splice(3,0 ,'pineapple'); // add a item
// console.log(fruits);

//   let fruits = ["mango","banana","apple","grapes","orange"];
// // fruits.slice(1,3);
// console.log(fruits.slice(1,5));

// console.log(fruits);

// map()
//  let number =[1,2,3,4,5,6,7,8,9];
// let result= number.map((n) => n*10);
// console.log('Result=',result);
// console.log('Array=',number);

// let result = number.map((n)=>{
//   return n*8;
// })
// console.log(result);

//  let result= number.map(n => n*10);
//  console.log(result);
 
// // filter
// let result = number.filter((a) => a>3);
// console.log('Result=',result);

// reduce
// let sum = number.reduce((sum,i)=> sum+i , 0 );
// console.log('sum=',sum);

// Object
// let user ={
//   name: 'manu',
//   age: 18,
//   education:'+2',
//   job: 'nill'

// }
// console.log(user.age);
// console.log(user['education']);

// Update/add a value
// user.city="KVR"
//  console.log(user)

// delete a value

// delete user.education;
//  console.log(user);


// let keys =Object.keys (user);
// let value =Object.value (user);
// let entries =Object.entries (user);
// console.log(keys)
// console.log(value)
// console.log(entries)

// for( let key in user){
//   console.log(user[key]);
  
// }