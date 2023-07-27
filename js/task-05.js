const query = document.querySelector('#name-input');
const title = query.nextElementSibling;
const span = title.firstElementChild;


query.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
  span.textContent = evt.currentTarget.value;
  console.log(span.textContent);
};
