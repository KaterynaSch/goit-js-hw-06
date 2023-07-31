const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', handler);

span.style.fontSize = `${input.value}px`;
function handler(evt) {   
  span.style.fontSize = `${evt.currentTarget.value}px`; 
}