const inputValue = document.getElementById('font-size-control');
const totalSize = document.getElementById('text');
inputValue.addEventListener("input",
function(){
    totalSize.style.fontSize = inputValue.value + 'px';
});

