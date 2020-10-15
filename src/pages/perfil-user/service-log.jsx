import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components"

const ServiceLog = () => {
  const { userId } = useParams();
  const [services, setServices] = useState(() => {
    axios
      .get("https://reciclatonapi.herokuapp.com/services/")
      .then(({ data }) =>
        setServices(
          data.filter(
            ({ status, contratante_id, contratado_id }) =>
              status === "finalizado" && (contratante_id === parseInt(userId) || contratado_id === parseInt(userId))
          )
        )
      )
      .catch(({ response }) => setServices(response));
  });
  const tradutor = (data) => {
    switch (data) {
      case "organic":
        return "Organico";
      case "plastic":
        return "Plastico";
      case "glass":
        return "Vidro";
      case "paper":
        return "Papel";
      case "metal":
        return "Metal";
      case "baterry":
        return "Bateria";
      case "cloth":
        return "Tecido";
      case "eletronic":
        return "Eletronico";
      case "rubber":
        return "Borracha";
      default:
    }
  }

  const material = (data) => {
    const types = []
    for (let type in data) {
      if (data[type]) {
        types.push(tradutor(type));
      }
    }
    const typesWOUndefined = types.filter((type) => typeof type !== "undefined")
    return typesWOUndefined.join(", ")
  }

  useEffect(() => { }, [services]);
  return (
    <StyledCardContainer>
      <h1 style={{ width: "98vw" }}>LOG de Serviços:</h1>
      {services &&
        services.map(
          ({ contribuicao, quantidade_estimada, materiais }, key) => (
            <StyledCards key={key}>
              <p>Contribuição: {contribuicao}</p>
              <p>Quantidade: {quantidade_estimada}</p>
              <p>Materiais: {material(materiais)}.</p>
            </StyledCards>
          )
        )}
    </StyledCardContainer>

  );
};

export default ServiceLog;

const StyledCards = styled.div`
  width: 45vw;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px 5px rgba(0, 0, 0, 0.1) inset;
  padding: 10px;
  background-color: #68A428;
  color: white;
  margin: 5px 2px;
  margin-bottom: 0;
  text-align: center;
  h1, p{
    margin-bottom: 0;
  }
`;

const StyledCardContainer = styled.div`
display: flex;
  margin: 1px auto;
  margin-bottom: 0;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 99.5vw;
  background-color:#e1f3ce;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 1px;
  padding: 0 2vw;
  padding-bottom: 4vh;
  min-height: 37.2vh;
  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`;
