import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ServiceLog = () => {
  const { userId } = useParams();
  const [services, setServices] = useState(() => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/services/")
      .then(({ data }) =>
        setServices(
          data.filter(
            ({ status, contratante_id }) =>
              status === "Cancelado" && contratante_id === parseInt(userId)
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
  console.log(services)
  return (
    <>
      {services &&
        services.map(
          ({ contribuicao, quantidade_estimada, materiais }, key) => (
            <div key={key}>
              <p>Contribuição: {contribuicao}</p>
              <p>Quantidade: {quantidade_estimada}</p>
              <p>Materiais: {material(materiais)}</p>
            </div>
          )
        )}
    </>
  );
};

export default ServiceLog;
