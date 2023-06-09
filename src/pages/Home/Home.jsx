import React,{useState,useEffect} from "react";
import { HomeContainer, Forms } from "./Home.styles";
import { Input } from "../../components/input/input.component";
import { Button } from "../../components/button/button.component";
import Header from "../../components/header/header.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

const Home = () => {
const handleWeatherSearch =()=>{

}

  return (
    <HomeContainer>
      <Header />

      <Forms>
        <Input
          width="50%"
          name="Input Location"
          // label="New Password"
          type="text"
          placeholder="Input Location"
        />
        <Button
        width="15%"
          btnText="Search"
          textTransform="capitalize"
          fontSize={fontSizes.smallBody}
          onClick={handleWeatherSearch}
          size="large"
          //   RightIcon={ArrowRightIcon}
        />
      </Forms>
    </HomeContainer>
  );
};

export default Home;
