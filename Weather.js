// JavaScript
function getWeather() {
  const city = document.getElementById("city").value;

  fetch("api.json") // You must have a local file named `api.json` with the API key
    .then(res => res.json())
    .then(data => {
      const apiKey = data.apiKey;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => response.json())
        .then(weather => {
          const name = weather.name;
          const temp = weather.main.temp;
          const description = weather.weather[0].description;

          document.getElementById("weatherResult").innerHTML = `
            <h3>${name}</h3>
            <p>Temperature: ${temp} °C</p>
            <p>Weather: ${description}</p>
          `;
        })
        .catch(error => {
          document.getElementById("weatherResult").textContent = "City not found or network error!";
          console.error("Weather fetch error:", error);
        });
    });
}
