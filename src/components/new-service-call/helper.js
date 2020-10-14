import React from "react";

export const inputData = (values, conctractor, idOs) => {
  const os = {
    contratante_id: conctractor,
    contratado_id: "n",
    contribuicao: values.contribuicao,
    quantidade_estimada: values.quantidade_estimada,
    materiais: values.materiais,
    id: idOs,
    status: "Aberto",
    "avaliacao-contratado": "n",
    "avaliacao-contratante": "n",
    "endereço-de-busca": {
      street: "Avenida Marquês de São Vicente",
      number: 43,
      neighborhood: "Jardim Paulista",
      zip: "25052872",
      city: "Santa Bárbara",
      state: "BA",
    },
  };

  console.log(os);

  return os;
};
