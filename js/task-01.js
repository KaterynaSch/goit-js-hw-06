const categories = document.querySelector('#categories');
console.dir(`Number of categories: ${categories.children.length}`);

const items = categories.children;

[...items].forEach((item) => {
    console.dir(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
});
