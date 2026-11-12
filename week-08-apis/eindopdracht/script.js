const form = document.querySelector('#search-form');
const input = document.querySelector('#city-input');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        weatherInfo.innerHTML = '<p>Stad niet gevonden.</p>';
        return;
      }

      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const temp = Math.round(data.main.temp);
      const voelt = Math.round(data.main.feels_like);
      const lucht = data.main.humidity;
      const wind = Math.round(data.wind.speed);

      weatherInfo.innerHTML = `
        <article>
          <h2>${data.name}</h2>
          <img src="${icon}" alt="weer">
          <p>Temperatuur: ${temp}°C</p>
          <p>Gevoelstemperatuur: ${voelt}°C</p>
          <p>Luchtvochtigheid: ${lucht}%</p>
          <p>Windsnelheid: ${wind} m/s</p>
        </article>
      `;
    })
    .catch(() => {
      weatherInfo.innerHTML = '<p>Er ging iets mis.</p>';
    });

  input.value = '';
});
