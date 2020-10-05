import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

interface CardInterface {
  children: any;
}
const Card = ({ children }: CardInterface) => {
  return (
    <Container>
      <CloseCard />
      <CardTitle>{"Coca-Cola"}</CardTitle>
      {children}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #bdf492;
  border: solid 1px #abe181;
  border-radius: 15px;
  width: calc(387px + 0.5rem);
  height: calc(381px + 15vh);
  margin: 0 auto;
  margin-top: 50px;
`;

const CardTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 29px;
`;

const CloseCard = styled(CgClose)`
  color: #f68c8c;
  font-size: 25px;
  :hover {
    cursor: pointer;
  }
  text-align: right;
`;
