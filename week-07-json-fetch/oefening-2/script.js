// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    document.querySelector('#films').innerHTML = `<ul>${movies
      .map(movie => `<li>${movie.title} — ${movie.director} (${movie.year}) - ${movie.genre}</li>`)
      .join('')}</ul>`;
  })
  .catch(error => console.error('Fout:', error));