const formTab= document.querySelector('#form-tab')
const yourname = document.querySelector('#yourname')
const feedback= document.querySelector('#feedback')
const loadproduct= document.querySelector('#loadproduct')
const product= document.querySelector('#Product')
const feedResult= document.querySelector('#feedResult')

//https://jsonplaceholder.typicode.com/posts?_limit=3

function showError(field,message){
    document.querySelector(`#${field}-error`).textContent = message;
     const form = document.querySelector(`#${field}`);
    form.classList.add("is-invalid")
    form.classList.remove("is-valid")

}
function clearErroe(field,message){
      document.querySelector(`#${field}-error`).textContent = "";
     const form = document.querySelector(`#${field}`);
    form.classList.add("is-invalid")
    form.classList.remove("is-valid")
}



async function load(){
    product.innerHTML ="<p class='text-muted'>Loading products.......... </p>"
try {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts?_limit=5" );
const products = await response.json();
if (!response.ok){
    throw new Error
    (`HTTP <template> Error: ${respose.status}!!!`)
}
product.innerHTML = products.map((items)=>`<div>
<h3 class="fst-italic">${items.title}</h3>
<per>${items.body}</per>
</div>`)

} catch (error) {
    product.innerHTML = `<p class="text-danger">Filed to load product :${error.message}!!!</p>`
}


}
loadproduct.addEventListener('click',(load));


formTab.addEventListener('submit',async (e)=>{
e.preventDefault();
console.log("submited");
const nameValue = yourname.value.trim();
const feedValue = feedback.value.trim();
feedResult.innerHTML = "<p class ='text-muted'>sending feedack</p>"
if (nameValue.length === 0){
    showError("yourname","Please enter your name");
}
if (feedValue.length === 0){
    showError('feedback',"Please enter a Feedback");

}
feedResult.innerHTML ="<p class='text-muted'>sending FeedBack.......</p>";
try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
  name:nameValue,
   message:feedValue, 
  }),
  headers: {
    'Content-type': 'application/json; ',
  },
})
if (!resp.ok){
    throw new Error
    (`HTTP <template> Error: ${resp.status}!!!`);    
}
const savedFeedback = await resp.json();
console.log('res=',savedFeedback);

feedResult.innerHTML=`<div>
<p>Thank your ${nameValue}👍</p>
</div>`
} catch (error) {
    product.innerHTML = `<p class="text-danger">Filed your feedback sending :${error.message}!!!</p>`
    
}
})