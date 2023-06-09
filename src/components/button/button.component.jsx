import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors.js";
import { fontWeights, fontSizes } from "../../infrastructure/theme/fonts";
import { Text } from "../typography/text.component.js";
// import { Loader } from "../loaders/loaders.component";

export const ButtonStyles = styled.button`
  cursor: pointer;
  width: ${({ width }) => (width ? width : " 100%")};
  min-width: max-content;
  background: ${({ background }) =>
    background
      ? background
      : "linear-gradient(122.03deg, #007DCB 42.62%, #002069 152.63%)"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "0px 15px 50px rgba(222, 95, 143, 0.12)"};
  border: ${({ border }) => (border ? border : "0px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "50px"};
  padding: ${({ paddingVertical }) =>
      paddingVertical ? paddingVertical : "0.6rem"}
    ${({ paddingHorizontal }) =>
      paddingHorizontal ? paddingHorizontal : "1rem"};
  color: ${({ btnColor }) => (btnColor ? btnColor : colors.white)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled(Text)`
  padding: 0 0.5rem;
  color: ${({ btnColor }) => (btnColor ? btnColor : colors.white)};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.bold};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.button)};
`;

export const Button = ({
  btnText,
  background,
  border,
  borderRadius,
  boxShadow,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  onClick,
  loading,
  RightIcon,
  LeftIcon,
  iconSize,
  paddingHorizontal,paddingVertical,
  disabled,
  width,
}) => {
  return (
    <ButtonStyles
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      boxShadow={boxShadow}
      width={width}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      {LeftIcon ? (
        <LeftIcon
          color={btnColor ? btnColor : colors.white}
          size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
      <BtnText
        btnColor={btnColor}
        textTransform={textTransform}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {btnText}
      </BtnText>

      {RightIcon ? (
        <RightIcon
          color={btnColor ? btnColor : colors.white}
          size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
    </ButtonStyles>
  );
};
