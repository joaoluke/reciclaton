import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
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
  SubmitButton,
  Login,
} from "./header-style";
import { logout } from "../../redux/action/login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const FormValue = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const getValue = (e) => {
    setSearch(e.target.value);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { authen } = useSelector((state) => state.login);
  const decodefy = authen && decode(authen);

  useEffect(() => {
    console.log(authen);
  }, [authen]);

  return (
    <>
      <StyledHeader>
        <HeaderBar>
          <Logo
            onClick={() => {
              history.push("/ranking");
              setMenu(false);
            }}
          />

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

          <div>
            <StyledMenu onClick={() => setMenu(!menu)} />
          </div>
        </HeaderBar>
      </StyledHeader>
      {menu && (
        <Menu>
          {authen && (
            <StyledLink
              onClick={() => {
                history.push("/ranking");
                dispatch(logout());
                setMenu(false);
              }}
            >
              <Logout />
              Deslogar
            </StyledLink>
          )}

          {authen ? (
            <StyledLink
              onClick={() => {
                history.push(`/profile/${decodefy && decodefy.sub}`);
                setMenu(false);
              }}
            >
              <User />
              Perfil
            </StyledLink>
          ) : (
              <StyledLink
                onClick={() => {
                  history.push("/login");
                  setMenu(false);
                }}
              >
                <Login />
              Login
              </StyledLink>
            )}

          {authen && (
            <StyledLink>
              <ChangeProfile />
              Mudar Informações
            </StyledLink>
          )}
          <StyledLink>
            <Services
              onClick={() => {
                history.push("/ranking");
                setMenu(false);
              }}
            />
            Chamados
          </StyledLink>
        </Menu>
      )}
    </>
  );
};

export default Header;
