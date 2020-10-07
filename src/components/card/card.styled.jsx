import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FaTrash, FaCheck } from "react-icons/fa";
export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 0 auto;
  margin: 10px auto;
  border: none;
  border-radius: 14px;
  padding: 1em 3em;
  background-color: #abe181;
  :hover {
    background-color: #9dd075;
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  font-weight: bold;
  font-size: 45px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonTitle = styled(CardTitle)`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin: 5px;
  font-size: 35px;
  text-align: center;
`;

export const TitlePrice = styled(ButtonTitle)`
  margin: 10px;
  font-size: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: nowrap column;
  background-color: #bdf492;
  border: solid 1px #abe181;
  border-radius: 15px;
  padding-bottom: 10px;
  width: 387px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const CloseCard = styled(CgClose)`
  margin: 5px 5px auto;
  color: #f68c8c;
  text-align: right;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  margin: 0 auto;
  width: calc(250px + 1rem);
  height: 290px;
  border-radius: 15px;
  background-color: whitesmoke;
`;

export const Title = styled(CardTitle)`
  margin: 10px;
  font-size: 18px;
`;

export const CloseCointainer = styled.div`
  display: flex;
  flex-flow: row-reverse;
`;

export const Location = styled(TiLocation)`
  font-size: 40px;
`;

export const Tresh = styled(FaTrash)``;

export const PopUp = styled.div`
  position: fixed;
  background-color: #555;
  color: white;
  padding: 20px 20px;
  top: 250px;
  width: 350px;
  background-color: #f8faf7;
  border: solid 1px #000000;
  border-radius: 10px;
`;

export const Accept = styled(FaCheck)``;
