import styled from 'styled-components';


export const StyleMain = styled.div`
  background-color: #FFFFFF;
  margin-top: 5px;
  max-width: 100vw;
  min-height: 100vh;
`;

export const StyleTitle = styled.h3`
  text-align: center;
  font-size: 1.7rem
`;

export const StyleParagraph = styled.p`
  margin-left: 15px ;
  font-size: 30px;
`;

export const StyledEmpresa = styled.div` 
  text-align: justify;
  text-justify: inter-word;
  margin-top: 50px;
  width:370px;
`;

export const StyleImg = styled.img`
 margin-right: 0px;
  width: 50rem;
  height: 50rem;
  @media screen and (max-width: 540px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const StyleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
`;

export const StyledBox = styled.div`
  color: #6C9148;
  width: 100%;
  height: fit-content;
  padding:  10px 0 50px 0 ;
  background-color: #C2F185;
  margin-top: 10px;
  display: flex;
  flex-flow: wrap column;
`;

export const StyleCleitinho = styled.img`
 margin-right: 30px;
  width: 50rem;
  height: 50rem;
  @media screen and (max-width: 540px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const StyleSelo = styled.div`
  color: #6C9148;
  background-color: #C2F185;
  text-align: justify;
  width: 25vw;
  height: 60vh;
  margin-top: 70px ;
  overflow: auto;
  border-radius:70px;
  padding:  0 45px 0;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledList = styled.div`
  li{font-size: 20px}
  display: inline-block;
  margin: 0 auto
`;

export const StyledSocial = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #C2F185;
  padding-bottom: 20px;
`;

export const StyledLogo = styled.div<{ logo: string }>`
  background-image: url(${props => props.logo});
  height: 60px;
  width: 60px;
  background-repeat: no-repeat;
 `; 
