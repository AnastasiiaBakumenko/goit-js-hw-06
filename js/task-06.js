let inputVal = document.getElementById("validation-input");

let totalLength = inputVal.getAttribute("data-length");
let initialTotalLength = parseInt(totalLength,10);
 inputVal.oninput = function(){
    if(inputVal.value.length === initialTotalLength){
        inputVal.classList.remove("invalid");
        inputVal.classList.add("valid");
    }
    if(inputVal.value.length === 0){
        inputVal.classList.remove("invalid");
        inputVal.classList.remove("valid");
    }
    if( inputVal.value.length !==initialTotalLength && inputVal.value.length !==0){
        inputVal.classList.add("invalid");
    }
 };