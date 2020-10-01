import React from "react";
import {
  SearchIcon,
  SearchContainer,
  Logo,
  StyledHeader,
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
} from "./header-style";

import { useHistory } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [hiddenSearch, setHiddenSearch] = React.useState(false);
  const searchCompanyName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  const history = useHistory();

  return (
    <>
      <StyledHeader>
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
      </StyledHeader>
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
    </>
  );
};

export default Header;
