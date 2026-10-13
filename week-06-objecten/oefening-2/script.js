const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

// 1. Originele lijst tonen (alleen naam en stad)
const origineel = document.querySelector('#origineel');

people.map(({ name, city }) => {
  origineel.innerHTML += `<p>${name} - ${city}</p>`;
});

// 2. Nieuwe array met stad 'Den Haag'
const kopie = people.map((person) => ({ ...person, city: 'Den Haag' }));

// 3. Kopie tonen
const kopieSectie = document.querySelector('#kopie');

kopie.map(({ name, city }) => {
  kopieSectie.innerHTML += `<p>${name} - ${city}</p>`;
});