import { useQuery } from "@tanstack/react-query";
import { getWeatherApi } from "../services/weather-api";

export function useWeather(city) {

    const query = useQuery({
        queryKey: ["weather", city],
        queryFn: async () => {

            const response = await getWeatherApi(city);
            const data = response.data;

            const icons = {
                Clouds: "/images/cloudy.png",
                Clear: "/images/sun.png",
                Rain: "/images/rain.png",
                Snow: "/images/snow.png",
                Drizzle: "/images/rain.png",
                Thunderstorm: "/images/thunderstorm.png"
            };

            return {
                city: data.name,
                temperature: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                condition: data.weather[0].description,
                icon: icons[data.weather[0].main] || "/images/cloudy.png"
            };

        },
        enabled: city !== ""
    });

    return query;

}