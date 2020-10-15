import React from "react";
import Modal from "react-modal";
import axios from "axios";
import {
  StyledForm,
  StyledTextArea,
  StyledInput,
  StyledLabel,
  StyledButtonSubmit,
  StyledP,
  StyledButtonCancel,
  StyledButtonDiv,
} from "./styled";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Report {
  constructor(
    nome = "",
    email = "",
    foto,
    id,
    id_denunciado,
    mensagem_denuncia
  ) {
    this.nome = nome;
    this.email = email;
    this.foto = foto;
    this.id = id;
    this.id_denunciado = id_denunciado;
    this.mensagem_denuncia = mensagem_denuncia;
    this.reviews = 0;
    this.indicted = [];
    this.innocent = [];
  }
}

const Requisition = (data) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/complaint", data)
    .then((resp) => {
      NotificationManager.success("Denúncia feita com Sucesso!", "Feito!", 2000)
    })
    .catch((resp) => {
      console.log(resp.response);
    });
};

const Complaint = ({ visible, setVisible }) => {
  const { register, handleSubmit, errors } = useForm();
  const { userId } = useParams();
  const onSubmit = (data) => {
    axios
      .get("https://reciclatonapi.herokuapp.com/complaint")
      .then((resp) => {
        const reportSize = resp.data.length + 1;
        const newReport = new Report(
          data.name,
          data.email,
          data.foto,
          reportSize,
          userId,
          data.mensagem_denuncia
        );
        Requisition(newReport);
        setVisible(false);
      })
      .catch((resp) => {
        console.log(resp.response);
      });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Modal
        isOpen={visible}
        onAfterOpen={() => {
          console.log("open");
        }}
        onRequestClose={() => setVisible(false)}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Nome</StyledLabel>
          <StyledInput name="nome" ref={register} />

          <StyledLabel>Email</StyledLabel>
          <StyledInput
            name="email"
            ref={register({
              pattern: {
                // eslint-disable-next-line
                value: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i,
                message: "Por favor colocar um email válido.",
              },
            })}
          />
          {errors && errors?.email?.message && (
            <StyledP>{errors?.email?.message}</StyledP>
          )}
          <StyledLabel>Foto da Ocorrencia</StyledLabel>
          <StyledInput
            name="foto"
            ref={register({
              required: "Campo Obrigatório",
              pattern: {
                // eslint-disable-next-line
                value: /((([A-Za-z]{0,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g,
                message: "Por favor colocar um link válido.",
              },
            })}
          />
          {errors && errors?.foto?.message && (
            <StyledP>{errors?.foto?.message}</StyledP>
          )}
          <StyledLabel>Mensagem da Denuncia</StyledLabel>
          <StyledTextArea
            name="mensagem_denuncia"
            rows="4"
            cols="50"
            ref={register({ required: "Campo Obrigatório" })}
          />
          {errors && errors?.mensagem_denuncia?.message && (
            <StyledP>{errors?.mensagem_denuncia?.message}</StyledP>
          )}
          <StyledButtonDiv>
            <StyledButtonCancel
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancelar
            </StyledButtonCancel>
            <StyledButtonSubmit type="submit">Enviar</StyledButtonSubmit>
          </StyledButtonDiv>
        </StyledForm>
      </Modal>
      <NotificationContainer />
    </>
  );
};

export default Complaint;
