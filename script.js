const card = document.querySelector('#card');
const cardTitle = document.querySelector('#cardTitle');
const toggleBut = document.querySelector('#Toggle');
const formUser = document.querySelector('#userForm');
const userName = document.querySelector('#username')
const userMessage = document.querySelector('#message')
const chatBox = document.querySelector('#chatBox');
const formButton = document.querySelector('#formButton')

//  cardTitle.textContent ="Welcome to DOM !!!" 
cardTitle.innerHTML = "<i>Welcome to DOM !!!</i>"

card.addEventListener('click', (e) => {
    card.classList.toggle('selected')
    //  card.classList.add('selected')
    //  card.classList.remove('selected')
    console.log('card');

});
toggleBut.addEventListener('click', (e) => {
    e.stopPropagation();
    formUser.classList.toggle('hidden')
    console.log('toggle');

});

userName.addEventListener('input',(e)=>{
    let userName = e.target.value
    chatBox.textContent = `${userName.length} / 15 Characters`;
    chatBox.style.color = userName.length > 15 ?'red':'green';
});

formButton.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(userName.value);
    const mess = document.createElement('p');
    mess.textContent =userName.value;
    userMessage.appendChild(mess);

    

    
})




//  console.log(cardTitle.textContent  );
 
// const cardTile = document.querySelectorAll('.card-title')
// // console.log( 'cardTitle=',cardTile[0]  );

// cardTitle.forEach((cardTile) => {
//     console.log(cardTile);
    
// });