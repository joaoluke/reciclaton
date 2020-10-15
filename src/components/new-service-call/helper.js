import React from "react";

export const inputData = (values, { brand, id, adress }, idOs) => {
  const os = {
    contracting_name: brand,
    contratante_id: id,
    contratado_id: "n",
    contribuicao: values.contribuicao,
    quantidade_estimada: values.quantidade_estimada,
    materiais: values.materiais,
    id: idOs,
    status: "aberto",
    contracting_rating: "n",
    contracted_rating: "n",
    adress: {
      street: adress.street,
      number: adress.number,
      neighborhood: adress.neighborhood,
      zip: adress.zip,
      city: adress.city,
      state: adress.state,
    },
  };

  console.log(os);

  return os;
};
