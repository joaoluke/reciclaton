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
  Down,
  Right,
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
                <Down onClick={() => setOpen(false)} />
              ) : (
                <Right onClick={() => setOpen(true)} />
              )}
            </div>
          </HeaderBar>
        </Header>
        {open && <RollBar animate={{ x: -28 }}>hi</RollBar>}
        <Content>conteudo{children}</Content>
      </Container>
    </div>
  );
};
export default BaseLayout;
