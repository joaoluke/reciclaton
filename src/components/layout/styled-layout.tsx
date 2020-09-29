import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import LogoReciclaton from "./img/LogoReciclaton.png";
import LogoResponsivo from "./img/LogoResponsivo.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: fit-content;
  @media screen and (max-width: 540px) {
    width: auto;
  }
`;
export const Header = styled.div`
  z-index: 1;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  text-align: center;
  text-align: start;
  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const HeaderBar = styled.div`
  height: 46px;
  background-color: #c4ff66;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  justify-content: space-between;
  &:nth-child(n) {
    max-height: 46px;
  }
  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 46px;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  background-image: url(${LogoReciclaton});
  width: 110px;
  background-position-y: -1px;
  background-repeat: no-repeat;
  height: 35px;
  @media screen and (max-width: 540px) {
    width: 30px;
    height: 35px;

    background-image: url(${LogoResponsivo});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SearchInput = styled.input`
  border: none;
`;

export const SearchIcon = styled(BsSearch)`
  color: #000;
  font-size: 12px;
  padding: 8px 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div``;
