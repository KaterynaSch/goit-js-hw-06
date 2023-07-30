const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', handler);

input.style.fontSize = `${input.value}px`;
function handler(evt) {  
  let resultSize = 0;
  resultSize += evt.currentTarget.value;
  span.style.fontSize = `${resultSize}px`;
 
}