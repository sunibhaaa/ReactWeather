function WeatherCard({ weather }) {
    return (
        <div className="weather-card">

            <h2>{weather.city}</h2>


            <img
                src={weather.icon}
                alt="Weather"
                className="weather-image" />


            <h1>{weather.temperature}°C</h1>


            <p>
                {weather.condition}
            </p>


            <div className="weather-details">

                <div className="detail-box">

                    <img
                        src="/images/thermometer_icon.png"
                        alt="Feels like"
                    />

                    <div>

                        <span>
                            {weather.feelsLike}°C
                        </span>

                        <small>
                            Feels Like
                        </small>

                    </div>

                </div>


                <div className="detail-box">

                    <img
                        src="/images/humidity_icon.png"
                        alt="Humidity"
                    />

                    <div>

                        <span>
                            {weather.humidity}%
                        </span>

                        <small>
                            Humidity
                        </small>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default WeatherCard;