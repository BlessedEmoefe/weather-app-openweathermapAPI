import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Spacer } from "../spacer/spacer.component";

const Wrapper = styled(FlexibleDiv)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: max-content;
  
  width: ${({ width }) => (width ? width : "100%")};
  @media only screen and (max-width: 800px) {
    width:100%;
  }
`;

const InnerLabel = styled.label`
  background: ${colors.white};
  min-width: 30%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.caption)};
  color: ${colors.headerShade.strong};
  text-align: center;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "0.4rem"};
  padding: 0.4rem;
  position: relative;
  z-index: 1;
  bottom: -0.9rem;
  margin-left: 3%;
`;

const Label = styled.label`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.button)};
  color: ${colors.text.strong};
  font-weight: ${fontWeights.medium};
  padding: 0 0.2rem;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  transition: top 0.5s ease-in-out;
`;

const InputContainer = styled(FlexibleDiv)`
  position: relative;
  height: max-content;
 flex-wrap:nowrap;
  border: ${({ border }) => (border ? border : `1px solid #EAEBF7`)};
  width: 100%;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "50px"};
  padding: ${({ padding }) => (padding ? padding : "0.8rem")};
  background: ${({ background }) =>
    background ? background : `${colors.white}`};
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
const LeftIconWrapper = styled(FlexibleDiv)`
  padding: 0 0.4rem;
  justify-content: center;
  height: max-content;
  width: max-content;
`;
const RightIconWrapper = styled(FlexibleDiv)`
  padding: 0 0.4rem;
  justify-content: center;
  height: max-content;
  width: max-content;
  /* margin-left: 0.4rem; */
`;

const InputStyles = styled.input`
  border: none;
  background:transparent;
  flex:1;
  min-width:70%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.button)};
  outline: none;
`;

const ErrorText = styled.div`
  width: 100%;
  text-transform: capitalize;
  color: ${colors.error};
`;

const TextAreaStyles = styled.textarea`
  border: ${({ border }) =>
    border ? border : `1px solid ${colors.headerShade.soft}`};
  height: 130px;
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  padding: 1rem;
  resize: none;
  outline: none;
  background: ${({ background }) => (background ? background : "")};
`;

const DropDownStyles = styled.select`
  border: ${({ border }) =>
    border ? border : `1px solid ${colors.headerShade.soft}`};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  color: ${colors.text.strong};
  padding: 1rem;
  outline: none;
`;

export const Input = ({
  type,
  placeholder,
  border,
  width,
  fontSize,
  borderRadius,
  background,
  error,
  name,
  label,
  labelFontSize,
  innerLabel,
  onChange,
  onInput,
  onMouseMove,
  value,
  min,
  max,
  padding,
  style,
  LeftIcon,
  RightIcon,
  ...props
}) => {
  return (
    <Wrapper paddingVertical="0" width={width}>
      {label ? (
        <>
          <Label fontSize={labelFontSize}>{label}</Label>
          <Spacer size="0.2rem" />
        </>
      ) : null}

      {innerLabel ? <InnerLabel htmlFor="">{innerLabel}</InnerLabel> : null}

      <InputContainer
        border={border}
        borderRadius={borderRadius}
        background={background}
        padding={padding}
      >
        {LeftIcon ? (
          <LeftIconWrapper>
            <LeftIcon height={fontSizes.button} width={fontSizes.button} />
          </LeftIconWrapper>
        ) : null}

        <InputStyles
          {...props}
          name={name}
          type={type}
          placeholder={placeholder}
          fontSize={fontSize}
          onChange={onChange}
          onInput={onInput}
          onMouseMove={onMouseMove}
          value={value}
          min={min}
          max={max}
          style={style}
        />

        {RightIcon ? (
          <RightIconWrapper>
            <RightIcon height={fontSizes.button} width={fontSizes.button} />
          </RightIconWrapper>
        ) : null}
      </InputContainer>
      <ErrorText>{error[name]}</ErrorText>
    </Wrapper>
  );
};

export const TextArea = ({
  type,
  placeholder,
  border,
  fontSize,
  name,
  error,
  background,
  borderRadius,
  ...props
}) => {
  return (
    <>
      <TextAreaStyles
        {...props}
        name={name}
        type={type}
        placeholder={placeholder}
        background={background}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
      />
      <ErrorText>{error[name]}</ErrorText>
    </>
  );
};
TextArea.defaultProps = {
  error: {},
};
Input.defaultProps = {
  error: {},
};

export const DropDown = ({ border, fontSize, borderRadius }) => {
  return (
    <DropDownStyles
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="vw">VW</option>
      <option value="audi" selected>
        Audi
      </option>
    </DropDownStyles>
  );
};
