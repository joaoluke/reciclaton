import React, { useState, useEffect } from 'react';
import { Modal, Button, notification } from 'antd';
import axios from "axios";

const Requisition = (data) => {

  axios
    .post("https://reciclatonapi.herokuapp.com/complaint", data)
    .then(({ data }) => { })
    .catch(({ data }) => { })

}

const Complaint = ({ visible, setVisible }) => {


  return (
    <Modal
      title="Complaint"
      visible={visible}
      onOk={""}
      onCancel={""}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );


}

export default Complaint