import React from "react";

function WeatherDisplay({ weatherData, kelvinToCelsius, kelvinToFahrenheit }) {
  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>
        Temperature: {main.temp}K ({kelvinToCelsius(main.temp)}°C /{" "}
        {kelvinToFahrenheit(main.temp)}°F)
      </p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
