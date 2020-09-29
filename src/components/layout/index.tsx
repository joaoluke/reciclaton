import * as React from "react";
import { Header, Content, Container, HeaderBar } from "./styled-layout";

interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
  return (
    <div>
      <Container>
        <Header>
          <HeaderBar>
            <h1>oi</h1>
          </HeaderBar>
        </Header>
      </Container>
      <Content>conteudo{children}</Content>
    </div>
  );
};
export default BaseLayout;
