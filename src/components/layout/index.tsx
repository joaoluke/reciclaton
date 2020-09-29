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
  Open,
  Close,
  RollBar,
} from "./styled-layout";

interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Container>
        <Header>
          <HeaderBar>
            <Logo />
            <SearchContainer>
              <SearchInput />
              <SearchIcon />
            </SearchContainer>
            <div>
              {open ? (
                <Open onClick={() => setOpen(false)} />
              ) : (
                <Close onClick={() => setOpen(true)} />
              )}
            </div>
          </HeaderBar>
        </Header>
        {open && <RollBar>hi</RollBar>}
        <Content>conteudo{children}</Content>
      </Container>
    </div>
  );
};
export default BaseLayout;
