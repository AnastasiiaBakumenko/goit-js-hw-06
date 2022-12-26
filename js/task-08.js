const form = document.querySelector('.login-form');
const formInput = document.querySelector('.login-form input')

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event){
    event.preventDefault();
const {
    elements:{email, password}
} = event.currentTarget;
    if(email.value === "" || password.value === ""){
        return alert("Введіть всі дані");
    }
    console.log(email.name, email.value);
    console.log(password.name, password.value);
    event.currentTarget.reset();
}


