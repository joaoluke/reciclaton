import React from 'react';
import Modal from 'react-modal';
import axios from "axios";
import styled from "styled-components"
import { useForm } from "react-hook-form";

const Requisition = (data) => {

  axios
    .post("https://reciclatonapi.herokuapp.com/complaint", data)
    .then(({ data }) => { })
    .catch(({ data }) => { })

}

const Complaint = ({ visible, setVisible }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {
        console.log("open");
      }}
      onRequestClose={() => console.log("close")}
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
            // eslint-disable-next-line
            pattern: {
              value: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i,
              message: "Por favor colocar um email válido.",
            },
          })}
        />

        <StyledLabel>Foto da Ocorrencia</StyledLabel>
        <StyledInput
          name="foto"
          ref={register({
            required: "Campo Obrigatório",
            // eslint-disable-next-line
            pattern: {
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
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
    </Modal>
  );
}

export default Complaint;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  text-align: center;
  padding: 10px;
  width: 20vw;
  @media only screen and (max-width: 768px) {
    width: 50vw;
  }
`;

const StyledTextArea = styled.textarea`
  resize: none;
  border: 1px solid;
`;

const StyledInput = styled.input`
  border: 1px solid;
`;

const StyledLabel = styled.label`
  margin: 20px 0 5px;
  
  :nth-child(1){
    margin-top: 0px;
  }
`

const StyledButton = styled.button`
  width: fit-content;
  margin: 20px auto 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  height: calc(2rem + 15px);
  padding: 0 20px;
  font-weight: bolder;
  text-align: center;
  box-sizing: border-box;
  :hover {
    color: #b70101;
    text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
  }
  :focus {
    outline-style: none;
  }
  color: white;
  background-color: #f55536;
  :hover {
    color: white;
  }
`;

const StyledP = styled.p`
  margin: 0;
  color: red;
`;