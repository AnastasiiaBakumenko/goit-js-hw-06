const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event){
    event.preventDefault();
const {
    elements:{email, password}
} = event.currentTarget;
    if(email.value === "" || password.value === ""){
        return alert("Введіть всі дані");
    }
    const user={Email : email.value,  Password : password.value};
    console.log(user);
    
    event.currentTarget.reset();
}


