import React, { useState } from "react";
import "./App.css";

function WeatherDisplay({ weatherData }) {
  const [unit, setUnit] = useState("C"); // State to keep track of the current unit

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const kelvinToFahrenheit = (kelvin) => {
    return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
  };

  const { name, main, sys, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const displayTemp = (kelvin) => {
    return unit === "C"
      ? `${kelvinToCelsius(kelvin)}°C`
      : `${kelvinToFahrenheit(kelvin)}°F`;
  };

  return (
    <div className="container">
      <h2>
        {name}, {sys.country}
      </h2>
      <img src={iconUrl} alt={weather[0].description} />
      <h1>{displayTemp(main.temp)}</h1>
      <p>Feels like: {displayTemp(main.feels_like)}</p>
      <p>
        H: {displayTemp(main.temp_max)}° - L: {displayTemp(main.temp_min)}°
      </p>
      <p>Condition: {weather[0].description}</p>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleUnit} checked={unit === "F"} />
          <span className="slider round"></span>
        </label>
        <span>{unit === "F" ? "°F" : "°C"}</span>
      </div>
    </div>
  );
}

export default WeatherDisplay;