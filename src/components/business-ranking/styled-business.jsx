import styled from "styled-components";

export const BackgroundRank = styled.div`
  overflow: hidden;
  width: 100%;
  @media (max-width: 1024px) {
    overflow: auto;
  }
`;

export const BusinessCard = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  //   border: 1px solid black;
  margin-bottom: 5px;

  //   padding: 1rem;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
  h4::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
`;

export const StyledTable = styled.table`
  border: 0px solid #333;
  display: hidden;
  tr:nth-child(2n + 1) {
    // background: #e1e1e1;
    background: #92d143;
  }
  tr:nth-child(2n) {
    background: #f3e8e2;
  }
`;

export const Td = styled.td`
  border: 0px solid #333;
  text-align: center;
  color: #17271a;
  span::first-letter {
    text-transform: uppercase;
  }
`;

export const Tr = styled.tr`
  border: 0px solid #333;
  text-align: center;
  color: #17271a;
  span::first-letter {
    text-transform: uppercase;
  }
`;

export const Option = styled.option`
  :hover {
    cursor: pointer;
    border: 1px solid black;
  }
  :active {
    color: green;
  }
`;

export const SpotlightDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SpotlightChildDiv = styled.div`
  display: flex;
  margin: 0 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 5%;
  :hover {
    cursor: pointer;
    border-radius: 14px;
    background-color: white;
    width: 50%;
  }
  span::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    :hover {
      cursor: pointer;
      border: none;
      width: 100%;
    }
  }
`;
