import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 125px;
  border-radius: 10px;
  width: calc(500px + 0.5rem);
  height: 300px;
  background-color: #f8faf7;
  border: solid 2px #6c9148;
  padding: 40px;
`;

export const MainTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
  font-weight: bold;
  margin: 5px;
  font-size: 35px;

  text-align: center;
`;

export const SubTitles = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #6d914a;
  font-size: 25px;
  text-align: left;
  margin: 5px;
`;

export const StyledLabel = styled.label`
  font-family: "Roboto", sans-serif;
  color: #6d914a;
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
  margin: 10px 0;
  display: flex;
  flex-flow: wrap;
`;
export const CheckBox = styled.input`
  width: 30px;
`;
export const StyledSubmit = styled.input`
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
