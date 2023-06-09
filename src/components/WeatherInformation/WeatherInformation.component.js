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
          {weatherData?.weather.icon && (
            <WeatherImage
              src={`https://openweathermap.org/img/w/${weatherData?.weather.icon}.png`}
              alt="weather image"
            />
          )}
          <Text>{weatherData?.weather.description}</Text>
          <Text> {weatherData?.timezone}</Text>
          <Text> {weatherData?.name}</Text>
          <Text> {weatherData?.coord.lon} </Text>
          <Text> {weatherData?.coord.lat} </Text>

          <Text>{weatherData?.main.temp}</Text>
          <Text>{weatherData?.main.pressure}</Text>
          <Text>{weatherData?.main.humidity}</Text>
          <Text>{weatherData?.wind.speed}</Text>
        </WeatherInformationInnerContainer>
      )}
    </WeatherInformationContainer>
  );
};

export default WeatherInformation;
