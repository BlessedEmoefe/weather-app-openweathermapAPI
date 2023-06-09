import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { SearchBarWrapper } from "./searchBar.styles";
import { truncate } from "../../infrastructure/lib/utilities";
import { SearchIcon } from "../../assets/svg";

export const SearchBar = ({
  placeholder="Please input your search keywords",
  handleChange,
  fullWidth = true,
  height,
  xl = false,
  color = colors.black.strong,
}) => {
  return (
    <FlexibleDiv paddingVertical="0">
      <SearchBarWrapper
        fullWidth={fullWidth}
        height={height}
        xl={xl}
        color={color}
      >
        
        <div className="svgWrapper">
          <SearchIcon width={"1rem"} height={"1rem"} />
        </div>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          placeholder={truncate(placeholder, 30)}
        />
      </SearchBarWrapper>
    </FlexibleDiv>
  );
};
