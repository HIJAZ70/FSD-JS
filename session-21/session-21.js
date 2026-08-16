// var name = "Entri"
// console.log(name);
// console.log("Entri app");

// function inSide(){
//     var a = 10;
//     console.log(a);
    
// }
// inSide()

// setTimeout(()=>{
//     console.log("hijaz");
    
// },1024)
// setInterval(()=>{
//     console.log("hijaz");
    
// },10024)

////call back function

// function name (call){
//     console.log(call);
    
// }
// function usname() {
//     console.log("hijaz");
    
    
// }
// usname(name())

// // The callback function
// function displayResult(result) {
//   console.log("The result is: " + result);
// }

// // Function that takes a callback
// function calculate(num1, num2, callback) {
//   let sum = num1 + num2;
//   callback(sum); // Executing the callback function
// }

// // Passing displayResult as a callback
// calculate(5, 10, displayResult);
// // Output: The result is: 15

// // Callback Hell (Pyramid of Doom)
// getUserData(1, function(user) {
//   console.log("User fetched:", user.name);
  
//   getPosts(user.id, function(posts) {
//     console.log("Posts fetched:", posts);
    
//     getComments(posts[0].id, function(comments) {
//       console.log("Comments fetched:", comments);
      
//       getLikes(comments[0].id, function(likes) {
//         console.log("Likes fetched:", likes);
        
//         // Deep nesting continues...
//       });
//     });
//   });
// });


//promise

// const myPromise = new Promise((resolve,reject)=>{
//     //api call
//     let success = false;
//     if (success){
//         resolve("Tasck completed")

//     }else{
//         reject(" something went wrong")
//     }

// })
// myPromise.then((res)=>{
// console.log(res);

// }).catch((err)=>{
// console.log(err);

// })


// const promise1 = new Promise((resolve)=>resolve("GOOD!!"));
// const promise2 = new Promise((resolve)=>resolve("HELLO!!"));
// const promise3 = new Promise((resolve)=>resolve("WORLD!!"));
// const promise4 = new Promise((resolve)=>resolve(" something went wrong!!"));
// const promise5 = new Promise((resolve)=>resolve("😊!!"));
// const promise6 = new Promise((resolve,reject)=>reject("WRONG!!"));
// Promise.all([promise1,promise2,promise3,promise4,promise5,promise6]).then((any)=>{
//     console.log(any);
    
// }).catch((error)=>{
// console.log(error);

// })

//async  / await

//  async function greet(){
//     return"Hello Wrold !!!";
// }

// greet().then((reuslt)=>{
//     console.log(reuslt);
    
// })

function dataStore(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{reject(' something went wrong')},2024);
        
    })
}

function dataStore1(name){
    return new Promise((resolve)=>{
        setInterval(()=>{resolve({name:"E86"})},2024);
        
    })
}
// async function storedData(){
//     console.log("storing.........");
// const data = await dataStore();
// const data1 = await dataStore1();
// console.log(data. name);
// console.log(data1. name);
// console.log("completed👍");
// }


//try  /  catch
// async function storedData(){
//     try {
//         console.log("storing.........");
// const data = await dataStore();
// const data1 = await dataStore1();
// console.log(data. name);
// console.log(data1. name);
// console.log("completed👍");
        
//     } catch (error) {
//        console.log(error,"error...!");
        
//     }finally{
//         console.log('All time call this finally');
        
//     }


// }
// storedData()
async function storedData(){
    try {
        console.log("storing.........");
const data = await fetch ("https://api.weather.com/v1/forecast?city=London");
console.log(data);
console.log("completed👍");
        
    } catch (error) {
       console.log(error,"error...!");
        
    }finally{
        console.log('All time call this finally');
        
    }


}
storedData()