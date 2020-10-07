import React, { useState, useEffect } from "react";

import { StyledButton, ContainerButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { requestBusiness } from "../../redux/action/user";
import { loginAction } from "../../redux/action/login";
import jwt_decode from "jwt-decode";

const ServiceOrder = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const business = useSelector((state) => state.user);
  const token = useSelector((state) => state.login.authen);

  const token2 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdGF0aW5oYUBnbWFpbC5jb20iLCJpYXQiOjE2MDIwODE4NTYsImV4cCI6MTYwMjA4NTQ1Niwic3ViIjoiODczIn0.fZctgbVbNT9zSkNUGvArCm8J4YC5PeutwEqyTZBMkEM";
  const userId = parseInt(jwt_decode(token2).sub);

  useEffect(() => {}, [status]);
  dispatch(requestBusiness(userId, token2));
  console.log(userId);
  console.log(business);
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
