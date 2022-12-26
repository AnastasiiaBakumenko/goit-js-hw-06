const totalLength = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalLength.length}`);


totalLength.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
