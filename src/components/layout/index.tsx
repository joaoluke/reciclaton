import * as React from "react";
import { Content, Container } from "./layout-style";
import Header from "../header";
interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
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
