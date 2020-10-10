import React, { useState } from "react";
import { Box } from "./new-service.style";
import { Title } from "./new-service.style";
import { useForm } from "react-hook-form";
import { addService } from "../../redux/action/card-informations";
import { useDispatch, useSelector } from "react-redux";
import { inputData } from "./helper";
import { useHistory } from "react-router-dom";
const materiais = {
  organic: false,
  plastic: false,
  glass: false,
  paper: false,
  metal: false,
  battery: false,
  cloth: false,
  electronic: false,
  rubber: false,
};

const NewServiceCalls = () => {
  const [materialsError, setMaterialsError] = useState(false);
  const [doneMessage, setDoneMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.card);
  console.log(services.length);
  const history = useHistory();
  const changeMaterials = (data) => {
    for (let type in materiais) {
      data &&
        data.name === type &&
        data.checked &&
        (materiais[data && data.name] = data && data.checked);
    }
  };

  const onSubmit = (data) => {
    !Object.values(materiais).includes(true)
      ? setMaterialsError(true)
      : dispatch(
          addService(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEByYWZhZWwuY29tLmJyIiwiaWF0IjoxNjAyMzU3ODcxLCJleHAiOjE2MDIzNjE0NzEsInN1YiI6Ijg3MiJ9.5af0VetZ_CXcfkXSt_DIZEU6MlpN-kwM_3mNzutEByI",
            inputData(
              { ...data, materiais },
              100,
              services && services.length + 1
            )
          )
        );
  };
  return (
    <Box>
      <Title>Title</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Valor para a coleta </label>
        <input
          type="number"
          placeholder="Ponha um valor para a coleta"
          name="contribuicao"
          ref={register({ required: "true", min: 0 })}
        />
        <div>
          {errors.contribuicao?.type === "required" &&
            "Esse espaço não pode estar vazio"}
          {errors.contribuicao?.type === "min" &&
            "O valor mínimo é 0, por favor coloque um valor igual ou acima do mínimo"}
        </div>
        <h2>Materiais para a coleta</h2>
        <input ref={changeMaterials} type="checkbox" name="organic"></input>
        <label>Orgânico</label>

        <input ref={changeMaterials} type="checkbox" name="plastic"></input>
        <label>Plástico</label>

        <input ref={changeMaterials} type="checkbox" name="glass"></input>
        <label>Vidro</label>

        <input ref={changeMaterials} type="checkbox" name="paper"></input>
        <label>Papel</label>

        <input ref={changeMaterials} type="checkbox" name="metal"></input>
        <label>Metal</label>

        <input ref={changeMaterials} type="checkbox" name="battery"></input>
        <label>Bateria</label>

        <input ref={changeMaterials} type="checkbox" name="cloth"></input>
        <label>Tecido</label>

        <input ref={changeMaterials} type="checkbox" name="electronic"></input>
        <label>Eletrônico</label>

        <input ref={changeMaterials} type="checkbox" name="rubber"></input>
        <label>Borracha</label>

        <label>Quantidade do Material para a coleta em sacos/200L </label>
        <input
          type="number"
          placeholder="Ponha a quantidade da coleta"
          name="quantidade_estimada"
          ref={register({ required: "true" })}
        />
        <div>
          {errors.quantidade_estimada?.type === "required" &&
            "Esse espaço não pode estar vazio"}
        </div>
        {materialsError && <p>Por favor selecionar 1 material</p>}
        <input type="submit" />
      </form>
    </Box>
  );
};

export default NewServiceCalls;
