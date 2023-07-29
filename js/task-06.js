const query = document.querySelector('#validation-input');
query.addEventListener('blur', handlerSearch);

function handlerSearch(evt) {
    const enteredValue = evt.currentTarget.value.trim();

    if (enteredValue.length === Number(query.dataset.length)) {
        query.classList.add("valid");
        query.classList.remove("invalid");
    } else {
        query.classList.add("invalid");
        query.classList.remove("valid");
    };

};