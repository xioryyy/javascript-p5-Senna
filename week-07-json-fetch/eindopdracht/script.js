let allArticles = [];
const articles = document.querySelector('#articles');

const toonArtikelen = (lijst) => {
  articles.innerHTML = lijst.map(article => `
    <article>
      <h2>${article.title}</h2>
      <p>${article.category}</p>
      <p>${article.summary}</p>
    </article>
  `).join('');
};

fetch('./news.json')
  .then(response => response.json())
  .then(data => {
    allArticles = data;
    toonArtikelen(allArticles);
  });

document.querySelector('#filter-alle').addEventListener('click', () => {
  toonArtikelen(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  toonArtikelen(allArticles.filter(article => article.category === 'Stad'));
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  toonArtikelen(allArticles.filter(article => article.category === 'Technologie'));
});

document.querySelector('#filter-media').addEventListener('click', () => {
  toonArtikelen(allArticles.filter(article => article.category === 'Media'));
});
