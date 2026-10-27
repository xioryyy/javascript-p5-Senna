fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    document.querySelector('#books-list').innerHTML = books
      .map(book => `<li>${book.title} — ${book.author} - ${book.year}</li>`)
      .join('');
  })
  .catch(error => console.error('Fout:', error));
