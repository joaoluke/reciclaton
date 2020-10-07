import React from "react";
import { StyledButton, TitlePrice, ButtonTitle } from "./card.styled";
export const content = (status, price) => {
  switch (status) {
    case "aberto":
      return (
        <>
          <TitlePrice>Valor:{price}</TitlePrice>
          <div>
            <StyledButton
              onClick={() => {
                console.log("oi");
              }}
            >
              <ButtonTitle>Aceitar</ButtonTitle>
            </StyledButton>
          </div>
        </>
      );
    case "Aceito":
      return (
        <TitlePrice style={{ fontSize: "35px" }}>Valor:{price}</TitlePrice>
      );

    default:
      break;
  }
};
