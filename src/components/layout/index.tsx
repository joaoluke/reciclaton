<<<<<<< HEAD
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
} from "./styled-layout";
import { Redirect } from "react-router-dom";

=======
import * as React from "react";
import { Content, Container } from "./layout-style";
import Header from "../header";
>>>>>>> master
interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
  const logged = useSelector((state) => state);
  console.log(logged)
=======
>>>>>>> master
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
