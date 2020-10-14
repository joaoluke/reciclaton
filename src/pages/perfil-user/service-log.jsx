import React from "react";
import axios from "axios";

const ServiceLog = () => {
  axios
    .get("https://reciclatonapi.herokuapp.com/664/services/")
    .then(({ data }) => console.log(data))
    .catch(({ response }) => console.log(response));
  return <div></div>;
};

export default ServiceLog;
