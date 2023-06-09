import React, { useState } from "react";
import { SearchFormContainer } from "./SearchForm.styles";
import { Input } from "../input/input.component";
import { Button } from "../button/button.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

const SearchForm = ({ getLocation }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getLocation(location);
  };

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
        onClick={handleWeatherSearch}
        size="large"
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
