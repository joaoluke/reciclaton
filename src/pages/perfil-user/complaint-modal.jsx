import React, { useState, useEffect } from 'react';
import { Modal, Button, notification } from 'antd';
import { useForm } from "react-hook-form";
import axios from "axios";

const Requisition = (data) => {

  axios
    .post("https://reciclatonapi.herokuapp.com/complaint", data)
    .then(({ data }) => { })
    .catch(({ data }) => { })

}

const Complaint = ({ visible, setVisible }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  
  return (
    <Modal title="Complaint" visible={visible} onOk={""} onCancel={""}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input name="nome" ref={register} />
        <label>Email</label>
        <input
          name="email"
          ref={register({
            // eslint-disable-next-line
            pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i,
          })}
        />
        <label>Foto da Ocorrencia</label>
        <input
          name="foto"
          ref={register({
            required: true,
          })}
        />
        <label>Mensagem da Denuncia</label>
        <textarea
          name="mensagem_denuncia"
          rows="4"
          cols="50"
          ref={register({ required: "Required" })}
        />
        <input type="submit" />
      </form>
    </Modal>
  );
}

export default Complaint