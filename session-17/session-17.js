// const custamer = {
//     namre:'arun',
//     age:23

// }
// const custcopy = customer;
// custcopy.age = 25;
// console.log(custcopy);
// console.log(custamer);

// const array1=[1,2,3,4,5]
// const array2= array1;
// array2.push(6);
// console.log(array1);
// console.log(array2);

// spread open, (......) -ES6

// const array1=[1,2,3,4,5]
// const array2= [...array1];
// array2.push(6);
// console.log(array1);
// console.log(array2);

// const custamer = {
//     namre:'arun',
//     age:23

// }
// const custcopy ={...custamer};
// custcopy.age = 25;
// custcopy.educetion=10;
// console.log(custcopy);
// console.log(custamer);

//  const array1=[1,2,3,4,5]
//  const array2=[6,7,8,9]
// const merg12 = [...array1,...array2]
// console.log(merg12);
 
// const exp =['a', ...array1,20]
// console.log(exp);

// const randomNum =[13,12,11,5,1,4,7]
// const sorteNum =[...randomNum].sort((a,b)=> a-b);
// console.log(sorteNum);
// console.log(randomNum);

// const customerDetails = {
//     Name: 'malik',
//     age:30,
//     mobileno:987654321,
//     CUSID:'12WFFDE12',
//      gender:'m'
// }
// const custamerAdd={
//     city:'delhi',
//     Pincod:674534,
//     mail:'malik@gmail.com'


// }
// customerDetails.CUSID ='ADCS1235'
// const fullDetails = {...customerDetails,...custamerAdd}

// console.log(fullDetails);
// const updateDetails ={...customerDetails,...custamerAdd,Name:'Lakshmi',age:28,gender:'F',mail:'lakshmi@gmail,com',Exp:2}
// console.log(updateDetails);

// nested object
// const detailsCore = {
//     Name: 'malik',
//     age:30,
//     mobileno:987654321,
//     CUSID:'12WFFDE12',
//      gender:'m',
//      update:{
//         city:'delhi',
//           Pincod:674534,
//     mail:'malik@gmail.com'
        
//      }
// }
// detailsCore.city='Alok'

// // console.log(detailsUp);
// const detailsUp = {...detailsCore};
// const detailsUp1 = structuredClone(detailsCore);
// detailsUp1.Pincod=1234534
// detailsUp1.Name='varun'
// console.log(detailsUp1);
// // console.log(detailsCore);

// const num ={
//   a:1,

// };
//  const mun={
//   b:3,
//   c:6
//  }
// //  const res = Object.assign(num,mun)
//  const res = Object.assign({},num,mun)
//  res.a=10
//  console.log(res);
//  console.log(num);
//  console.log(mun);

// const user ={
//   name:'arjun',
//   age:23,

// }
// // Object.freeze(user);
// user.name='bus';
// console.log(user);
