import React, { useState, useEffect } from "react";
import { StyledButton, ContainerButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { requestBusiness } from "../../redux/action/user";
import { loginAction } from "../../redux/action/login";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import Card from "../../components/card";
const ServiceOrder = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const business = useSelector((state) => state.user.business);
  const os = useSelector((state) => state.user.os);
  const token = useSelector((state) => state.authentication);
  const history = useHistory();
  useEffect(() => {
    token && setUserId(jwt_decode(token));
    token && dispatch(requestBusiness(userId.sub, token));
  }, [dispatch, token, userId.sub]);

  return (
    <>
      {console.log(token)}
      <ContainerButton>
        {business !== "Coleta" && (
          <StyledButton onClick={() => history.push("/new-service-order")}>
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
      <Card status={status} />
    </>
  );
};

export default ServiceOrder;
