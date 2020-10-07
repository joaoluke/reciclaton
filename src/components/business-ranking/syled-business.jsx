import styled from 'styled-components';

export const BackgroundRank = styled.div`
  overflow: auto;
  // background-color: #E1F3CE;
  // background-color: transparent;
  // display: none;
  // border-radius: 20px;
  // padding: 2rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // align-content: center;
  // width: 90%;
`;

export const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 1rem;
  width: 60%;
  height: auto;
  justify-content: center;
  align-items:center;
  border-radius: 20px;
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
    background: #e1e1e1;
 }
 tr:nth-child(2n) {
     background: whitesmoke;
 }
`;

export const Td = styled.td`
border: 0px solid #333;
text-align: center;
color: #17271A;
 span::first-letter {
    text-transform: uppercase;
 }
`;

export const Tr = styled.tr`
border: 0px solid #333;
text-align: center;
color: #17271A;
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