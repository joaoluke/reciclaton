import React, { useState, useEffect } from "react";
import {
  MainTitle,
  SubTitles,
  StyledLabel,
  StyledInput,
  CheckBox,
  CheckBoxContainerd,
  StyledSubmit,
  Error,
  Notification,
  InformationContainer,
  CloseModal,
} from "./new-service.style";
import decode from "jwt-decode";
import Modal from "react-modal";

import { useForm } from "react-hook-form";
import {
  addService,
  getServices,
  changeInformations,
} from "../../redux/action/card-informations";
import { useDispatch, useSelector } from "react-redux";
import { inputData } from "./helper";
import { requestBusiness } from "../../redux/action/user-service";
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
const NewServiceCalls = ({ visibility, setVisibility }) => {
  const [materialsError, setMaterialsError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [approved, setApproved] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.card);

  const userPerfil = useSelector((state) => state.userService);

  const { brand, id, business, os } = userPerfil;
  useEffect(() => {
    dispatch(getServices());
    if (!brand) {
      dispatch(requestBusiness(decode(token).sub, token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, dispatch, userPerfil]);

  const token = useSelector((state) => state.login.authen);

  const changeMaterials = (data) => {
    for (let type in materiais) {
      data &&
        data.name === type &&
        data.checked &&
        (materiais[data && data.name] = data && data.checked);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: 'fit-content',
      maxHeight: '80vh',
    },
  };
  const onSubmit = (data) => {
    if (!Object.values(materiais).includes(true)) {
      setMaterialsError(true);
    } else {
      setMaterialsError(false);
    }
    if (token && list) {
      addService(
        token,
        inputData({ ...data, materiais }, userPerfil, list && list.length + 1)
      );

      changeInformations(id, token, {
        os: [...Object.values(os), list.length + 1],
      });

      setApproved(true);
      setTimeout(() => {
        setVisibility(false);
      }, 2000);
    }
    inputData({ ...data, materiais }, userPerfil, list && list.length + 1);
  };
  return (
    <>
      <Modal
        isOpen={visibility}
        onRequestClose={() => setVisibility(false)}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", flexFlow: "row-reverse" }}>
          <CloseModal onClick={() => setVisibility(false)} />
        </div>
        <MainTitle>{brand ? brand + " / " + business : "Title"}</MainTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SubTitles>Materiais para a coleta:</SubTitles>
          <CheckBoxContainerd>
            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="organic"
              ></CheckBox>
              <StyledLabel>Orgânico</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="plastic"
              ></CheckBox>
              <StyledLabel>Plástico</StyledLabel>
            </div>
            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="glass"
              ></CheckBox>
              <StyledLabel>Vidro</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="paper"
              ></CheckBox>
              <StyledLabel>Papel</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="metal"
              ></CheckBox>
              <StyledLabel>Metal</StyledLabel>
            </div>
            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="battery"
              ></CheckBox>
              <StyledLabel>Bateria</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="cloth"
              ></CheckBox>
              <StyledLabel>Tecido</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="electronic"
              ></CheckBox>
              <StyledLabel>Eletrônico</StyledLabel>
            </div>

            <div>
              <CheckBox
                ref={changeMaterials}
                type="checkbox"
                name="rubber"
              ></CheckBox>
              <StyledLabel>Borracha</StyledLabel>
            </div>
          </CheckBoxContainerd>

          <InformationContainer>
            <StyledLabel>Valor para a coleta </StyledLabel>
            <StyledInput
              type="number"
              placeholder="Insira um valor para a coleta"
              name="contribuicao"
              ref={register({ required: "true", min: 0 })}
            />
          </InformationContainer>
          <Error>
            {errors.contribuicao?.type === "required" &&
              "Esse espaço não pode estar vazio"}
            {errors.contribuicao?.type === "min" &&
              "O valor mínimo é 0, por favor coloque um valor igual ou acima do mínimo"}
          </Error>

          <InformationContainer>
            <StyledLabel>
              Quantidade do Material para a coleta em sacos/200L{" "}
            </StyledLabel>
            <StyledInput
              type="number"
              placeholder="insira a quantidade aqui"
              name="quantidade_estimada"
              ref={register({ required: "true" })}
            />
          </InformationContainer>
          <Error>
            {errors.quantidade_estimada?.type === "required" &&
              "Esse espaço não pode estar vazio"}
          </Error>
          {materialsError && (
            <Error>Por favor selecionar pelo menos 1 material</Error>
          )}
          <div>
            <StyledSubmit type="submit">Enviar Chamado</StyledSubmit>
          </div>
          {approved && (
            <Notification>Seu cadastro foi efetuado com sucesso!!</Notification>
          )}
        </form>
      </Modal>
    </>
  );
};

export default NewServiceCalls;
