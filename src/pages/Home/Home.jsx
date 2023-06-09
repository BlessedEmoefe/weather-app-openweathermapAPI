import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomeContainer, Forms } from "./Home.styles";
import Header from "../../components/header/header.component";
import { fontSizes } from "../../infrastructure/theme/fonts";
import SearchForm from "../../components/SearchForm/SearchForm.component";
import WeatherInformation from "../../components/WeatherInformation/WeatherInformation.component";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("");

  // const getLocation = (location)=>{
  //  setLocation(location)
  // }
  useEffect(() => {
    setLoading(true);
    const key = "f6cd2e6311267dff484fbe43264ea5be";
    return async () => {
      try {
        let response = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
          )
          .then(({ data }) => {
            console.log("data", data);
            setWeatherData(data);
            console.log(location);
          })
          .then(() => {
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    };
  }, [location]);

  useEffect(() => {
    console.log("weatherData", weatherData);
    // setLoading(true);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <SearchForm getLocation={setLocation} />
      <WeatherInformation weatherData={weatherData} />
    </HomeContainer>
  );
};

export default Home;
