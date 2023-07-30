function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener('click', handlerClick);
function handlerClick() {
  let bgnColor = getRandomHexColor();
  body.style.backgroundColor = bgnColor; 
  span.textContent =  bgnColor;
}

