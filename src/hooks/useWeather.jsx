import { useState } from "react";

export function useWeather() {

    const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    console.log("API KEY:", api_key);

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    async function getWeather(cityName) {

        setLoading(true);
        setError("");


        try {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;

            console.log("URL:", url);

            const response = await fetch(url);

            console.log("Response status:", response.status);

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();

            console.log("Weather data:", data);


            const cityValue = data.name;
            const temperatureValue = data.main.temp;
            const feelsLikeValue = data.main.feels_like;
            const humidityValue = data.main.humidity;
            const conditionValue = data.weather[0].description;
            const weatherType = data.weather[0].main;


            const icons = {
                Clouds: "/images/cloudy.png",
                Clear: "/images/sun.png",
                Rain: "/images/rain.png",
                Snow: "/images/snow.png",
                Drizzle: "/images/rain.png",
                Thunderstorm: "/images/thunderstorm.png"
            };


            setWeather({
                city: cityValue,
                temperature: Math.round(temperatureValue),
                feelsLike: Math.round(feelsLikeValue),
                humidity: humidityValue,
                condition: conditionValue,
                icon: icons[weatherType] || "/images/cloudy.png"
            });

        } catch (error) {

            console.log("Error:", error);
            setError("City not found. Please enter a valid city.");
            setWeather(null);

        } finally {

            setLoading(false);

        }
    }


    return {
        weather,
        loading,
        error,
        getWeather
    };

}