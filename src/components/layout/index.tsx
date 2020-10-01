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
  StyledMenu,
  RollBar,
  Logout,
  User,
  ChangeProfile,
  Services,
  StyledLink,
  Profile,
  Open,
  Close,
} from "./styled-layout";
import { useHistory } from "react-router-dom";

interface LayoutInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}

const BaseLayout = ({ children }: LayoutInterface) => {
  const [open, setOpen] = React.useState(false);
  const [hiddenSearch, setHiddenSearch] = React.useState(false);
  const searchCompanyName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  const history = useHistory();
  return (
    <div>
      <Container>
        <Header>
          <HeaderBar>
            <Logo onClick={() => history.push("/ranking")} />

            {hiddenSearch ? (
              <>
                <SearchContainer>
                  <form onSubmit={(e) => searchCompanyName(e)}>
                    <Open onClick={() => setHiddenSearch(false)} />
                    <SearchInput
                      type="text"
                      placeholder="Input some company"
                      name="search"
                    />
                    <SearchIcon type="submit" />
                  </form>
                </SearchContainer>
              </>
            ) : (
              <Close onClick={() => setHiddenSearch(true)} />
            )}
            <StyledLink onClick={() => history.push("/profile")}>
              <Profile />
            </StyledLink>

            <div>
              <StyledMenu onClick={() => setOpen(!open)} />
            </div>
          </HeaderBar>
        </Header>
        {open && (
          <RollBar animate={{ x: -28 }}>
            <StyledLink onClick={() => history.push("/")}>
              <Logout />
              Deslogar
            </StyledLink>

            <StyledLink onClick={() => history.push("/profile")}>
              <User />
              Perfil
            </StyledLink>

            <StyledLink>
              <ChangeProfile />
              Mudar Informações
            </StyledLink>
            <StyledLink>
              <Services onClick={() => history.push("/ranking")} />
              Chamados
            </StyledLink>
          </RollBar>
        )}
        <Content>{children}</Content>
      </Container>
    </div>
  );
};
export default BaseLayout;
