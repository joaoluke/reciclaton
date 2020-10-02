import styled from 'styled-components';

export const BackgroundRank = styled.div`
    background-color: #E1F3CE;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 50%;
    div:nth-child(2) {
        background: gold;
    }
    div:nth-child(3) {
       background: silver;
    }
    div:nth-child(4) {
        background: #cd7f32;
     }
     div:nth-child(n + 5) {
        background: whitesmoke;
     }
`;

export const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 1rem;
  width: 80%;
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
border: 1px solid #333;
`;

export const Td = styled.td`
border: 1px solid #333;
`;