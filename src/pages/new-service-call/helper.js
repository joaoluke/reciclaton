export const inputData = (values, conctractor, contracted, idOs) => {
  const data = {
    contratante_id: conctractor,
    contratado_id: contracted,
    contribuicao: "n",
    quantidade_estimada: "em-sacos-de-lixo-200L",
    materiais: {
      organic: "trueOrFalse",
      plastic: "trueOrFalse",
      glass: "trueOrFalse",
      paper: "trueOrFalse",
      metal: "trueOrFalse",
      " battery": "trueOrFalse",
      cloth: "trueOrFalse",
      " electronic": "trueOrFalse",
      rubber: "trueOrFalse",
    },
    id_os: idOs,
    status: "em-aberto||aceito||em-andamento||finalizado||cancelado",
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
  return [...data, values];
};
