const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

let zonder = document.getElementById("zonder-json")
let met = document.getElementById("met-json")
let output = document.getElementById("output")
localStorage.setItem('userData', JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem('userData'));
output.innerHTML = JSON.stringify(savedUser);

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina
