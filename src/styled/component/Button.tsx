import React, { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";
import { palette, PaletteKeyTypes } from "./palette";

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  fontColor?: PaletteKeyTypes;
  fontSize?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({
    width = "auto",
    height = "auto",
    buttonColor = "white",
    hasBorder = false,
    borderColor = "white",
    borderRadius = "4px",
    fontColor = "black",
    fontSize = "14px",
    theme,
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${theme.color.test == "dark" ? "skyblue" : "pink"};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    border-radius: ${borderRadius};
    color: ${palette[fontColor]};
    font-size: ${fontSize};
  `}
`;

export default Button;
