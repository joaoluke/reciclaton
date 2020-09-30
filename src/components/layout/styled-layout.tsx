import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiOutlineUser,
} from "react-icons/ai";
import LogoResponsivo from "./img/LogoResponsivo.png";
import { motion } from "framer-motion";
import { CgLogOut } from "react-icons/cg";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
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
  background-color: #e1f3ce;
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
  margin: 0 10px;
  width: 35px;
  height: 40px;
  background-position: -1px;
  background-image: url(${LogoResponsivo});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 540px) {
    width: 30px;
    height: 35px;
    background-position: -1px;
    background-image: url(${LogoResponsivo});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SearchInput = styled.input`
  border: none;
  @media screen and (max-width: 540px) {
    width: 125px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #000;
  font-size: 12px;
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div``;

export const Right = styled(AiFillCaretRight)`
  :hover {
    cursor: pointer;
  }
  padding: 15px 15px;
`;
export const Down = styled(AiFillCaretDown)`
  :hover {
    cursor: pointer;
  }
  padding: 15px 15px;
`;

export const RollBar = styled(motion.div)`
  position: fixed;
  right: 0;
  margin: 30px -30px;
  width: 200px;
  height: 200px;
  z-index: 1;
  background-color: #a4e58b;
  border-radius: 5px;
  @media screen and (max-width: 540px) {
    margin: 36px -30px;
    width: 150px;
  }
`;
export const User = styled(AiOutlineUser)``;

export const Logout = styled(CgLogOut)``;

export const ChangeProfile = styled(RiUserSettingsLine)``;

export const Services = styled(FaRegBell)``;

export const StyledLink = styled.div`
  margin: 10px 0 0 10px;
  :hover {
    cursor: pointer;
  }
`;
