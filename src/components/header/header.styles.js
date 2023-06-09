import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text,Title } from "../typography/text.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HeaderContainer = styled(FlexibleDiv)`
  background-color: #d2e3f0;
  padding: 1rem 4%;
  justify-content:center;
  /* background:red; */
  /* z-index: 100; */
  /* transition: 300ms ease-in-out; */
  /* height: 60px; */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderText = styled(Title)`
  color: #000;
  font-size: ${fontSizes.h2};

`;