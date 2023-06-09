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

  useEffect(()=>{
setLoading("initialLoad")
  },[])

  return (
    <HomeContainer>
      <Header />
      <SearchForm
        getLocation={setLocation}
        setLoading={setLoading}
        setWeatherData={setWeatherData}
      />
      <WeatherInformation weatherData={weatherData} loading={loading} />
    </HomeContainer>
  );
};

export default Home;
