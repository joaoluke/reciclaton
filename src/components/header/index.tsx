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
  SubmitButton,
} from "./header-style";

import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [hiddenSearch, setHiddenSearch] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const FormValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
                <motion.div animate={{ x: 20 }}>
                  <form onSubmit={(e) => FormValue(e)}>
                    <Open onClick={() => setHiddenSearch(false)} />
                    <SearchInput
                      type="text"
                      placeholder="Input some company"
                      name="search"
                      onChange={(e) => getValue(e)}
                    />
                    <SubmitButton type="submit">
                      <SearchIcon />
                    </SubmitButton>
                  </form>
                </motion.div>
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
