function getLocationWeather() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiKey = "5f7ee076a392b6eb4822fc48b8c4cfa1"; 

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const weatherBox = document.getElementById("weather");
        weatherBox.innerHTML = `
          <h3>${data.name}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Condition: ${data.weather[0].description}</p>
        `;
      })
      .catch(err => {
        document.getElementById("weather").textContent = "Failed to fetch weather.";
        console.error(err);
      });
  }

  function error(err) {
    alert("Unable to retrieve your location.");
    console.error(err);
  }
}
