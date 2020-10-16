import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getService } from "../../redux/action/card-informations";

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
const date = new Date();

const dataCancelamento =
  date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
console.log(dataCancelamento);
const ConvertToCash = ({ contribuicao }) => {
  return (
    <TitlePrice>
      Valor:
      {parseInt(contribuicao).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
    </TitlePrice>
  );
};
const CardsContent = ({ status }) => {
  const [rating, setRating] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const token = useSelector((state) => state.login.authen);
  const user = useSelector((state) => state.userService);
  const dispatch = useDispatch();
  const { individual } = useSelector((state) => state.card);
  console.log(user);

  useEffect(() => {
    dispatch(getService(status));
  }, [dispatch, status]);
  return (
    <>
      {individual.map(
        (
          {
            materiais,
            contracting_name,
            adress,
            contribuicao,
            id,
            status,
            cancelado,
            contratado_id,
            contratante_id,
          },
          key
        ) => (
          <Container key={key}>
            <CloseCointainer>
              <CloseCard
                onClick={() => {
                  if (status !== "cancelado") {
                    setPopUp(true);
                  }
                }}
              />
            </CloseCointainer>
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
                        status: "cancelado",
                        cancelado: user.brand,
                      });
                    }}
                  />
                </Choice>
              </PopUp>
            )}
            <CardTitle>{contracting_name}</CardTitle>
            <Content>
              <Title>
                Endereço:
                {adress &&
                  adress.street + " " + adress.city + " " + adress.number}
              </Title>
              <Title>
                Materiais:
                <Title>
                  {Object.values(materiais).map((material, key) => {
                    if (material === true) {
                      return materialsName[Object.keys(materiais)[key]] + ", ";
                    }
                  })}
                </Title>
              </Title>
            </Content>
            <ConvertToCash contribuicao={contribuicao} />
            {status === "aberto" && (
              <StyledButton
                onClick={() => {
                  console.log(user.id);
                  changeCardStatus(id, token, {
                    status: "aceito",
                    contratado_id: user.id,
                  });
                  if (Object.values(user.os).includes(id) === false) {
                    changeInformations(user.id, token, {
                      os: [...Object.values(user.os), id],
                    });
                  }
                }}
              >
                <ButtonTitle>Aceitar</ButtonTitle>
              </StyledButton>
            )}
            {status === "aceito" && (
              <>
                {user.business === "Coleta" && (
                  <StyledButton
                    onClick={() => {
                      changeCardStatus(id, token, {
                        status: "em andamento",
                      });
                    }}
                  >
                    <ButtonTitle>Começar Rota</ButtonTitle>
                  </StyledButton>
                )}
              </>
            )}

            {status === "em andamento" && (
              <>
                <TitlePrice>
                  {adress && adress.state}
                  <Location />
                  -----------------
                  <Tresh />
                </TitlePrice>

                {user.business !== "Coleta" && status === "em andamento" && (
                  <StyledButton
                    onClick={() => {
                      changeCardStatus(id, token, {
                        status: "finalizado",
                      });
                    }}
                  >
                    <ButtonTitle>Finalizar</ButtonTitle>
                  </StyledButton>
                )}
              </>
            )}

            {status === "finalizado" && (
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
                <StyledButton onClick={() => {}}>
                  <ButtonTitle>Avaliar</ButtonTitle>
                </StyledButton>
              </>
            )}
            {status === "cancelado" && (
              <Title style={{ fontSize: "23px" }}>
                Cancelado por:{cancelado}
              </Title>
            )}
          </Container>
        )
      )}
    </>
  );
  /* switch (status) {
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
            
            if (status === "aberto") {
              return (
                <Container key={key}>
                <CardTitle>{contracting_name}</CardTitle>
                <Content>
                <Title>
                Endereço:
                {adress &&
                  adress.street + " " + adress.city + " " + adress.number}
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
                      status: "aceito",
                      contratado_id: idUser,
                    });
                    if (Object.values(os).includes(id) === false) {
                      changeInformations(idUser, token, {
                        os: [...Object.values(os), id],
                      });
                    }
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
            contratante_id,
            contratado_id,
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
            status === "aceito" &&
            (contratante_id === idUser || contratado_id === idUser)
          ) {
            return (
              <>
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
                            status: "cancelado",
                            cancelado: brand,
                          });
                        }}
                      />
                    </Choice>
                  </PopUp>
                )}
                <Container key={key}>
                  <CloseCointainer>
                    <CloseCard onClick={() => setPopUp(true)} />
                  </CloseCointainer>
                  <CardTitle>{contracting_name}</CardTitle>

                  <Content>
                    <Title>
                      Endereço:
                      {adress &&
                        adress.street + " " + adress.city + " " + adress.number}
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
                  {business === "Coleta" && (
                    <StyledButton
                      onClick={() => {
                        changeCardStatus(id, token, {
                          status: "em andamento",
                        });
                      }}
                    >
                      <ButtonTitle>Começar Rota</ButtonTitle>
                    </StyledButton>
                  )}
                </Container>
              </>
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
            contratante_id,
            contratado_id,
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
            status === "em andamento" &&
            (contratante_id === idUser || contratado_id === idUser)
          ) {
            return (
              <>
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
                            status: "cancelado",
                            cancelado: brand,
                          });
                        }}
                      />
                    </Choice>
                  </PopUp>
                )}
                <Container key={key}>
                  <CloseCointainer>
                    <CloseCard onClick={() => setPopUp(true)} />
                  </CloseCointainer>
                  <CardTitle>{contracting_name}</CardTitle>

                  <Content>
                    <Title>
                      Endereço:
                      {adress &&
                        adress.street + " " + adress.city + " " + adress.number}
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

                  {business !== "Coleta" && status === "em andamento" && (
                    <StyledButton
                      onClick={changeCardStatus(id, token, {
                        status: "finalizado",
                      })}
                    >
                      <ButtonTitle>Finalizar</ButtonTitle>
                    </StyledButton>
                  )}
                </Container>
              </>
            );
          }
        }
      );

    case "Finalizado":
      return list.map(
        (
          {
            status,
            contratante_id,
            contratado_id,
            id,
            materiais,
            adress,
            contracting_name,
            contracting_rating,
            contracted_rating,
            contribuicao,
            quantidade_estimada,
            hasPoints,
          },
          key
        ) => {
          console.log(score);
          const price =
            contribuicao &&
            parseInt(contribuicao).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });

          if (
            status === "finalizado" &&
            (contratado_id === idUser || contratante_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:
                    {adress &&
                      adress.street + " " + adress.city + " " + adress.number}
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
                  <Title>Valor do serviço: {price}</Title>
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
                    if (business === "Coleta") {
                      changeCardStatus(id, token, {
                        contracted_rating: rating,
                      });
                    } else {
                      changeCardStatus(id, token, {
                        contracting_rating: rating,
                      });
                    }
                    if (
                      contracted_rating <= 5 &&
                      contracting_rating <= 5 &&
                      hasPoints === false
                    ) {
                      const contractedSumOfPoints =
                        contracted_rating *
                        100 *
                        (contribuicao / 10 + quantidade_estimada / 100);
                      changeInformations(contratante_id, token, {
                        score: {
                          mensal: score.mensal + contractedSumOfPoints,
                          anual: score.anual + contractedSumOfPoints,
                        },
                      });
                      const contractingSumOfPoints =
                        contracting_rating *
                        100 *
                        (contribuicao / 10 + quantidade_estimada / 100);

                      changeInformations(contratado_id, token, {
                        score: {
                          mensal: score.mensal + contractingSumOfPoints,
                          anual: score.anual + contractingSumOfPoints,
                        },
                      });
                      changeCardStatus(id, token, {
                        hasPoints: true,
                      });
                    }
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
            contratante_id,
            contratado_id,
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
            status === "cancelado" &&
            (contratado_id === idUser || contratante_id === idUser)
          ) {
            return (
              <Container key={key}>
                <CardTitle>{contracting_name}</CardTitle>

                <Content>
                  <Title>
                    Endereço:
                    {adress &&
                      adress.street + " " + adress.city + " " + adress.number}
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
  } */
};
export default CardsContent;
