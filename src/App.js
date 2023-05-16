
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityFind from './components/CityFind';
import Weather from './components/Weather';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const API_KEY = "8692d05e8ac74951fa46bb4279dadd19"
  const [weather, setupdateWeather] = useState()
  const [city, setUpdateCity] = useState()
  console.log(city , "city state")
  const fetchWeather = async (e) => {
    e.preventDefault();
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
    `)
    setupdateWeather(response.data)
    // console.log(response.data, "testing");
  }
  return (
    <div className="App">
      {weather ? (<Weather weather={weather} city={city} />) : (<CityFind setUpdateCity={setUpdateCity} fetchWeather={fetchWeather} />)
      }
    </div>
  );
}

export default App;
