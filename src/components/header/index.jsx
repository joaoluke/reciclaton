import React from "react";
import {
  SearchIcon,
  SearchContainer,
  Logo,
  StyledHeader,
  HeaderBar,
  SearchInput,
  StyledMenu,
  Menu,
  Logout,
  User,
  ChangeProfile,
  Services,
  StyledLink,
  Profile,
  SubmitButton,
  Login,
} from "./header-style";

import { useHistory } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const FormValue = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const getValue = (e) => {
    setSearch(e.target.value);
  };
  const history = useHistory();

  return (
    <>
      <StyledHeader>
        <HeaderBar>
          <Logo onClick={() => history.push("/ranking")} />

          <SearchContainer>
            <form onSubmit={(e) => FormValue(e)}>
              <SearchInput
                type="text"
                placeholder="Procurar empresa"
                name="search"
                onChange={(e) => getValue(e)}
              />
              <SubmitButton type="submit">
                <SearchIcon />
              </SubmitButton>
            </form>
          </SearchContainer>

          {login && (
            <StyledLink onClick={() => history.push("/profile")}>
              <Profile />
            </StyledLink>
          )}

          <div>
            <StyledMenu onClick={() => setMenu(!menu)} />
          </div>
        </HeaderBar>
      </StyledHeader>
      {menu && (
        <Menu>
          {login && (
            <StyledLink
              onClick={() => {
                history.push("/");
                setLogin(false);
              }}
            >
              <Logout />
              Deslogar
            </StyledLink>
          )}

          {login ? (
            <StyledLink onClick={() => history.push("/profile")}>
              <User />
              Perfil
            </StyledLink>
          ) : (
            <StyledLink
              onClick={() => {
                history.push("/login");
                setLogin(true);
              }}
            >
              <Login />
              Login
            </StyledLink>
          )}

          {login && (
            <StyledLink>
              <ChangeProfile />
              Mudar Informações
            </StyledLink>
          )}
          <StyledLink>
            <Services onClick={() => history.push("/ranking")} />
            Chamados
          </StyledLink>
        </Menu>
      )}
    </>
  );
};

export default Header;
