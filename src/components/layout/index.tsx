import React from "react";
import { useSelector } from "react-redux";
import decode from "jwt-decode";
import {
  SearchIcon,
  SearchContainer,
  Logo,
  Header,
  Content,
  Container,
  HeaderBar,
  SearchInput,
  Down,
  Right,
  RollBar,
  Logout,
  User,
  ChangeProfile,
  Services,
  StyledLink,
} from "../header/header-style";
import { Redirect } from "react-router-dom";

interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
  const [open, setOpen] = React.useState(false);
  const logged = useSelector((state) => state);
  console.log(logged)
  return (
    <div>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </div>
  );
};
export default BaseLayout;
