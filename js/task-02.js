const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

let result = [];
ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add("item");
    result.push(li);
});
list.append(...result);

console.dir(list.children);