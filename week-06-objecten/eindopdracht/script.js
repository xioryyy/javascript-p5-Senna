const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const defaultUser = { role: 'user', active: true };

const showUsers = (users) => {
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
  if (filter === 'admin') {
    showUsers(users.filter((user) => user.role === 'admin'));
  } else {
    showUsers(users);
  }
};

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