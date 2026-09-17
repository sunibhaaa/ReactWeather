import { useState } from "react";
import { useForm } from "react-hook-form";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {

  const [city, setCity] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const {
    data,
    isLoading,
    isError
  } = useWeather(city);


  function onSubmit(formData) {

    setCity(formData.city);

  }


  return (
    <div className="container">

      <h1>Weather App</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Enter city name"
          {...register("city", {
            required: "Please enter a city."
          })}
        />

        <button type="submit">
          Search
        </button>

      </form>


      {errors.city && (
        <p className="error-message">
          {errors.city.message}
        </p>
      )}


      {isLoading && (
        <p>Loading...</p>
      )}


      {isError && (
        <p className="error-message">
          City not found. Please enter a valid city.
        </p>
      )}


      {data && !isError && (
        <WeatherCard
          weather={data}
        />
      )}

    </div>
  );
}

export default App;