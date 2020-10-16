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
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
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

  useEffect(() => {
    dispatch(getService(status));
  }, [dispatch, status]);

  const AcceptOS = (id, newStatus) => {
    changeCardStatus(id, token, {
      status: "aceito",
      contratado_id: user.id,
    }, newStatus);
    if (Object.values(user.os).includes(id) === false) {
      changeInformations(user.id, token, {
        os: [...Object.values(user.os), id],
      });
    }
    dispatch(getService(status));

  };

  const StartRoute = (id, newStatus) => {
    changeCardStatus(id, token, {
      status: "em andamento",
    }, newStatus);
    dispatch(getService(status));

  };
  const FinishService = (id, newStatus) => {
    changeCardStatus(id, token, {
      status: "finalizado",
    }, newStatus);
    dispatch(getService(status));

  };
  const CancelOS = (id, newStatus) => {
    setPopUp(false);

    changeCardStatus(id, token, {
      status: "cancelado",
      cancelado: user.brand,
    }, newStatus);
    dispatch(getService(status));

  };
  return (
    <>
      {status !== "Aberto" && status && (
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
                contracted_rating,
                contracting_rating,
                hasPoints,
                quantidade_estimada,
                score,
              },
              key
            ) => (
                <>
                  {(contratante_id === user.id) | (contratado_id === user.id) && (
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
                      {popUp && status !== 'finalizado' && (
                        <PopUp>
                          <TitlePrice style={{ textAlign: "left" }}>
                            Tem certeza que gostaria de cancelar o serviço?
                        </TitlePrice>
                          <Choice>
                            <Decline onClick={() => setPopUp(false)} />
                            <Accept
                              onClick={() => {
                                CancelOS(id, status);
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
                            adress.street +
                            " " +
                            adress.city +
                            " " +
                            adress.number}
                        </Title>
                        <Title>
                          Materiais:
                        <Title>
                            {Object.values(materiais).map((material, key) => {
                              if (material === true) {
                                return (
                                  materialsName[Object.keys(materiais)[key]] +
                                  ", "
                                );
                              }
                            })}
                          </Title>
                        </Title>
                      </Content>
                      <ConvertToCash contribuicao={contribuicao} />

                      {status === "aceito" && (
                        <>
                          {user.business === "Coleta" && (
                            <StyledButton
                              onClick={() => {
                                StartRoute(id, status);
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

                          {user.business !== "Coleta" &&
                            status === "em andamento" && (
                              <StyledButton
                                onClick={() => {
                                  FinishService(id, status);
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
                          <StyledButton
                            onClick={() => {
                              if (user.business === "Coleta") {
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
                                    mensal: user.score.mensal + contractedSumOfPoints,
                                    anual: user.score.anual + contractedSumOfPoints,
                                  },
                                });
                                const contractingSumOfPoints =
                                  contracting_rating *
                                  100 *
                                  (contribuicao / 10 + quantidade_estimada / 100);

                                changeInformations(contratado_id, token, {
                                  score: {
                                    mensal: user.score.mensal + contractingSumOfPoints,
                                    anual: user.score.anual + contractingSumOfPoints,
                                  },
                                });
                                changeCardStatus(id, token, {
                                  hasPoints: true,
                                });
                                NotificationManager.success(
                                  "Boa!!",
                                  "Avaliação e pontuação atribuidas com sucesso, para confirmar sua pontuação, vá até seu perfil",
                                  1000
                                );
                              }
                            }}
                          >
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
                  )}
                </>
              )
          )}
        </>
      )}
      {status === "Aberto" && (
        <>
          {individual.map(
            (
              {
                contracting_name,
                adress,
                materiais,
                contribuicao,
                id,
                contratante_id,
              },
              key
            ) => (
                <>
                  {contratante_id !== user.id && (
                    <Container key={key}>
                      <CardTitle>{contracting_name}</CardTitle>
                      <Content>
                        <Title>
                          Endereço:
                        {adress &&
                            adress.street +
                            " " +
                            adress.city +
                            " " +
                            adress.number}
                        </Title>
                        <Title>
                          Materiais:
                        <Title>
                            {Object.values(materiais).map((material, key) => {
                              if (material === true) {
                                return (
                                  materialsName[Object.keys(materiais)[key]] +
                                  ", "
                                );
                              }
                            })}
                          </Title>
                        </Title>
                      </Content>
                      <ConvertToCash contribuicao={contribuicao} />
                      <StyledButton
                        onClick={() => {
                          AcceptOS(id, status);
                        }}
                      >
                        <ButtonTitle>Aceitar</ButtonTitle>
                      </StyledButton>
                    </Container>
                  )}
                </>
              )
          )}
        </>
      )}
      <NotificationContainer />
    </>
  );
};
export default CardsContent;
