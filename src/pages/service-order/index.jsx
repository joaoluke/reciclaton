import React, { useState, useEffect } from "react";

import { StyledButton, ContainerButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { requestBusiness } from "../../redux/action/user";
import { loginAction } from "../../redux/action/login";
import jwt_decode from "jwt-decode";

const ServiceOrder = () => {
  const [status, setStatus] = useState("");
  const business = useSelector((state) => state.user);
  const token = useSelector((state) => state.authentication);
  const [decode, setDecode] = useState();
  const userId = jwt_decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEByYWZhZWwuY29tLmJyIiwiaWF0IjoxNjAxOTI5ODMwLCJleHAiOjE2MDE5MzM0MzAsInN1YiI6Ijg3MiJ9.jp9THO7eBScUktm4Nie-SSBJf-NzpTCg2EWyu7jODWo"
  );
  
  useEffect( () => {

  }[status])
  
  dispatch(requestUserBooks(userId));
  console.log(userId.sub);
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
