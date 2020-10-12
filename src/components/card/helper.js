import React from "react";
import {
  Tresh,
  Location,
  StyledButton,
  TitlePrice,
  ButtonTitle,
  Rating,
  StarContainer,
} from "./card.styled";
export const content = (status = "Aberto", setRating, rating, price) => {
  const GetRating = () => {
    console.log(rating);
  };
  switch (status) {
    case "Aberto":
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
    case "Em Andamento":
      return (
        <>
          <TitlePrice>
            <TitlePrice>Valor: {price}</TitlePrice>
            <Location />
            -----------------
            <Tresh />
          </TitlePrice>
        </>
      );

    case "Finalizado":
      return (
        <>
          <StarContainer>
            <Rating
              onClick={() => {
                setRating(1);
              }}
            />
            <Rating
              onClick={() => {
                setRating(2);
              }}
            />
            <Rating
              onClick={() => {
                setRating(3);
              }}
            />
            <Rating
              onClick={() => {
                setRating(4);
              }}
            />
            <Rating
              onClick={() => {
                setRating(5);
              }}
            />
          </StarContainer>
          <StyledButton
            onClick={() => {
              GetRating();
            }}
          >
            <ButtonTitle>Avaliar</ButtonTitle>
          </StyledButton>
        </>
      );

    case "Cancelado":
      return (
        <>
          <TitlePrice style={{ fontSize: "35px" }}>Valor: {price}</TitlePrice>
          {<TitlePrice>Motivo: </TitlePrice>}
          {<TitlePrice>Cancelado por:</TitlePrice>}
        </>
      );

    default:
      return;
  }
};
