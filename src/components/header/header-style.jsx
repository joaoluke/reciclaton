import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiOutlineUser,
} from "react-icons/ai";
import LogoResponsivo from "./img/LogoResponsivo.png";
import { CgLogOut, CgProfile, CgLogIn } from "react-icons/cg";
import { RiUserSettingsLine, RiVipCrownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const StyledHeader = styled.div`
  z-index: 1;
  width: 100%;
  height: auto;
  padding: 0;
  position: fixed;
  top: 0;
  text-align: center;
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
    height: 46px;
  }
  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 46px;
  max-width: 100vw;
  min-height: calc(100vh - 46px);
  overflow-x: hidden;
`;

export const Logo = styled.div`
  margin: 0 10px;
  width: 25px;
  height: 30px;
  background-image: url(${LogoResponsivo});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 540px) {
    width: 20px;
    height: 20px;
    background-image: url(${LogoResponsivo});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SearchInput = styled.input`
  justify-self: center;
  margin-bottom: 3px;
  border: none;
  font-size: 18px;
  height: 25px;
  margin-left: 20px;
  width: 250px;
  @media screen and (max-width: 540px) {
    width: 120px;
    height: 25%;
    font-size: 12px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #000;
  font-size: 18px;
  @media screen and (max-width: 540px) {
    padding: 0 10px;
    font-size: 10px;
  }
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  margin-left: 200px;

  @media screen and (max-width: 540px) {
    margin-left: 0;
  }
`;

export const StyledMenu = styled(GiHamburgerMenu)`
  :hover {
    cursor: pointer;
  }
  padding: 15px 15px;
`;

export const Menu = styled.div`
  position: fixed;
  right: 0;
  margin: 30px -30px;
  padding: 10px;
  width: 200px;
  z-index: 1;
  background-color: #a4e58b;
  border-radius: 5px;
  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-8px);
    }
  }
  @media screen and (max-width: 540px) {
    margin: 36px auto;
    width: 150px;
  }
  animation-name: slide-left;
  animation-duration: 2s;
`;
export const User = styled(AiOutlineUser)`
  margin-right: 10px;
`;

export const Login = styled(CgLogIn)`
  margin-right: 10px;
`;
export const Logout = styled(CgLogOut)`
  margin-right: 10px;
`;

export const ChangeProfile = styled(RiUserSettingsLine)`
  margin-right: 10px;
`;

export const Ranking = styled(RiVipCrownLine)`
  margin-right: 10px;
`;

export const Services = styled(FaRegBell)`
  margin-right: 10px;
`;

export const StyledLink = styled.div`
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 540px) {
    padding: 0;
  }
`;

export const Profile = styled(CgProfile)`
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 5px;
  @media screen and (max-width: 540px) {
    font-size: 0px;
    visibility: hidden;
  }
`;

export const Open = styled(AiFillCaretRight)`
  :hover {
    cursor: pointer;
  }
  align-self: center;
`;

export const Close = styled(AiFillCaretDown)`
  margin-left: 200px;

  @media screen and (max-width: 540px) {
    margin-left: 0;
  }
  :hover {
    cursor: pointer;
  }
  align-self: center;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
`;
