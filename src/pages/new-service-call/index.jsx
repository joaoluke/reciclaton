import React, { useState, useEffect } from "react";
import { Box } from "./new-service.style";
import {
  MainTitle,
  SubTitles,
  StyledLabel,
  StyledInput,
  CheckBox,
  CheckBoxContainerd,
  StyledSubmit,
  Error,
} from "./new-service.style";
import { useForm } from "react-hook-form";
import { addService, getService } from "../../redux/action/card-informations";
import { useDispatch, useSelector } from "react-redux";
import { inputData, openNotification } from "./helper";
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
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.card);
  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const token = useSelector((state) => state.login.authen);

  const changeMaterials = (data) => {
    for (let type in materiais) {
      data &&
        data.name === type &&
        data.checked &&
        (materiais[data && data.name] = data && data.checked);
    }
  };
  const onSubmit = (data) => {
    if (!Object.values(materiais).includes(true)) {
      setMaterialsError(true);
    } else {
      setMaterialsError(false);
    }
    if (token && services[0]) {
      addService(
        token,
        inputData(
          { ...data, materiais },
          300,
          services[0] && services[0].length
        )
      );
      openNotification();
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
    inputData({ ...data, materiais }, 300, services[0] && services[0].length);
  };
  return (
    <Box>
      <MainTitle>Title</MainTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitles>Materiais para a coleta</SubTitles>
        <StyledLabel>Valor para a coleta </StyledLabel>
        <StyledInput
          type="number"
          placeholder="Ponha um valor para a coleta"
          name="contribuicao"
          ref={register({ required: "true", min: 0 })}
        />
        <Error>
          {errors.contribuicao?.type === "required" &&
            "Esse espaço não pode estar vazio"}
          {errors.contribuicao?.type === "min" &&
            "O valor mínimo é 0, por favor coloque um valor igual ou acima do mínimo"}
        </Error>
        <CheckBoxContainerd>
          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="organic"
          ></CheckBox>
          <StyledLabel>Orgânico</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="plastic"
          ></CheckBox>
          <StyledLabel>Plástico</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="glass"
          ></CheckBox>
          <StyledLabel>Vidro</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="paper"
          ></CheckBox>
          <StyledLabel>Papel</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="metal"
          ></CheckBox>
          <StyledLabel>Metal</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="battery"
          ></CheckBox>
          <StyledLabel>Bateria</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="cloth"
          ></CheckBox>
          <StyledLabel>Tecido</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="electronic"
          ></CheckBox>
          <StyledLabel>Eletrônico</StyledLabel>

          <CheckBox
            ref={changeMaterials}
            type="checkbox"
            name="rubber"
          ></CheckBox>
          <StyledLabel>Borracha</StyledLabel>
        </CheckBoxContainerd>
        <div>
          <StyledLabel>
            Quantidade do Material para a coleta em sacos/200L{" "}
          </StyledLabel>
          <StyledInput
            type="number"
            placeholder="Ponha a quantidade da coleta"
            name="quantidade_estimada"
            ref={register({ required: "true" })}
          />
        </div>
        <Error>
          {errors.quantidade_estimada?.type === "required" &&
            "Esse espaço não pode estar vazio"}
        </Error>
        {materialsError && (
          <Error>Por favor selecionar pelo menos 1 material</Error>
        )}
        <div>
          <StyledSubmit type="submit" />
        </div>
      </form>
    </Box>
  );
};

export default NewServiceCalls;
