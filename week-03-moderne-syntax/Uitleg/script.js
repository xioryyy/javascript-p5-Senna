let getName = document.getElementById('showName');

// function showName(naam) {
//     return 'Mijn naam is: ' + naam;
// }

const showName = (naam) => {
 return `Mijn naam is: ${naam}`;
}

showName ('Senna');
getName.textContent = showName('Senna');

let fruits = ["appel", "banaan", "perzik"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (let fruit of fruits) {
    getName.innerHTML += fruit + ("<br>");
}



let title = document.getElementById('title');
let button = document.getElementById('btn')
let section = document.getElementById('section')

button.addEventListener('click', () => {
    title.textContent = 'Ik heb geklikt!';

    title.classList.toggle('active');
    
    const p = document.createElement('p');
    p.textContent = 'Ik heb een paragraaf aangemaakt!';
    
    section.appendChild(p);
});
