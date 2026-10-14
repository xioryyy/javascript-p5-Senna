const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const defaultUser = { role: 'user', active: true };

const showUsers = (users) => {
    // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users
  const container = document.querySelector('#users');
  container.innerHTML = '';

  for (const user of users) {
    const { name, email, role, active } = user;

    container.innerHTML += `
      <article>
        <h2>${name}</h2>
        <p>${email}</p>
        <p>Rol: ${role}</p>
        <p>Actief: ${active}</p>
      </article>
    `;
  }
};

const filterUsers = () => {
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
  showUsers(users.filter((user) => filter === 'all' || user.role === filter));
};
// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan

// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.querySelector('#user-form').addEventListener('submit', (event) => {
  event.preventDefault();
  

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const role = document.querySelector('#role').value;

  const newUser = { ...defaultUser, name, email, role };

  users.push(newUser);
  filterUsers();
});

filterUsers();
console.log(users);