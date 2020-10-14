import React, { useState, useEffect } from "react";
import { StyledButton, ContainerButton, StyledSelct } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import NewServiceCalls from "../../components/new-service-call";
import { requestBusiness } from "../../redux/action/user-service";
import { loginAction } from "../../redux/action/login";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import Card from "../../components/card";
const ServiceOrder = () => {
  const [userId, setUserId] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("Chamado");
  const { business, os } = useSelector((state) => state.userService);
  const { authen } = useSelector((state) => state.login);
  const state = useSelector((state) => state);
  const history = useHistory();
  useEffect(() => {
    authen && setUserId(jwt_decode(authen));
    authen && dispatch(requestBusiness(userId.sub, authen));
  }, [dispatch, authen, userId.sub]);

  return (
    <>
      <NewServiceCalls visibility={visibility} setVisibility={setVisibility} />
      <ContainerButton>
        {business === "Coleta" && ( // coletador
          <StyledButton
            onClick={() => {
              setStatus("Aberto");
            }}
          >
            {status === "Aberto" ? <StyledSelct>Aberto</StyledSelct> : "Aberto"}
          </StyledButton>
        )}
        {business !== "Coleta" && ( // empresa
          <StyledButton onClick={() => setVisibility(true)}>
            {status === "Chamado" ? (
              <StyledSelct>Chamado</StyledSelct>
            ) : (
              "Chamado"
            )}
          </StyledButton>
        )}

        {business === "Coleta" && ( // coletador
          <StyledButton
            onClick={() => {
              setStatus("Aceito");
            }}
          >
            {status === "Aceito" ? <StyledSelct>Aceito</StyledSelct> : "Aceito"}
          </StyledButton>
        )}

        <StyledButton
          onClick={() => {
            setStatus("Em Andamento");
          }}
        >
          {status === "Em Andamento" ? (
            <StyledSelct>Em Andamento</StyledSelct>
          ) : (
            "Em Andamento"
          )}
        </StyledButton>

        <StyledButton onClick={() => setStatus("Finalizado")}>
          {status === "Finalizado" ? (
            <StyledSelct>Finalizado</StyledSelct>
          ) : (
            "Finalizado"
          )}
        </StyledButton>

        <StyledButton
          onClick={() => {
            setStatus("Cancelado");
          }}
        >
          {status === "Cancelado" ? (
            <StyledSelct>Cancelado</StyledSelct>
          ) : (
            "Cancelado"
          )}
        </StyledButton>
      </ContainerButton>
      <Card status={status} />
    </>
  );
};

export default ServiceOrder;
