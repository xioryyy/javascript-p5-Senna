let message = "Dit is een bericht";

let input = document.querySelector('#input');
let button = document.querySelector('#Button');

button.addEventListener('click', () => {
    let inputValue = input.value.trim();
    localStorage.setItem('input value', inputValue);

    let getItemFromStore = localStorage.getItem('input value');
    console.log(getItemFromStore);
});

localStorage.setItem('Bericht', message);