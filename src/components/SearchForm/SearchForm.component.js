import React, { useState } from "react";
import axios from "axios";
import { SearchFormContainer } from "./SearchForm.styles";
import { Input } from "../input/input.component";
import { Button } from "../button/button.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

const SearchForm = ({ getLocation, setWeatherData, setLoading }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    getLocation(location);
  setLoading(true);
  const key = "f6cd2e6311267dff484fbe43264ea5be";
    try {
      let response = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${key}`
        )
        .then(({ data }) => {
          console.log("data", data);
          setWeatherData(data);
          console.log("location inside log", location);
        })
        .then(() => {
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //  useEffect(() => {
  //    setLoading(true);
  //    const key = "f6cd2e6311267dff484fbe43264ea5be";
  //    return async () => {
  //      try {
  //        let response = await axios
  //          .get(
  //            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  //          )
  //          .then(({ data }) => {
  //            console.log("data", data);
  //            setWeatherData(data);
  //            console.log(location);
  //          })
  //          .then(() => {
  //            setLoading(false);
  //          });
  //      } catch (err) {
  //        console.log(err);
  //      }
  //    };
  //  }, [location]);

  const handleWeatherSearch = () => {};
  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <Input
        width="50%"
        name="Input Location"
        type="text"
        placeholder="Input Location"
        border={`1px solid #1C5FAB`}
        value={location}
        onChange={handleChange}
      />
      <Button
        width="15%"
        btnText="Search"
        textTransform="capitalize"
        fontSize={fontSizes.smallTitle}
        onClick={handleSubmit}
        size="large"
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
