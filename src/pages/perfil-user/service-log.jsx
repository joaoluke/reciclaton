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
            ({ status, contratante_id }) =>
              status === "finalizado" && contratante_id === parseInt(userId)
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
    }
  }
  
  const material = (data) => {
    const types = []
    for(let type in data ){
      if(data[type]){
        types.push(tradutor(type));
      }
    }
    return types.join(" ")
  }

  useEffect(() => {}, [services]);
  return (
    <StyledContainer>
      <StyledCardContainer>
        {services &&
          services.map(
            ({ contribuicao, quantidade_estimada, materiais }, key) => (
              <StyledCards key={key}>
                <p>Contribuição: {contribuicao}</p>
                <p>Quantidade: {quantidade_estimada}</p>
                <p>Materiais: {material(materiais)}</p>
              </StyledCards>
            )
          )}
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default ServiceLog;

const StyledCards = styled.div`
  width: 33vw;
  height: 125px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px 5px rgba(0, 0, 0, 0.1) inset;
  padding: 10px;
  background-color: #68A428;
  color: white;
  margin: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const StyledCardContainer = styled.div`
  flex-flow: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 225px;
`;