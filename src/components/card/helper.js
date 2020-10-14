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

import {
  changeCardStatus,
  changeInformations,
} from "../../redux/action/card-informations";

export const materialsName = {
  rubber: "Borracha",
  electronic: "Eletrônico",
  cloth: "Tecido",
  battery: "Bateria",
  metal: "Metal",
  paper: "Papel",
  glass: "Vidro",
  plastic: "Plástico",
  organic: "Orgânico",
};

export const content = (
  status = "Aberto",
  setRating,
  rating,
  list,
  token,
  { business, os, id, brand },
  popUp,
  setPopUp,
  users
) => {
  const idUser = id;
  switch (status) {
    case "Aberto":
      return list.map(
        (
          { contribuicao, materiais, status, id, adress, contracting_name },
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
                <CardTitle>{contracting_name}</CardTitle>
                <Content>
                  <Title>
                    Endereço:{adress && adress.street + " " + adress.city}
                  </Title>
                  <Title>
                    Materiais:
                    <Title>
                      {Object.values(materiais).map((material, key) => {
                        if (material === true) {
                          return (
                            materialsName[Object.keys(materiais)[key]] + ", "
                          );
                        }
                      })}
                    </Title>
                  </Title>
                </Content>
                <TitlePrice>Valor:{price}</TitlePrice>
                <StyledButton
                  onClick={() => {
                    changeCardStatus(id, token, {
                      status: "Aceito",
                      contracted_id: idUser,
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
          {
            contribuicao,
            materiais,
            status,
            contracting_id,
            contracted_id,
            id,
            adress,
            contracting_name,
          },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          if (
            status === "Aceito" &&
            (contracting_id === idUser || contracted_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CloseCointainer>
                  <CloseCard onClick={() => setPopUp(true)} />
                </CloseCointainer>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:{adress && adress.street + " " + adress.city}
                  </Title>
                  <Title>
                    Materiais:
                    <Title>
                      {Object.values(materiais).map((material, key) => {
                        if (material === true) {
                          return (
                            materialsName[Object.keys(materiais)[key]] + ", "
                          );
                        }
                      })}
                    </Title>
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
                      <Accept
                        onClick={() => {
                          setPopUp(false);
                          changeCardStatus(id, token, {
                            status: "Cancelado",
                            cancelado: brand,
                          });
                        }}
                      />
                    </Choice>
                  </PopUp>
                )}
                {business === "Coleta" && (
                  <StyledButton
                    onClick={changeCardStatus(id, token, {
                      status: "Em Andamento",
                    })}
                  >
                    <ButtonTitle>Começar Rota</ButtonTitle>
                  </StyledButton>
                )}
              </Container>
            );
          }
        }
      );
    case "Em Andamento":
      return list.map(
        (
          {
            contribuicao,
            status,
            adress,
            contracting_id,
            contracted_id,
            id,
            materiais,
            contracting_name,
          },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          if (
            status === "Em Andamento" &&
            (contracting_id === idUser || contracted_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CloseCointainer>
                  <CloseCard onClick={() => setPopUp(true)} />
                </CloseCointainer>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:{adress && adress.street + " " + adress.city}
                  </Title>
                  <Title>
                    Materiais:
                    <Title>
                      {Object.values(materiais).map((material, key) => {
                        if (material === true) {
                          return (
                            materialsName[Object.keys(materiais)[key]] + ", "
                          );
                        }
                      })}
                    </Title>
                  </Title>
                </Content>
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
                      <Accept
                        onClick={() => {
                          setPopUp(false);
                          changeCardStatus(id, token, {
                            status: "Cancelado",
                            cancelado: brand,
                          });
                        }}
                      />
                    </Choice>
                  </PopUp>
                )}
                {business !== "Coleta" && (
                  <StyledButton
                    onClick={changeCardStatus(id, token, {
                      status: "Finalizado",
                    })}
                  >
                    {" "}
                    <ButtonTitle>Finalizar</ButtonTitle>
                  </StyledButton>
                )}
              </Container>
            );
          }
        }
      );

    case "Finalizado":
      return list.map(
        (
          {
            status,
            contracting_id,
            contracted_id,
            id,
            materiais,
            adress,
            contracting_name,
          },
          key
        ) => {
          if (
            status === "Finalizado" &&
            (contracted_id === idUser || contracting_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:{adress && adress.street + " " + adress.city}
                  </Title>
                  <Title>
                    Materiais:
                    <Title>
                      {Object.values(materiais).map((material, key) => {
                        if (material === true) {
                          return (
                            materialsName[Object.keys(materiais)[key]] + ", "
                          );
                        }
                      })}
                    </Title>
                  </Title>
                </Content>
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
        }
      );

    case "Cancelado":
      return list.map(
        (
          {
            status,
            contracting_id,
            contracted_id,
            cancelado,
            contribuicao,
            materiais,
            adress,
            contracting_name,
          },
          key
        ) => {
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          if (
            status === "Cancelado" &&
            (contracted_id === idUser || contracting_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:{adress && adress.street + " " + adress.city}
                  </Title>
                  <Title>
                    Materiais:
                    <Title>
                      {Object.values(materiais).map((material, key) => {
                        if (material === true) {
                          return (
                            materialsName[Object.keys(materiais)[key]] + ", "
                          );
                        }
                      })}
                    </Title>
                  </Title>
                </Content>
                <TitlePrice style={{ fontSize: "35px" }}>
                  Valor: {price}
                </TitlePrice>
                <Title style={{ fontSize: "23px" }}>
                  Cancelado por:{cancelado}
                </Title>
              </Container>
            );
          }
        }
      );

    default:
      return;
  }
};
