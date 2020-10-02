import styled from "styled-components";
import { Radio, Checkbox } from "antd";

export const ComponentNewAccount = styled.div`
  font-family: inherit;
`;

export const ComponentCheckBox = styled(Checkbox)`
  font-family: inherit;
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
