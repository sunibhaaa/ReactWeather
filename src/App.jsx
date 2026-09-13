import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {

  const [city, setCity] = useState("");

  const {
    weather,
    loading,
    error,
    getWeather
  } = useWeather();


  function handleSubmit(event) {

    event.preventDefault();

    if (city.trim() === "") {
      return;
    }

    getWeather(city);

  }


  return (
    <div className="container">

      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button type="submit">
          Search
        </button>

      </form>


      {loading && (
        <p>Loading...</p>
      )}


      {error && (
        <p className="error-message">
          {error}
        </p>
      )}


      {weather && (
        <WeatherCard
          weather={weather}
        />
      )}

    </div>
  );
}

export default App;