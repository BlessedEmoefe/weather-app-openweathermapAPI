import React from "react";
import {
  WeatherInformationContainer,
  WeatherInformationInnerContainer,
  EmptyCard,
  EmptyCardImage,
  EmptyCardText,
  Text,
  WeatherImage,
} from "./WeatherInformation.styles";
import { Loader, PageLoader } from "../loaders/loaders.component";
import Weather from "../../assets/weather.svg";

const WeatherInformation = ({ weatherData, loading }) => {
  return (
    <WeatherInformationContainer>
      {loading === "initialLoad" ? (
        <EmptyCard>
          <EmptyCardImage src={Weather} alt="Empty Card Image" />
          <EmptyCardText>Search For Weather through Locations</EmptyCardText>
        </EmptyCard>
      ) : loading === true ? (
        <Loader />
      ) : (
        <WeatherInformationInnerContainer>
          {weatherData?.weather[0].icon && (
            <WeatherImage
              src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
              alt="weather image"
            />
          )}
          <Text>Weather Description: {weatherData?.weather[0].description}</Text>
          <Text>Timezone: {weatherData?.timezone}</Text>
          <Text>Location Name: {weatherData?.name}</Text>
          <Text>Longitude: {weatherData?.coord.lon} </Text>
          <Text>Latitude: {weatherData?.coord.lat} </Text>

          <Text>Temperature: {weatherData?.main.temp}</Text>
          <Text>Pressure: {weatherData?.main.pressure}</Text>
          <Text>Humidity: {weatherData?.main.humidity}</Text>
          <Text>Wind Speed: {weatherData?.wind.speed}</Text>
        </WeatherInformationInnerContainer>
      )}
    </WeatherInformationContainer>
  );
};

export default WeatherInformation;
