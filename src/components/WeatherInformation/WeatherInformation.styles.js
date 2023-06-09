import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const WeatherInformationContainer = styled(FlexibleDiv)`
  // background: red;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  padding: 2rem;
  border-radius: 20px;
  width: 80%;
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media only screen and (max-width: 800px) {
  }
`;

export const Text = styled(Title)`
  color: #000;
  font-size: ${fontSizes.body};
`;
export const WeatherImage = styled.img`
width:3rem;
height:auto;
background:blue;
`;