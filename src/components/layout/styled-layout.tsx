import styled from "styled-components";

export const Logo = styled.div`
  margin: 0 10px;
  width: 35px;
  height: 40px;
  background-position: -1px;
  background-image: url(${LogoResponsivo});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 540px) {
    width: 30px;
    height: 35px;
    background-position: -1px;
    background-image: url(${LogoResponsivo});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
