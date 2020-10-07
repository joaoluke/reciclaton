import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: fit-content;
  @media screen and (max-width: 540px) {
    width: auto;
  }
`;

export const Content = styled.div`
  margin-top: 46px;
  max-width: 100vw;
  min-height: calc(100vh - 46px);
  overflow-x: hidden;
`;
