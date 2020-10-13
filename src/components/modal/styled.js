import styled from "styled-components";
import { Radio, Col } from "antd";

export const ComponentNewAccount = styled.div`
  font-family: inherit;
`;

export const ComponentForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 30vw;
  margin: 0 auto;
`;

export const StyledCloseModalDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const StyledCloseModalP = styled.p`
  display: flex;
  padding: 5px;
  font-size: 35px;
  margin: 0;
  cursor: pointer;
  color: #a5a5a5;
  align-self: flex-end;
  align-items: center;
`;

export const ComponentSubmit = styled.input`
  background: #a4e58b;
  color: #000;
  text-transform: uppercase;
  border: none;
  margin: 20px 0;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
`;

export const ComponentProducts = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-around;
`;

export const ComponentProduct = styled.label`
  width: 10vw;
`;

export const ComponentCheck = styled.input`
  margin-top: 10px;
  width: 50%;
`;

export const ComponentRadio = styled(Radio)`
  margin: 20px 0 5px;
  display: block;
  height: 30px;
  line-height: 30px;
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

export const StyledLabel = styled.label`
  margin: 20px 5px 5px 0;
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
