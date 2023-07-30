const query = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

query.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
  const input = evt.currentTarget.value.trim(); 
  if (input !== "") {
    span.textContent = input;
  } else {
    span.textContent = "Anonymous";
  };
};
