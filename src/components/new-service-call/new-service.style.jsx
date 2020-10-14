import styled from "styled-components";
import { CloseCard } from "../card/card.styled";

export const MainTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  font-weight: bold;
  margin: 5px;
  font-size: 35px;
  margin: 10px 0;
  text-align: center;
`;

export const SubTitles = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #6d914a;
  font-size: 25px;
  text-align: center;
  text-decoration: underline;
  margin: 25px 0 15px 0;
`;

export const StyledLabel = styled.label`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  margin-right: 15px;
  margin-top: 3px;
  font-size: 17px;
  text-align: left;
`;

export const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  width: 200px;
  border: none;
  background-color: #d6e4c8;
  border-radius: 3px;
  padding: 5px;
  color: #526d36;
  text-align: center;
`;

export const CheckBoxContainerd = styled.div`
  columns: 3;
  @media screen and (max-width: 540px) {
    columns: 2;
  }
`;
export const CheckBox = styled.input`
  width: 30px;
  margin: 10px 0;
`;
export const StyledSubmit = styled.button`
  display: block;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16.5px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 3px;
  border: none;
  padding: 10px;
  letter-spacing: 5px;
  color: #ffff;
  background-color: #90b569;
  :hover {
    background-color: #88ab5f;
    color: #cedcbc;
  }
`;

export const Error = styled.div`
  color: #f35361;
`;

export const Notification = styled.div`
  font-family: "Roboto", sans-serif;
  margin-top: 8px;
  text-align: center;
  color: #88ab5f;
`;

export const InformationContainer = styled.div`
  margin: 20px 0;
  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const CloseModal = styled(CloseCard)`
  font-size: 30px;
`;
