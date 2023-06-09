import React from "react";
import {
  WeatherInformationContainer,
  WeatherInformationInnerContainer,
  EmptyCard,
  EmptyCardImage,
  EmptyCardText,
  Temperature,
  Text,
  WeatherImage,
} from "./WeatherInformation.styles";
import { Loader, PageLoader } from "../loaders/loaders.component";
import Weather from "../../assets/weather.svg";
import Weathers from '../../assets/Weathers.jpeg'

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
              src={Weather}
              alt="weather image"
            />
          )}
          <Text>
            Weather Description: {weatherData?.weather[0].description}
          </Text>
          <Text>Timezone: {weatherData?.timezone}</Text>
          <Text>Location Name: {weatherData?.name}</Text>
          <Text>Longitude: {weatherData?.coord.lon} </Text>
          <Text>Latitude: {weatherData?.coord.lat} </Text>

          <Temperature>Temperature: {weatherData?.main.temp}°C</Temperature>
          <Text>Pressure: {weatherData?.main.pressure}</Text>
          <Text>Humidity: {weatherData?.main.humidity}%</Text>
          <Text>Wind Speed: {weatherData?.wind.speed}km/h</Text>
        </WeatherInformationInnerContainer>
      )}
    </WeatherInformationContainer>
  );
};

export default WeatherInformation;
