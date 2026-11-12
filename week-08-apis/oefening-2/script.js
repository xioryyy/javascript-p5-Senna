const list = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

let allPokemon = [];

function renderPokemon(pokemon) {
  counter.textContent = `${pokemon.length} Pokémon`;

  list.innerHTML = pokemon.map((item) => `
    <article>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png" alt="${item.name}">
      <p>${item.name}</p>
    </article>
  `).join('');
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then((data) => {
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
    }));

    renderPokemon(allPokemon);
  })
  .catch((error) => console.error('Fout:', error));

searchBar.addEventListener('input', (event) => {
  const search = event.target.value.toLowerCase();
  const filteredPokemon = allPokemon.filter((pokemon) =>
    pokemon.name.includes(search)
  );

  renderPokemon(filteredPokemon);
});
