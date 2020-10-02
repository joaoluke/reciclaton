import styled from "styled-components";

export const StyleMain = styled.div`
  background-color: #ffffff;
  margin-top: 5px;
  max-width: 100vw;
  min-height: 100vh;
`;

export const StyleTitle = styled.h3`
  text-align: center;
  font-size: 1.7rem;
  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`;

export const StyleParagraph = styled.p`
  margin-left: 15px;
  font-size: 30px;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const StyledEmpresa = styled.div`
  text-align: justify;
  text-justify: inter-word;
  margin-top: 50px;
  width: 100%;
  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const StyleImg = styled.img`
  margin-right: 0px;
  width: 50rem;
  height: 42rem;
  @media screen and (max-width: 540px) {
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
  }
`;

export const StyleContainer = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
  @media screen and (max-width: 540px) {
    flex-flow: column wrap;
    justify-content: center;
  }
`;

export const StyledBox = styled.div`
  color: #6c9148;
  width: 100%;
  height: fit-content;
  padding: 10px 0 50px 0;
  background-color: #c2f185;
  margin-top: 10px;
  display: flex;
  flex-flow: wrap column;
`;

export const StyleCleitinho = styled.img`
  margin-right: 30px;
  width: 50rem;
  height: 50rem;
  @media screen and (max-width: 540px) {
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
  }
`;

export const StyleSelo = styled.div`
  color: #6c9148;
  background-color: #c2f185;
  text-align: justify;
  width: 25vw;
  height: 60vh;
  margin-top: 70px;
  overflow: auto;
  border-radius: 70px;
  padding: 0 45px 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 540px) {
    width: 100vw;
    border-radius: 2px;
    padding: 0;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
`;

export const StyledList = styled.div`
  ul li {
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 20px;
  }
  display: inline-block;
  margin: 0 auto;
  @media screen and (max-width: 540px) {
    li {
      font-size: 1rem;
    }
  }
`;

export const StyledSocial = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #c2f185;
  padding-bottom: 20px;
`;

export const StyledLogo = styled.div<{ logo: string }>`
  background-image: url(${(props) => props.logo});
  height: 60px;
  width: 60px;
  background-repeat: no-repeat;
  @media screen and (max-width: 540px) {
    background-size: cover;
    height: 30px;
    width: 30px;
  }
`;

export const StyledTextBox = styled(StyleParagraph)`
  font-size: 20px;
  @media screen and (max-width: 540px) {
    font-size: 12px;
    margin: 0 28px;
    text-align: left;
  }
`;
