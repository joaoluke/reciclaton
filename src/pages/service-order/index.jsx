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
  const token = useSelector((state) => state.authentication);

  const token2 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEByYWZhZWwuY29tLmJyIiwiaWF0IjoxNjAyMDEyNTYxLCJleHAiOjE2MDIwMTYxNjEsInN1YiI6Ijg3MiJ9.pw7tTXgG399eIKOxwsg52KCEfbFLZnYHQpTt5AIU_g0";
  const userId = jwt_decode(token2);

  useEffect(() => {}, [status]);
  dispatch(requestBusiness(userId.sub, token2));
  //console.log(userId.sub);
  //console.log(business);

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
