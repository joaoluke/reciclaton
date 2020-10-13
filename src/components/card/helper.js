import React from "react";
import {
  Tresh,
  Location,
  StyledButton,
  TitlePrice,
  ButtonTitle,
  Rating,
  StarContainer,
  Container,
  CloseCard,
  Content,
  Title,
  CloseCointainer,
  CardTitle,
  PopUp,
  Accept,
  Decline,
  Choice,
} from "./card.styled";

import { changeCardStatus } from "../../redux/action/card-informations";

export const content = (
  status = "Aberto",
  setRating,
  rating,
  list,
  token,
  { business, os },
  popUp,
  setPopUp
) => {
  const filteredCards = os && list.filter((card) => card.id === os.id);
  switch (status) {
    case "Aberto":
      return list.map(({ contribuicao, materiais, id, status }, key) => {
        const materials = Object.values(materiais);
        const price =
          contribuicao &&
          parseInt(contribuicao).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });

        if (status === "Aberto") {
          return (
            <Container key={key}>
              <div>
                <TitlePrice>Valor:{price}</TitlePrice>
                <StyledButton
                  onClick={() => {
                    changeCardStatus(id, token, { status: "Aceito" });
                  }}
                >
                  <ButtonTitle>Aceitar</ButtonTitle>
                </StyledButton>
              </div>
            </Container>
          );
        }
      });

    case "Aceito":
      return list.map(({ contribuicao, status }, key) => {
        const price =
          contribuicao &&
          parseInt(contribuicao).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        if (status === "Aceito") {
          return (
            <>
              <CloseCointainer>
                <CloseCard onClick={() => setPopUp(true)} />
              </CloseCointainer>
              <CardTitle>{/* ? brand : */ "No Title"}</CardTitle>
              <Content>
                <Title>
                  Endereço: {/* adress && adress.street + " " + adress.city */}
                </Title>
                <Title>Materiais: {}</Title>
              </Content>
              <TitlePrice key={key} style={{ fontSize: "35px" }}>
                Valor:{price}
              </TitlePrice>
              {popUp && (
                <PopUp>
                  <TitlePrice style={{ textAlign: "left" }}>
                    Tem certeza que gostaria de cancelar o serviço?
                  </TitlePrice>
                  <Choice>
                    <Decline onClick={() => setPopUp(false)} />
                    <Accept onClick={() => setPopUp(false)} />
                  </Choice>
                </PopUp>
              )}
            </>
          );
        }
      });
    case "Em Andamento":
      return list.map(({ contribuicao, status, adress }, key) => {
        const price =
          contribuicao &&
          parseInt(contribuicao).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        if (status === "Em Andamento") {
          return (
            <>
              <CloseCointainer>
                <CloseCard onClick={() => setPopUp(true)} />
              </CloseCointainer>
              <CardTitle>{"No Title"}</CardTitle>
              <Content>
                <Title>
                  Endereço: {adress && adress.street + " " + adress.city}
                </Title>
              </Content>
              <Title>Materiais: {}</Title>
              <TitlePrice key={key}>
                <TitlePrice>Valor: {price}</TitlePrice>
                {adress && adress.state}
                <Location />
                -----------------
                <Tresh />
              </TitlePrice>
              {popUp && (
                <PopUp>
                  <TitlePrice style={{ textAlign: "left" }}>
                    Tem certeza que gostaria de cancelar o serviço?
                  </TitlePrice>
                  <Choice>
                    <Decline onClick={() => setPopUp(false)} />
                    <Accept onClick={() => setPopUp(false)} />
                  </Choice>
                </PopUp>
              )}
            </>
          );
        }
      });

    case "Finalizado":
      return list.map(({ status, id }, key) => {
        if (status === "Finalizado") {
          return (
            <>
              <StarContainer key={key}>
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
                  business === "Coleta"
                    ? changeCardStatus(id, token, {
                        "avaliacao-contratado": rating,
                      })
                    : changeCardStatus(id, token, {
                        "avaliacao-contratante": rating,
                      });
                }}
              >
                <ButtonTitle>Avaliar</ButtonTitle>
              </StyledButton>
            </>
          );
        }
      });

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
