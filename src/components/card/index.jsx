import React, { useState } from "react";
import { useSelector } from "react-redux";
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
const Card = ({ status }) => {
  const [popUp, setPopUp] = useState(false);
  const [rating, setRating] = useState(0);
  const { brand, adress } = useSelector((state) => state.card);
  const test = useSelector((state) => state);
  console.log(test);
  return (
    <Container>
      <CloseCointainer>
        <CloseCard onClick={() => setPopUp(true)} />
      </CloseCointainer>
      <CardTitle>{brand ? brand : "No Title"}</CardTitle>
      <Content>
        <Title>Endereço: {adress && adress.street + " " + adress.city}</Title>
        <Title>Materiais: {}</Title>
      </Content>
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
      {content(status, setRating, rating)}
    </Container>
  );
};

export default Card;
