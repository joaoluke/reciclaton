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

import { useSelector } from "react-redux";

import {
  changeCardStatus,
  changeInformations,
} from "../../redux/action/card-informations";

export const content = (
  status = "Aberto",
  setRating,
  rating,
  list,
  token,
  { business, os, id, brand },
  popUp,
  setPopUp
) => {
  const idUser = id;
  switch (status) {
    case "Aberto":
      return list.map(
        (
          { contribuicao, materiais, status, id, adress },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });

          if (status === "Aberto") {
            return (
              <Container key={key}>
                <CardTitle>{/* ? brand : */ "No Title"}</CardTitle>
                <Content>
                  <Title>
                    Endereço:{" "}
                    {/* adress && adress.street + " " + adress.city */}
                  </Title>
                  <Title>Materiais:</Title>
                  <Title>
                    {Object.values(materiais).map((material, key) => {
                      if (material === true) {
                        return Object.keys(materiais)[key] + ",";
                      }
                    })}
                  </Title>
                </Content>

                <TitlePrice>Valor:{price}</TitlePrice>
                <StyledButton
                  onClick={() => {
                    changeCardStatus(id, token, {
                      status: "Aceito",
                      contratado_id: idUser,
                    });
                    changeInformations(idUser, token, { os: { id: id } });
                  }}
                >
                  <ButtonTitle>Aceitar</ButtonTitle>
                </StyledButton>
              </Container>
            );
          }
        }
      );

    case "Aceito":
      return list.map(
        (
          { contribuicao, materiais, status, contratante_id, contratado_id, id },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          if (
            status === "Aceito" && (contratante_id === idUser ||
              contratado_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CloseCointainer>
                  <CloseCard onClick={() => setPopUp(true)} />
                </CloseCointainer>
                <CardTitle>{/* ? brand : */ "No Title"}</CardTitle>
                <Content>
                  <Title>
                    Endereço:{" "}
                    {/* adress && adress.street + " " + adress.city */}
                  </Title>
                  <Title>
                    Materiais:
                    {Object.values(materiais).map((material, key) => {
                    if (material === true) {
                      return Object.keys(materiais)[key];
                    }
                  })}
                  </Title>
                </Content>
                <TitlePrice style={{ fontSize: "35px" }}>
                  Valor:{price}
                </TitlePrice>
                {popUp && (
                  <PopUp>
                    <TitlePrice style={{ textAlign: "left" }}>
                      Tem certeza que gostaria de cancelar o serviço?
                    </TitlePrice>
                    <Choice>
                      <Decline onClick={() => setPopUp(false)} />
                      <Accept onClick={() => {
                        setPopUp(false)
                        changeCardStatus(id, token, { status: 'Cancelado', cancelado: brand })
                      }
                      } />
                    </Choice>
                  </PopUp>
                )}
                {business === 'Coleta' && (
                  <StyledButton onClick={changeCardStatus(id, token, { status: 'Em Andamento' })}> <ButtonTitle>Começar Rota</ButtonTitle></StyledButton>
                )}
              </Container>
            );
          }
        }
      );
    case "Em Andamento":
      return list.map(
        (
          { contribuicao, status, adress, contratante_id, contratado_id, id },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          if (
            status === "Em Andamento" && (contratante_id === idUser ||
              contratado_id === idUser)
          ) {
            return (
              <Container key={key}>
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
                <TitlePrice>
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
                      <Accept onClick={() => {
                        setPopUp(false)
                        changeCardStatus(id, token, { status: 'Cancelado', cancelado: brand })

                      }} />
                    </Choice>
                  </PopUp>
                )}
                {business !== 'Coleta' && (
                  <StyledButton onClick={changeCardStatus(id, token, { status: 'Finalizado' })}> <ButtonTitle>Finalizar</ButtonTitle></StyledButton>
                )}
              </Container>
            );
          }
        }
      );

    case "Finalizado":
      return list.map(({ status, contratante_id, contratado_id }, key) => {
        if (
          status === "Finalizado" && (contratado_id === idUser || contratante_id === idUser)) {
          return (
            <Container key={key}>
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
            </Container>
          );
        }
      });

    case "Cancelado":
      return list.map(({ status, contratante_id, contratado_id, cancelado, contribuicao }, key) => {
        const price =
          contribuicao &&
          parseInt(contribuicao).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        if (
          status === "Cancelado" &&
          (contratado_id === idUser || contratante_id === idUser)
        ) {
          return (
            <Container key={key}>

              <CardTitle>{"No Title"}</CardTitle>
              <Content>
                <Title>
                  Endereço:
                </Title>
              </Content>
              <TitlePrice style={{ fontSize: "35px" }}>Valor: {price}</TitlePrice>
              <Title style={{ fontSize: "23px" }}>Cancelado por:{cancelado}</Title>
            </Container>
          );
        }
      });

    default:
      return;
  }
};
