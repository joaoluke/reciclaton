import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { registerAction } from "../../redux/action/register";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  ComponentForm,
  StyledCloseModalDiv,
  StyledCloseModalP,
  StyledLabel,
  StyledRegister,
  StyledCancelar,
  StyledButtonsDiv,
  StyledInput,
  StyledSelect,
  StyledProductsDiv,
  StyledButtonRegister,
  StyledH2,
} from "./styled.js";
import axios from "axios";
import Modal from "react-modal";
import ProductInput from "./productsInput";

let ifCollectorMock = {
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

const customStyles = {
  content: {
    height: "80vh",
    padding: "0",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ visible, setVisible, children }) => {
  const [areIdentical, setAreIdentical] = useState(true);
  const [password, setPassword] = useState("");
  const [cepError, setCepError] = useState(false);
  const [cep, setCEP] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [typeUser, setTypeUser] = useState("1");
  const [valuesAddress, setValuesAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
    erro: false,
  });

  const { err, pass } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const formattedCNPJ = data.cnpj
      .replace(".", "")
      .replace(".", "")
      .replace("/", "")
      .replace("-", "");
    const formattedCEP = data.cep.replace("-", "");
    const formData = {
      email: data.email,
      password: data.password,
      brand: data.nameFantasy,
      cnpj: formattedCNPJ,
      adress: {
        street: data.street,
        number: data.number,
        neighborhood: data.district,
        zip: formattedCEP,
        city: data.city,
        state: data.state,
      },
      business: data.branch ? data.branch : "Coletor",
      ifCollector: ifCollectorMock,
      businessSize: data.port,
      website: data.site,
      imageUrl: data.image,
      score: {
        mensal: 0,
        anual: 0,
      },
      os: {},
      award: {},
      complaints: [],
    };
    dispatch(registerAction(formData, setVisible));
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const companyOrCollector = (e) => {
    setTypeUser(e.target.value);
  };

  const cnpjMask = (value) => {
    return (
      value
        // eslint-disable-next-line
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    );
  };

  const cepMask = (value) => {
    return (
      value
        // eslint-disable-next-line
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
    );
  };

  const collector = (value) => {
    for (let type in ifCollectorMock) {
      value &&
        value.name === type &&
        value.checked &&
        (ifCollectorMock[value && value.name] = value && value.checked);
    }
  };

  const catchZip = (e) => {
    let cep = e.target.value;
    if (cep.length === 9) {
      let search = cep.replace("-", "");
      axios
        .get(`https://viacep.com.br/ws/${search}/json/`)
        .then((resp) => {
          setValuesAddress(resp.data);
        })
        .catch((error) => {
          setCepError(error);
        });
    }
  };

  return (
    <>
      <StyledButtonRegister onClick={openModal}>
        {children}
      </StyledButtonRegister>
      <Modal
        isOpen={visible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <StyledCloseModalDiv>
          <StyledCloseModalP onClick={closeModal}>
            <AiOutlineCloseSquare />
          </StyledCloseModalP>
        </StyledCloseModalDiv>
        <StyledH2>Registre-se</StyledH2>
        <ComponentForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Nome Fantasia*:</StyledLabel>
          <StyledInput name="nameFantasy" ref={register({ required: true })} />
          {errors.nameFantasy && <p>Digite o nome da Empresa</p>}

          <StyledLabel>Email*:</StyledLabel>
          <StyledInput
            name="email"
            ref={register({
              required: true,
              pattern: {
                // eslint-disable-next-line
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Digite um email Válido",
              },
            })}
          />
          {errors.email && errors.email.message && (
            <p>{errors.email && errors.email.message}</p>
          )}

          <StyledLabel>CNPJ*:</StyledLabel>
          <StyledInput
            name="cnpj"
            value={cnpjMask(cnpj)}
            onChange={(e) => setCNPJ(e.target.value)}
            placeholder="Ex.: 00.000.000/0000-00"
            maxLength="18"
            ref={register({ required: true })}
          />
          {errors.cnpj && <p>Digite o CNPJ da Empresa</p>}

          <StyledLabel>CEP*:</StyledLabel>
          <StyledInput
            name="cep"
            placeholder="Ex.: 00000-000"
            value={cepMask(cep)}
            onBlur={catchZip}
            onChange={(e) => setCEP(e.target.value)}
            ref={register}
          />
          {valuesAddress.erro === true && <p>CEP não encontrado</p>}
          {cepError === true && <p>Erro ao buscar CEP</p>}
          {errors.cep && <p>Digite o CEP da Empresa</p>}

          <StyledLabel>Estado:</StyledLabel>
          <StyledInput
            name="state"
            defaultValue={valuesAddress.uf}
            ref={register({ required: true })}
          />

          <StyledLabel>Cidade:</StyledLabel>
          <StyledInput
            name="city"
            defaultValue={valuesAddress.localidade}
            ref={register({ required: true })}
          />

          <StyledLabel>Bairro*:</StyledLabel>
          {valuesAddress.bairro === "" ? (
            <StyledInput
              name="district"
              type="text"
              ref={register({ required: true })}
            />
          ) : (
            <StyledInput
              name="district"
              type="text"
              defaultValue={valuesAddress.bairro}
              ref={register({ required: true })}
            />
          )}
          {errors.district && <p>Digite o nome do bairro da empresa</p>}

          <StyledLabel>Logradouro*:</StyledLabel>
          {valuesAddress.logradouro === "" ? (
            <StyledInput
              type="text"
              name="street"
              ref={register({ required: true })}
            />
          ) : (
            <StyledInput
              type="text"
              name="street"
              defaultValue={valuesAddress.logradouro}
              ref={register({ required: true })}
            />
          )}
          {errors.street && <p>Digite o nome da rua da empresa</p>}

          <StyledLabel>Número*:</StyledLabel>
          <StyledInput name="number" ref={register({ required: true })} />
          {errors.number && (
            <p>
              Digite o numero da empresa, caso não tiver numero, digitar: "S/N"
            </p>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px 0 5px",
            }}
            onChange={companyOrCollector}
          >
            <div>
              <StyledInput
                type="radio"
                name="type"
                id="company"
                defaultValue={1}
              />
              <label>Empresa</label>
            </div>
            <div>
              <StyledInput
                type="radio"
                name="type"
                id="collector"
                defaultValue={2}
              />
              <label>Coletor</label>
            </div>
          </div>
          {typeUser === "1" ? (
            <>
              <StyledLabel>Tipo de Negocio*:</StyledLabel>
              <StyledSelect
                className="branch"
                name="branch"
                ref={register({ required: true })}
              >
                <option></option>
                <option>Industria</option>
                <option>Restaurante / Bar</option>
                <option>Mercearia</option>
                <option>Padaria</option>
                <option>Supermercado / Supermercado</option>
                <option>Drogaria</option>
                <option>Varejista</option>
                <option>Shopping</option>
                <option>Condominio</option>
                <option>Hotel / Motel</option>
              </StyledSelect>
              {errors.branch && <p>Selecione o ramo da Empresa</p>}
            </>
          ) : (
            <StyledProductsDiv>
              <StyledLabel>Materiais pra Coleta*:</StyledLabel>
              <StyledProductsDiv>
                <ProductInput collector={collector} />
              </StyledProductsDiv>
              {errors.materials && <p>Selecione o tipo da Coleta que deseja</p>}
            </StyledProductsDiv>
          )}

          <StyledLabel>Porte da Empresa*:</StyledLabel>
          <StyledSelect
            className="branch"
            name="port"
            ref={register({ required: true })}
          >
            <option></option>
            <option>Microempresa</option>
            <option>Empresa de Pequeno Porte (EPP)</option>
            <option>Empresa de Médio Porte</option>
            <option>Empresa de Grande Porte</option>
          </StyledSelect>
          {errors.port && <p>Selecione o tipo da Coleta que deseja</p>}

          <StyledLabel>Site da Empresa:</StyledLabel>
          <StyledInput
            name="site"
            placeholder="Ex.: https://www.empresa.com.br"
            ref={register}
          />

          <StyledLabel>Imagem da Empresa (URL):</StyledLabel>
          <StyledInput
            name="image"
            placeholder="Ex.: https://imagem.net.com/imagemdaempresa"
            ref={register}
          />

          <StyledLabel>Senha*</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            ref={register({ required: true, minLength: 4 })}
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && <p>Digite sua senha com mais de 4 caracteres</p>}

          <StyledLabel>Confirmação de Senha*</StyledLabel>
          <StyledInput
            type="password"
            name="confirmPassword"
            ref={register({ required: true, minLength: 4 })}
            onBlur={({ target: { value } }) => {
              if (password !== value) {
                setAreIdentical(false);
              } else {
                setAreIdentical(true);
              }
            }}
          />
          {areIdentical === false && <p>Senhas não se correspondem</p>}
          {errors.confirmPassword && <p>Digite a confirmação da senha</p>}
          <StyledButtonsDiv>
            <StyledCancelar onClick={() => setVisible(false)}>
              Cancelar
            </StyledCancelar>
            <StyledRegister type="submit">Registrar</StyledRegister>
          </StyledButtonsDiv>
          {pass && <Redirect to={{ pathname: "/ranking" }} />}
          {err && <p>{err}</p>}
        </ComponentForm>
      </Modal>
    </>
  );
};

export default ModalComponent;
