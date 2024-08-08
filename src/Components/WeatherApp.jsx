import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './WeatherApp.css';

function WeatherApp() {
  const [city, setCity] = useState('Lahore');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  function fetchWeatherData() {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=9c4224c4acab4b6d887190746240608&q=${city}&aqi=yes`)
      .then((response) => {
        setWeatherData(response.data);
      })
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSearch() {
    fetchWeatherData();
  }

  return (
    <div className="main">
      <div className="toDo mt-2">
        <h2 className="px-2">Weather</h2>
        <div className="mb-3 todoInputfield">
          <input
            value={city}
            onChange={handleCityChange}
            type="text"
            className=""
            id="todoInput"
            placeholder="Search City"
          />
          <button className="addButton bg-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {weatherData && (
          <div className="weather-info">
            <h3>{weatherData.location.name}, {weatherData.location.country}</h3>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Weather Icon" />
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Wind: {weatherData.current.wind_kph} kph</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
