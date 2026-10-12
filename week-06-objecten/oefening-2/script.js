const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const original = people
  .map(({ name, city }) => `${name}: ${city}`)
  .join(' | ');

const copied = people
  .map(({ name, age, city, ...rest }) => ({
    ...rest,
    name,
    age,
    city: 'Den Haag',
  }))
  .map(({ name, city }) => `${name}: ${city}`)
  .join(' | ');

document.getElementById('origineel').textContent = original;
document.getElementById('kopie').textContent = copied;