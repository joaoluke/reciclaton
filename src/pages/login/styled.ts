import styled from "styled-components";
import natureza from "./images/oie_4roWYNCfhSHW.jpg";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 46px);
  width: 100vw;
  justify-content: center;
  background-image: linear-gradient(rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url(${natureza});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: max-content;
  padding: 20px;
  border-radius: 1rem;
  background: #e1f3ce;
  opacity: 0.88;
`;

export const StyledLabel = styled.label`
  letter-spacing: 1px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  margin: 10px 20px 0 20px;
  border: none;
  :nth-child(3n) {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 15px;
  font-size: 20px;
  background: #a4e58b;
  opacity: 0.9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledError = styled.p`
  color: red;
  margin: 0;
`;
