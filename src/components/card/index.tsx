import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

interface CardInterface {
  children: any;
  title: string;
  adress: string;
  price: number | string;
}
const Card = ({ title, price, adress, children }: CardInterface) => {
  return (
    <Container>
      <CloseCard />
      <CardTitle>{title ? title : "Coca-Cola"}</CardTitle>
      <Content>
        <Title>Endereço: {adress}</Title>
        <Title>Materiais: {children}</Title>
      </Content>
      <TitlePrice>Valor:{price}</TitlePrice>
      <StyledButton>
        <ButtonTitle
          onClick={() => {
            console.log("oi");
          }}
        >
          Aceitar
        </ButtonTitle>
      </StyledButton>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #bdf492;
  border: solid 1px #abe181;
  border-radius: 15px;
  width: calc(387px + 0.5rem);
  height: calc(400px + 15vh);
  margin: 0 auto;
  margin-top: 50px;
`;

const CardTitle = styled.div`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  font-weight: bold;
  font-size: 45px;
  text-align: center;
  margin-bottom: 10px;
`;

const CloseCard = styled(CgClose)`
  margin: 5px 5px auto;
  color: #f68c8c;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  width: calc(250px + 1rem);
  height: 290px;
  border-radius: 15px;
  background-color: whitesmoke;
`;

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 0 auto;
  margin: 10px auto;
  border: none;
  border-radius: 14px;
  padding: 3px 12px;
  background-color: #abe181;
  :hover {
    background-color: #bfe081;

    cursor: pointer;
  }
`;

const ButtonTitle = styled(CardTitle)`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin: 5px;
  font-size: 35px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const TitlePrice = styled(ButtonTitle)`
  margin: 10px;
  font-size: 30px;
`;

const Title = styled(CardTitle)`
  margin: 10px;
  font-size: 15px;
`;
