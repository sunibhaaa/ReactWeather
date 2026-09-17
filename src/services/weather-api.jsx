import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY;

export function getWeatherApi(city) {

    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    );

}