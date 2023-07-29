const query = document.querySelector('#name-input');
const title = query.nextElementSibling;
const span = title.firstElementChild;


query.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
  const input = evt.currentTarget.value.trim(); 
  if (input !== "") {
    span.textContent = input;
  } else {
    span.textContent = "Anonymous";
  };
};
