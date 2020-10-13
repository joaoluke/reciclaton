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

import { changeCardStatus } from "../../redux/action/card-informations";

export const content = (status = "Aberto", setRating, rating, list) => {
  const GetRating = () => {
    console.log(rating);
  };
  switch (status) {
    case "Aberto":
      list.map(({ contribuicao, status }, key) => {
        const price =
          contribuicao &&
          contribuicao.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        return (
          <div key={key}>
            <TitlePrice>Valor:{price}</TitlePrice>
            <StyledButton
              onClick={() => {
                changeCardStatus("Aceito");
              }}
            >
              <ButtonTitle>Aceitar</ButtonTitle>
            </StyledButton>
          </div>
        );
      });

      break;

    case "Aceito":
      return <TitlePrice style={{ fontSize: "35px" }}>Valor:{}</TitlePrice>;
    case "Em Andamento":
      return (
        <>
          <TitlePrice>
            <TitlePrice>Valor: {}</TitlePrice>
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
          <TitlePrice style={{ fontSize: "35px" }}>Valor: {}</TitlePrice>
          {<TitlePrice>Motivo: </TitlePrice>}
          {<TitlePrice>Cancelado por:</TitlePrice>}
        </>
      );

    default:
      return;
  }
};
