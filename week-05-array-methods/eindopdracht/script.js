const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
  const productsElement = document.getElementById('products');
  const counterElement = document.getElementById('counter');

  productsElement.replaceChildren();
  counterElement.textContent = `${list.length} ${list.length === 1 ? 'product' : 'producten'}`;

  if (list.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'Geen producten gevonden.';
    productsElement.append(message);
    return;
  }

  list.forEach((product) => {
    const article = document.createElement('article');
    const heading = document.createElement('h3');

    heading.textContent = product;
    article.append(heading);
    productsElement.append(article);
  });
};

const filterProducts = () => {
  const filtered = products.filter((product) =>
    product.toLowerCase().includes(searchTerm)
  );

  if (sorting === 'az') {
    filtered.sort((a, b) => a.localeCompare(b, 'nl'));
  } else if (sorting === 'za') {
    filtered.sort((a, b) => b.localeCompare(a, 'nl'));
  }

  showProducts(filtered);
};

document.getElementById('search-bar').addEventListener('input', (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  filterProducts();
});

document.getElementById('sort-az').addEventListener('click', () => {
  sorting = 'az';
  filterProducts();
});

document.getElementById('sort-za').addEventListener('click', () => {
  sorting = 'za';
  filterProducts();
});

filterProducts();