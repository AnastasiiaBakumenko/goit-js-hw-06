const button = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
button.addEventListener("click", () =>{
  document.body.style.backgroundColor = getRandomHexColor();
  newColor.textContent = document.body.style.backgroundColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





