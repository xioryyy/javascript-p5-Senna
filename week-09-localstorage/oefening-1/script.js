// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is

let buttonOpslaan = document.querySelector('#save');
let buttonOphalen = document.querySelector('#retrieve');

buttonOpslaan.addEventListener('click', () => {
    let inputValue = document.querySelector('#input').value.trim();
    localStorage.setItem('input value', inputValue);
});

buttonOphalen.addEventListener('click', () => {
    let storedValue = localStorage.getItem('input value');
    if (storedValue) {
        console.log('Opgehaalde waarde:', storedValue);
    } else {
        
    }
});