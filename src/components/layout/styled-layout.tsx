import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: fit-content;
  @media screen and (max-width: 450px) {
    width: auto;
  }
`;
export const Header = styled.div`
  z-index: 1;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  overflow: hidden;
  text-align: center;
  text-align: start;
  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const HeaderBar = styled.div`
  height: 46px;
  background-color: pink;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  justify-content: space-between;
  &:nth-child(n) {
    max-height: 46px;
  }
`;

export const Content = styled.div`
  margin-top: 46px;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;
