// DOM -> Document Object Model
// console.log(document);

const ali_name = document.getElementById('name');
const button = document.getElementById('myButton');

// setTimeout(() => {
//     ali_name.textContent = "alien";
// }, 5000);

// setTimeout(() => {
//     ali_name.style.color = "green";
// }, 7000);

button.addEventListener('click', () => {
    ali_name.textContent = "alien";
    ali_name.style.color = "green";
})