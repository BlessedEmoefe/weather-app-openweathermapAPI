import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Title } from "../../components/typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HomeContainer = styled(FlexibleDiv)`
  padding: 0;
  /* background:red; */
  flex-direction:column;
  justify-content:flex-start;
  min-height:100vh;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
  }
`;
export const Forms = styled.form`
 
`;
