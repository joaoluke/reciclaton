import styled from "styled-components";
import { Radio, Col } from "antd";

export const ComponentNewAccount = styled.div`
  font-family: inherit;
`;

export const ComponentForm = styled.form`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  width: 40%;
  position: absolute;
  margin: auto 30% auto 30%;
  top: 13%;
`;

export const ComponentClose = styled.div`
  color: #bfbeba;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: absolute;
  font-size: 20px;
  width: 17px;
  height: 17px;
  text-align: center;
  right: 5px;
  cursor: pointer;
`;

export const ComponentSubmit = styled.input`
  background: #a4e58b;
  color: #000;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
`;

export const ComponentProducts = styled(Col)`
  display: flex;
`;

export const ComponentProduct = styled.label`
  width: 50%;
`;

export const ComponentCheck = styled.input`
  margin-top: 10px;
  width: 50%;
`;

export const ComponentRadio = styled(Radio)`
  display: "block";
  height: "30px";
  line-height: "30px";
`;

export const ComponentModal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: none;
  :target {
    display: block;
  }
`;

export const ComponentBox = styled.form`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  width: 40%;
  height: 35vh;
  position: absolute;
  margin: auto 30% auto 30%;
  top: -84vh;
`;
