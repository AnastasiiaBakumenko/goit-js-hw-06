const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let addIngredient = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items =  document.createElement("li");
  items.className = 'item';
  items.innerHTML=ingredient;
  addIngredient.append(items);
  addIngredient.appendChild(items);
});




