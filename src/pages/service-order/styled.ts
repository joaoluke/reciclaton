import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 18px;
  background: transparent;
  border: solid 2px #95c763;
  margin-right: 4px;
  margin-top: 4px;
  padding: 5px;
  :hover {
    cursor: pointer;
    border-color: #84b84f;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.75em;
  }
`;

export const ContainerButton = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 540px) {
    flex-wrap: nowrap;
  }
`;
