import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { content } from "./helper";
import decode from "jwt-decode";
import {
  changeInformations,
  getServices,
} from "../../redux/action/card-informations";
import { requestBusiness } from "../../redux/action/user-service";
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
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.authen);
  const { list } = useSelector((state) => state.card);
  const { brand, id, business, adress } = useSelector(
    (state) => state.userService
  );

  useEffect(() => {
    dispatch(getServices());
    if (!brand) {
      dispatch(requestBusiness(decode(token).sub, token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, dispatch]);
  const [rating, setRating] = useState(0);
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
        {content(status, setRating, rating, list)}
      </div>
    </Container>
  );
};

export default Card;
