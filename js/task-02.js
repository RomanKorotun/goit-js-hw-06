const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function getIngredients(arr) {
  const markup = arr.map(elem => {
    const liItem = document.createElement('li');
    liItem.textContent = elem;
    liItem.classList.add('item');
    return liItem;
  });
  ingredientsList.append(...markup);
}
getIngredients(ingredients);
