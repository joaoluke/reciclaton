import * as React from "react";
import {
  SearchIcon,
  SearchContainer,
  Logo,
  Header,
  Content,
  Container,
  HeaderBar,
  SearchInput,
} from "./styled-layout";

interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
  return (
    <div>
      <Container>
        <Header>
          <HeaderBar>
            <Logo />

            <SearchInput />
            <SearchContainer>
              <SearchIcon />
            </SearchContainer>
          </HeaderBar>
        </Header>
      </Container>
      <Content>conteudo{children}</Content>
    </div>
  );
};
export default BaseLayout;
