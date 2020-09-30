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
  Logout,
  User,
  ChangeProfile,
  Services,
  StyledLink,
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
        {open && (
          <RollBar animate={{ x: -28 }}>
            <StyledLink>
              <Logout />
              Deslogar
            </StyledLink>
            <StyledLink>
              <User />
              Perfil
            </StyledLink>
            <StyledLink>
              <ChangeProfile />
              Mudar Informações
            </StyledLink>
            <StyledLink>
              <Services />
              Chamados
            </StyledLink>
          </RollBar>
        )}
        <Content>conteudo{children}</Content>
      </Container>
    </div>
  );
};
export default BaseLayout;
