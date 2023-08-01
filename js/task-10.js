function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = createBtn.previousElementSibling;
const resultBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() { 
  destroyBoxes();
  let amount = input.valueAsNumber; 
  const boxes = [];  
  
  for (let i = 0; i < amount; i++) { 
    const div = document.createElement('div');
    let bgnColor = getRandomHexColor();
    div.style.backgroundColor = bgnColor;     
    div.style.width = ` ${30 + 10*i}px `;
    div.style.height = ` ${30 + 10*i}px `;
    boxes.push(div);  
    console.dir(bgnColor);
  }
  resultBoxes.append(...boxes);
 
};

function destroyBoxes() {
  resultBoxes.innerHTML = "";
};