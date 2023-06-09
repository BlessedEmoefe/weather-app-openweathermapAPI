import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SearchFormContainer = styled.form`
  padding: 0;
  width: 80%;
  display: flex;
  justify-content: center;
  // background: teal;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
  }
`;
