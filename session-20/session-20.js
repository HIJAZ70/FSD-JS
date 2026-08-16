const signUp = document.querySelector('#sign-Up')
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordSrong = document.querySelector('#password-strog');
const confirmPassword = document.querySelector('#confirm');
const submit = document.querySelector('#submit');
// Email ID Regular Expression
const mailRen = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passRen = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//HELPER FUNCTION
function showError(fieldID, message) {
    document.querySelector(`#${fieldID}-error`).textContent = message;

    const field = document.querySelector(`#${fieldID}`);
    field.classList.add("is-invalid")
    field.classList.remove("is-valid")
}

function clearError(fieldID) {
    document.querySelector(`#${fieldID}-error`).textContent = "";
    const field = document.querySelector(`#${fieldID}`);
    field.classList.remove("is-invalid")
    field.classList.add("is-valid")
}

fullName.addEventListener('input', () => {
    const value = fullName.value.trim();
    //    const dom = fullName.getAttribute("id")
    console.log("Legnth =", value.length);

    if (value.length === 0) {
        showError("name", "Please enter a name");
    } else if (value.length < 3) {
        showError('name', "Name must have at least 3 characters ")

    } else {
        clearError("name");

    }
})

email.addEventListener('input', () => {
    const value = email.value.trim();
    const mail = email.getAttribute("id")
    if (value.length === 0) {
        showError(mail, "Please enter an Email")
    } else if (!mailRen.test(value)) {
        showError(mail, "invalid mail ID")

    } else {
        clearError(mail);
    }

})
password.addEventListener('input', () => {
    const value = password.value.trim();
    const pass = password.getAttribute("id");
    if (value.length === 0) {
        showError(pass, "Entar a password")
        // if(value.length < 8){
        //     passwordSrong.textContent= "Week password"
        //     passwordSrong.className ='small mt-1 text-danger';
        // }else{
        //      passwordSrong.textContent= "strong password"
        //    passwordSrong.className ='small mt-1 text-success';
        // clearError(pass);

        // }
    } else if (!passRen.test(value)) {
        showError(pass, "Error: Password must be at least 8 characters long and include at least one letter and one number.")

    } else {
        clearError(pass);
    }

    confirmPassword.addEventListener('input', () => {
        const value = password.value.trim();
        const convalue = confirmPassword.value.trim();
        const conpass = confirmPassword.getAttribute("id");
        

        if (convalue.length === value) {
            showError(conpass, "Confirm your password");
        } else if (convalue !== value) {
            showError(conpass, "Passwords do not match");
        } else {
            clearError(conpass);
        }

    });


})



signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = fullName.value.trim();
    const mailvalue = email.value.trim();
    const passvalue = password.value.trim();
        const confirmvalue = confirmPassword.value.trim();


    if (value.length === 0) {
        showError("name", "Please enter a name");
    }
    if (mailvalue.length === 0) {
        showError("email", "Please enter an Email")
    }
    if (passvalue.length === 0) {
        showError("password", "Entar a password")
    }
     if (confirmvalue.length === 0) {
            showError("confirmPassword", "Entar Confirm password");
        }
});
submit.addEventListener('click',(e)=>{
console.log(fullName.value);
    const mess = document.createElement('p');
    mess.textContent =fullName.value;
    userMessage.appendChild(mess);

})
