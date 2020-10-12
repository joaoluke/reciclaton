import React, { useState, useEffect } from "react";

import { StyledButton, ContainerButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { requestBusiness } from "../../redux/action/user";
import { loginAction } from "../../redux/action/login";
import jwt_decode from "jwt-decode";

const ServiceOrder = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const business = useSelector((state) => state.user.business);
  const os = useSelector((state) => state.user.os);
  const token = useSelector((state) => state.authentication);

  useEffect(() => {
    token == !undefined && setUserId(jwt_decode(token));
    token == !undefined && dispatch(requestBusiness(userId.sub, token));
  }, [dispatch, token, userId.sub]);

  return (
    <>
      {console.log(token)}
      <ContainerButton>
        {business == !"Coleta" && ( // empresa
          <StyledButton onClick={() => setStatus("Chamado")}>
            Chamado
          </StyledButton>
        )}

        {business === "Coleta" && ( // coletador
          <StyledButton
            onClick={() => {
              setStatus("Aceito");
            }}
          >
            Aceito
          </StyledButton>
        )}

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
    </>
  );
};

export default ServiceOrder;
