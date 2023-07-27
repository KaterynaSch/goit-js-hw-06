const elements = {  
  decrement: document.querySelector('button[data-action="decrement"]'), 
  increment: document.querySelector('button[data-action="increment"]'),  
  span: document.querySelector('#value')   
}

elements.decrement.addEventListener('click', handlerClick);
elements.increment.addEventListener('click', handlerClick);

let counterValue = 0;
function handlerClick(evt) {
  if (evt.currentTarget === elements.decrement) {
    counterValue -= 1;    
  } else if (evt.currentTarget === elements.increment) {
    counterValue += 1;    
  };
  elements.span.textContent = counterValue; 
  console.log(elements.span.textContent);
}