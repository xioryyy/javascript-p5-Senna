let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  const results = document.querySelector('#results');
  const articles = items.map((item) => {
    const article = document.createElement('article');
    const image = document.createElement('img');
    const name = document.createElement('h2');
    const button = document.createElement('button');
    const isFavorite = favorites.includes(item.name);

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;
    image.alt = item.name;
    name.textContent = item.name;
    button.className = 'favorite-btn';
    button.textContent = isFavorite ? 'Al favoriet' : 'Favoriet';
    button.disabled = isFavorite;

    article.append(image, name, button);
    return article;
  });

  results.replaceChildren(...articles);

  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      favorites.push(items[i].name);
      saveFavorites();
      showItems(items);
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));
    showItems(allPokemon);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {
  const favoritePokemon = allPokemon.filter((pokemon) =>
    favorites.includes(pokemon.name)
  );
  showItems(favoritePokemon);
});