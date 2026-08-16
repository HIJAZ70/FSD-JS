 //2
 function calculateDalivaryCharge(distance){
 return distance > 5 ? 50 : 20;
}
// 3Fn Expression default parameter dicount=0

const applyDiscount = (amount,dicount =0) => amount - amount* dicount;
//5 HOF
 function placeYourorder(order,dicountType, callbackfn){
const { // Destructuring
customerName,
itams,  
distance
}= order;

 const totalPrice = itams.reduce((sum,{price,quantity =1})=>sum + price*quantity,0);
 const dicountPrice =dicountType(totalPrice);
 const finalAmount = dicountPrice + calculateDalivaryCharge(distance);

 callbackfn(customerName,finalAmount);
 }

// 1Sample order
const order = {
    customerName: 'Hassan',
    distance: 8,
    itame:[
        {name : 'Pizza',price:300,quantity:2},
        {name : 'Burger',price:150}
    ],
};
//4 call back funtion
const festivalDiscoun = total => applyDiscount (total,0.10);

placeYourorder(order,festivalDiscount,(name,finalAmount) => {
    console.log(`Order conformed for $(name). Pay Rs $(finalAmount);`);
    
});
