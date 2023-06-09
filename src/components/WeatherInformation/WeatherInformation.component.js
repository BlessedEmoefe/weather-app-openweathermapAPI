import React from "react";
import {
  WeatherInformationContainer,
  Text,
  WeatherImage,
} from "./WeatherInformation.styles";

const WeatherInformation = ({ weatherData }) => {
  if (!weatherData) return <p>Loading Data...</p>;
  return (
    <WeatherInformationContainer>
      {weatherData.weather.icon && (
        <WeatherImage
          src={`https://openweathermap.org/img/w/${weatherData.weather.icon}.png`}
          alt="weather image"
        />
      )}
      <Text>{weatherData.weather.description}</Text>
      <Text> {weatherData.timezone}</Text>
      <Text> {weatherData.name}</Text>
      <Text> {weatherData.coord.lon} </Text>
      <Text> {weatherData.coord.lat} </Text>

      <Text>{weatherData.main.temp}</Text>
      <Text>{weatherData.main.pressure}</Text>
      <Text>{weatherData.main.humidity}</Text>
      <Text>{weatherData.wind.speed}</Text>
    </WeatherInformationContainer>
  );
};

export default WeatherInformation;
