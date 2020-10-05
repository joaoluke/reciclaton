import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { registerForm } from "../../redux/action/register";
import "antd/dist/antd.css";
import { Checkbox, Row, Col } from "antd";
import axios from "axios";
import {
  ComponentNewAccount,
  ComponentModal,
  ComponentRadio,
} from "./styled.js";
import "./style.css";

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
    width: "88%",
    height: "78%",
    padding: "0",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [areIdentical, setAreIdentical] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [cepError, setCepError] = useState(false);
  const [cep, setCEP] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [typeUser, setTypeUser] = useState(1);
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
  const [dataForAPI, setDataForAPI] = useState({
    email: "",
    password: "",
    brand: "",
    cnpj: "",
    adress: {
      street: "",
      number: "",
      neighborhood: "",
      zip: "",
      city: "",
      state: "",
    },
    business: "",
    ifCollector: {
      organic: false,
      plastic: false,
      glass: false,
      paper: false,
      metal: false,
      battery: false,
      cloth: false,
      electronic: false,
      rubber: false,
    },
    businessSize: "",
    website: "",
    imageUrl: "",
    score: {
      mensal: 0,
      anual: 0,
    },
    os: [],
    award: {},
    complaints: [],
  });

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setDataForAPI((dataForAPI.ifCollector = ifCollectorMock));
    const formattedCNPJ = data.cnpj
      .replace(".", "")
      .replace(".", "")
      .replace("/", "")
      .replace("-", "");
    const formattedCEP = data.cep.replace("-", "");
    setDataForAPI({
      ...dataForAPI,
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
      business: "data.branch",
      ifCollector: ifCollectorMock,
      businessSize: data.port,
      website: data.site,
      imageUrl: data.url,
    });
    finalsData();
    dispatch(registerForm(dataForAPI));
  };

  const finalsData = () => {
    console.log(dataForAPI);
  };

  console.log(dataForAPI);

  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
    subtitle.style.textAlign = "center";
    subtitle.style.marginTop = "14px";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const companyOrCollector = (e) => {
    setTypeUser(e.target.value);
  };

  const collectionMaterials = (checkedValues) => {
    // console.log("checked = ", checkedValues);
    // setDataForAPI(...dataForAPI, )
  };

  const checkEmail = (email) => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsEmailValid(pattern.test(email));
  };

  const cnpjMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const cepMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
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
    <div>
      <ComponentNewAccount>
        <button onClick={openModal}>Open Modal</button>
      </ComponentNewAccount>
      <ComponentModal id="modal"></ComponentModal>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Registre-se</h2>

        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Nome Fantasia*:</label>
          <input name="nameFantasy" ref={register({ required: true })} />
          {errors.nameFantasy && <p>Digite o nome da Empresa</p>}

          <label>Email*:</label>
          <input
            onBlur={(e) => {
              checkEmail(e.target.value);
            }}
            name="email"
            ref={register({ required: true })}
          />
          {isEmailValid === false && <p>Digite um email Válido</p>}
          {errors.email && <p>Digite o email da Empresa</p>}

          <label>CNPJ*:</label>
          <input
            name="cnpj"
            value={cnpjMask(cnpj)}
            onChange={(e) => setCNPJ(e.target.value)}
            placeholder="Ex.: 00.000.000/0000-00"
            ref={register({ required: true })}
          />
          {errors.cnpj && <p>Digite o CNPJ da Empresa</p>}

          <label>CEP*:</label>
          <input
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

          <label>Estado:</label>
          <input
            name="state"
            value={valuesAddress.uf}
            ref={register({ required: true })}
          />

          <label>Cidade:</label>
          <input
            name="city"
            value={valuesAddress.localidade}
            ref={register({ required: true })}
          />

          <label>Bairro*:</label>
          {valuesAddress.bairro === "" ? (
            <input
              name="district"
              type="text"
              ref={register({ required: true })}
            />
          ) : (
            <input
              name="district"
              type="text"
              value={valuesAddress.bairro}
              ref={register({ required: true })}
            />
          )}
          {errors.district && <p>Digite o nome do bairro da empresa</p>}

          <label>Logradouro*:</label>
          {valuesAddress.logradouro === "" ? (
            <input
              type="text"
              name="street"
              ref={register({ required: true })}
            />
          ) : (
            <input
              type="text"
              name="street"
              value={valuesAddress.logradouro}
              ref={register({ required: true })}
            />
          )}
          {errors.street && <p>Digite o nome da rua da empresa</p>}

          <label>Número*:</label>
          <input name="number" ref={register({ required: true })} />
          {errors.number && (
            <p>
              Digite o numero da empresa, caso não tiver numero, digitar: "S/N"
            </p>
          )}

          <ComponentRadio.Group onChange={companyOrCollector} value={typeUser}>
            <ComponentRadio name="company" value={1}>
              Empresa
            </ComponentRadio>
            <ComponentRadio name="collector" value={2}>
              Coletador
            </ComponentRadio>
          </ComponentRadio.Group>
          {typeUser === 1 ? (
            <div>
              <label>Tipo de Negocio*:</label>
              <select
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
              </select>
              {errors.branch && <p>Selecione o ramo da Empresa</p>}
            </div>
          ) : (
            <div>
              <label>
                Materiais pra Coleta*:{" "}
                <h6 className="tip">
                  Segurando CTRL você seleciona mais de um
                </h6>
              </label>
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={collectionMaterials}
              >
                <Row>
                  <Col span={12}>
                    <label>Organicos</label>
                    <input name="organic" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Plasticos</label>
                    <input name="plastic" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Vidro</label>
                    <input name="glass" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Papel</label>
                    <input name="paper" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Metal</label>
                    <input name="metal" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Bateria</label>
                    <input name="battery" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Pano</label>
                    <input name="cloth" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Eletronicos</label>
                    <input name="electronic" type="checkbox" ref={collector} />
                  </Col>
                  <Col span={12}>
                    <label>Borracha</label>
                    <input name="rubber" type="checkbox" ref={collector} />
                  </Col>
                </Row>
              </Checkbox.Group>
              {errors.materials && <p>Selecione o tipo da Coleta que deseja</p>}
            </div>
          )}

          <label>Porte da Empresa*:</label>
          <select
            className="branch"
            name="port"
            ref={register({ required: true })}
          >
            <option></option>
            <option>Microempresa</option>
            <option>Empresa de Pequeno Porte (EPP)</option>
            <option>Empresa de Médio Porte</option>
            <option>Empresa de Grande Porte</option>
          </select>
          {errors.port && <p>Selecione o tipo da Coleta que deseja</p>}

          <label>Site da Empresa:</label>
          <input
            name="site"
            placeholder="Ex.: https://www.empresa.com.br"
            ref={register({ required: false })}
          />

          <label>Imagem da Empresa (URL):</label>
          <input
            name="image"
            placeholder="Ex.: https://imagem.net.com/imagemdaempresa"
            ref={register({ required: false })}
          />

          <label>Senha*</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true, maxLength: 10 })}
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && <p>Digite sua senha</p>}

          <label>Confirmação de Senha*</label>
          <input
            type="password"
            name="confirmPassword"
            ref={register({ required: true, maxLength: 10 })}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            onBlur={(e) => {
              if (password !== confirmPassword) {
                setAreIdentical(false);
              } else {
                setAreIdentical(true);
              }
            }}
          />
          {areIdentical === false && <p>Senhas não se correspondem</p>}
          {errors.confirmPassword && <p>Digite a confirmação da senha</p>}

          <input type="submit" value="Registrar" />

          <div id="close" onClick={closeModal}>
            fechar
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalComponent;
