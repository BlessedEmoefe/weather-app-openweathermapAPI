import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const WeatherInformationContainer = styled(FlexibleDiv)`
  // background: green;
  justify-content: flex-start;
  height: max-content;
  padding: 1rem;
  border-radius: 20px;
  width: 80%;
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  

  @media only screen and (max-width: 800px) {
  }
`;

export const WeatherInformationInnerContainer = styled(FlexibleDiv)`
  // background: red;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  gap: 1rem;

  @media only screen and (max-width: 800px) {
  }
`;

export const Text = styled(Title)`
  color: #000;
  font-size: ${fontSizes.body};
`;
export const WeatherImage = styled.img`
  width: auto;
  height: 250px;
  background: blue;
`;

export const EmptyCard = styled(FlexibleDiv)`
  // background: teal;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  gap: 1rem;
`;
export const EmptyCardText = styled(Title)`
  color: #000;
  font-size: ${fontSizes.body};
`;
export const EmptyCardImage = styled.img`
  width: auto;
  height: 250px;
  // background: blue;
`;