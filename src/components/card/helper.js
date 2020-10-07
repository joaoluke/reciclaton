import React from "react";
import {
  Tresh,
  Location,
  StyledButton,
  TitlePrice,
  ButtonTitle,
  PopUp,
} from "./card.styled";
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
console.log(date);
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
    case "Em andamento":
      return (
        <>
          <TitlePrice>
            <TitlePrice>Valor: {price}</TitlePrice>
            <TitlePrice>
              <TitlePrice>Hora do pedido: {hours + ":" + minutes}</TitlePrice>
            </TitlePrice>
            <Location />
            -----------------
            <Tresh />
          </TitlePrice>
          <PopUp>
            <TitlePrice style={{ textAlign: "left" }}>
              Tem certeza que gostaria de cancelar o serviço?
            </TitlePrice>
          </PopUp>
        </>
      );

    case "Cancelado":
      return (
        <>
          <TitlePrice style={{ fontSize: "35px" }}>Valor: {price}</TitlePrice>
          <TitlePrice>Data: {day + " / " + month + " / " + year}</TitlePrice>
          {<TitlePrice>Motivo: </TitlePrice>}
          {<TitlePrice>Cancelado por:</TitlePrice>}
        </>
      );

    default:
      break;
  }
};
