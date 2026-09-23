// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message
let btn = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');

btn.addEventListener('click', () => {
    message.classList.toggle('active');
    const p = document.createElement('p');
    p.textContent = 'blablabla';
    message.appendChild(p);

});

btn2.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Item toegevoegd';
    list.appendChild(li);
});
btn3.addEventListener('click', () => {
    message.classList.toggle('active');
    message.textContent = 'active class toegevoegd';
    btn3.classList.toggle('active');
});