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
      {content(status)}
    </Container>
  );
};

export default Card;
