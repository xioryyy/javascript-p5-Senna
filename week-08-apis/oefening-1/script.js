const characters = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.results.forEach(character => {
      const article = document.createElement('article');
      const name = document.createElement('h2');
      const image = document.createElement('img');

      name.textContent = character.name;
      image.src = character.image;
      image.alt = character.name;

      article.append(name, image);
      characters.append(article);
    });
  })
  .catch(error => console.error('Fout:', error));
