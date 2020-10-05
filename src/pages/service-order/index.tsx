import React, { useState } from "react";
import { StyledButton, ContainerButton } from "./styled";

const ServiceOrder = () => {
  const [status, setStatus] = useState("");
  return (
    <>
      <ContainerButton>
        <StyledButton
          onClick={() => {
            setStatus("Aberto");
          }}
        >
          Aberto
        </StyledButton>
        <StyledButton
          onClick={() => {
            setStatus("Aceito");
          }}
        >
          Aceito
        </StyledButton>
        <StyledButton
          onClick={() => {
            setStatus("Em Andamento");
          }}
        >
          Em Andamento
        </StyledButton>
        <StyledButton onClick={() => setStatus("Finalizado")}>
          Finalizado
        </StyledButton>
        <StyledButton
          onClick={() => {
            setStatus("Cancelado");
          }}
        >
          Cancelado
        </StyledButton>
      </ContainerButton>
      {console.log(status)}
    </>
  );
};

export default ServiceOrder;
