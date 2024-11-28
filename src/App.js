import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "12e6c3ee7a6dc61d1462bb3619e3bb75";

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("Location not found");
        } else if (error.response) {
          setError(error.response.data.message);
        } 
        else {
          setError("Error fetching weather data");
        }
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>By Conor Le 101411302</h2>
      <SearchBar setCity={setCity} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <WeatherDisplay
          weatherData={weatherData}
        />
      )}
    </div>
  );
}

export default App;
