import React from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const inputData = (values, conctractor, idOs) => {
  const os = {
    contratante_id: conctractor,
    contratado_id: "n",
    contribuicao: values.contribuicao,
    quantidade_estimada: values.quantidade_estimada,
    materiais: values.materiais,
    id: idOs,
    status: "em-aberto",
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

export const openNotification = () => {
  notification.open({
    message: "Boa!",
    description: "Seu cadastro foi enviado com sucesso",
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};
