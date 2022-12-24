const totalLength = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalLength.length}`);


const categoriesArray = [...totalLength]
.map(categories =>`Category: ${categories.children[0].textContent} 
Elements: ${categories.children[1].children.length}`)
.join("\n");
console.log(categoriesArray);
