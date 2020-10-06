import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledButton, ContainerButton } from "./styled";

const ServiceOrder = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reciclatonapi.herokuapp.com/664/users/1`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEByYWZhZWwuY29tLmJyIiwiaWF0IjoxNjAxOTI5NTY5LCJleHAiOjE2MDE5MzMxNjksInN1YiI6Ijg3MiJ9.NXsfWJRnccxep1dHzq7vyIjit6J7zsSi2AxYqXbhJYI",
        },
      })

      .then((resp) => {
        setData(resp.data.business);
        console.log("data: " + data);
      })
      .catch((error) => {
        // erro no request
        console.log(error);
      });
  }, [status]);

  console.log("data: " + data);

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
