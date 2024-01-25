// script.js

const getWeather = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '1b0798eaf5mshef3a2dfff4aab22p1b3c80jsn81a34e9f4fc1',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
  };

  try {
      document.getElementById('cityname').innerHTML = city;

      const response = await fetch(url, options);
      const result = await response.json(); // Parse response as JSON

      console.log(result);

      // Assuming you have HTML elements with corresponding IDs
      document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
      document.getElementById('temp').innerHTML = result.temp;
      document.getElementById('temp2').innerHTML = result.temp;
      document.getElementById('feels_like').innerHTML = result.feels_like;
      document.getElementById('humidity').innerHTML = result.humidity;
      document.getElementById('humidity2').innerHTML = result.humidity;
      document.getElementById('min_temp').innerHTML = result.min_temp;
      document.getElementById('max_temp').innerHTML = result.max_temp;
      document.getElementById('wind_speed').innerHTML = result.wind_speed;
      document.getElementById('wind_speed2').innerHTML = result.wind_speed;
      document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
      document.getElementById('sunrise').innerHTML = result.sunrise;
      document.getElementById('sunset').innerHTML = result.sunset;
  } catch (error) {
      console.error(error);
  }
};

const searchWeather = async () => {
  const city = document.getElementById('city').value;
  if (city) {
      await getWeather(city);
  }
};

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  // Fetch weather for Pune initially
  getWeather('Pune');
});
