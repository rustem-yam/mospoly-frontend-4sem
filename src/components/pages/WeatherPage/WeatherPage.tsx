import { FC, useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL, WEATHER_DEFAULT_LAT, WEATHER_DEFAULT_LONG } from "./configs";
import { IWeatherData } from "./types";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherPage: FC = () => {
  const [lat, setLat] = useState<number>(WEATHER_DEFAULT_LAT);
  const [long, setLong] = useState<number>(WEATHER_DEFAULT_LONG);
  const [weatherData, setWeatherData] = useState<IWeatherData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  return (
    <div>
      <h1>Погода</h1>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherPage;
