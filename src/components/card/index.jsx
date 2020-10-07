import React, { useState } from "react";
import { content } from "./helper";
import {
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
  TitlePrice,
} from "./card.styled";
const Card = ({ status, title, price, adress, children }) => {
  const [popUp, setPopUp] = useState(false);
  const [rating, setRating] = useState(0);

  const inputData = (values, conctractor, contracted, idOs) => {
    const data = {
      contratante_id: conctractor,
      contratado_id: contracted,
      contribuicao: "n",
      quantidade_estimada: "em-sacos-de-lixo-200L",
      materiais: {
        organic: "trueOrFalse",
        plastic: "trueOrFalse",
        glass: "trueOrFalse",
        paper: "trueOrFalse",
        metal: "trueOrFalse",
        " battery": "trueOrFalse",
        cloth: "trueOrFalse",
        " electronic": "trueOrFalse",
        rubber: "trueOrFalse",
      },
      id_os: idOs,
      status: "em-aberto||aceito||em-andamento||finalizado||cancelado",
      "avaliacao-contratado": "n",
      "avaliacao-contratante": "n",
      "endereço-de-busca": {
        street: "Avenida Marquês de São Vicente",
        number: 43,
        neighborhood: "Jardim Paulista",
        zip: "25052872",
        city: "Santa Bárbara",
        state: "BA",
      },
    };
    return [...data, values];
  };

  const aberto = "aberto";

  return (
    <Container>
      <CloseCointainer>
        <CloseCard onClick={() => setPopUp(true)} />
      </CloseCointainer>
      <CardTitle>{title ? title : "No Title"}</CardTitle>
      <Content>
        <Title>Endereço: {adress}</Title>
        <Title>Materiais: {children}</Title>
      </Content>
      {content("Finalizado", setRating, rating)}
      <div>
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
      </div>
    </Container>
  );
};

export default Card;
