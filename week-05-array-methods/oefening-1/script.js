const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];
const filteredScores = scores.filter(score => score > 50);

const filter = document.querySelector('#result-filtered');
const map = document.querySelector('#result-map');
const sorted = document.querySelector('#result-sorted');


// console.log (filteredScores);

// Filter: toon alleen scores boven de 50 in #result-filtered

for (let score of filteredScores) {
    filter.innerHTML += `<li>${score}</li>`;
}


const doublePoints = scores.map (n => n * 2); 
for (let score of doublePoints) {
    map.innerHTML += `<li>${score}</li>`;
}
// Map: verdubbel alle scores en toon in #result-map

const sorting = scores.sort ((a,b) => a - b);
for (let score of sorting) {
    sorted.innerHTML += `<li>${score}</li>`;
}
// console.log(sorted)
// Sort: sorteer van laag naar hoog en toon in #result-sorted
