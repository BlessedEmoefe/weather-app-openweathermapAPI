import React from "react";
import { HeaderContainer, HeaderText } from "./header.styles";

const Header = ({headerText}) => {
  return (
    <HeaderContainer>
      <HeaderText>
        {headerText ? headerText : `Global Weather Forcast`}
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
