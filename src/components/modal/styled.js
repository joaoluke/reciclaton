import styled from "styled-components";

export const ComponentNewAccount = styled.div`
  font-family: inherit;
`;

export const ComponentForm = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-flow: column;
  width: 20vw;
  padding: 0 50px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 60vw;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid;
`;

export const StyledSelect = styled.select`
  border: 1px solid;
`;

export const StyledCloseModalDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const StyledH2 = styled.h2`
  text-align: center;
  margin-top: 0;
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

export const StyledRegister = styled.button`
  background: #68a428;
  color: #fff;
  border: none;
  margin: 20px 0;
  padding: 10px;
  font-size: 20px;
  letter-spacing: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 13.5px;
    padding: 5px;
  }
`;

export const StyledCancelar = styled(StyledRegister)`
  background: #f55536;
`;

export const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButtonRegister = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  :focus {
    outline: none;
  }
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

export const StyledProductsDiv = styled.div`
  margin: 10px auto;
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
