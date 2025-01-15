import React, { useState } from 'react';
import './Weather.css';

const api = {
  key: "9ee4244a981d4d90d6c4698d9bbc7a55",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "Febrauray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>

            <div className="location-box">{weather.name},{weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())}</div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)} <span>&#176;c</span>

              </div>

            </div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="humi">
              Humidity: {weather.main.humidity} %
              </div>
            <div className="flex">
              <p className="sunrise-sunset">Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
              <p className="sunrise-sunset">Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
          </div>

        ) : ('')}
      </main>
    </div>
  );
}

export default Weather;