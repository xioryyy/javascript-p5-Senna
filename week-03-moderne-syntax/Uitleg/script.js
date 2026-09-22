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
