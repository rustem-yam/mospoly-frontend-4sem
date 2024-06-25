import { FC, MouseEventHandler } from "react";
import { IWeatherData } from "../types";
import styles from "./WeatherCard.module.scss";

const WeatherCard: FC<{ weatherData: IWeatherData; callback: () => Promise<void> }> = ({ weatherData, callback }) => {
  const refresh: MouseEventHandler = () => {
    callback();
  };

  const currentDate = new Date().toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        <h2 className={styles.city}>{weatherData.name}</h2>
        <p className={styles.date}>{currentDate}</p>
      </div>
      <div className={styles.flex}>
        <p className={styles.temperature}>{weatherData.main.temp} &deg;C</p>
        <p className={styles.weather}>{weatherData.weather[0].main}</p>
      </div>
      <p>Восход: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("ru")}</p>
      <p>Закат: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("ru")}</p>
      <p>Влажность: {weatherData.main.humidity} %</p>
      <button className={styles.refresh} onClick={refresh}>
        Обновить
      </button>
    </div>
  );
};

export default WeatherCard;
