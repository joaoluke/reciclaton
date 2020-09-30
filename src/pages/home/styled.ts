import styled from 'styled-components';


export const StyleMain = styled.div`
  background-color: #FFFFFF;
  margin-top: 5px;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;


export const StyleTitle = styled.h3`
  text-align: center;
  font-size: 1.7rem
`;

export const StyleParagraph = styled.p`
  margin-left: 15px ;
`

export const StyledEmpresa = styled.div` 
  margin-top: 50px;
  height: 200px;
  width: 200px;
`

export const StyleImg = styled.img`
 margin-right: 30px;
  width: 50rem;
  height: 50rem;
  @media screen and (max-width: 540px) {
    width: 25rem;
    height: 25rem;
  }
`;
export const StyleContainer = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;

`
export const StyledBox = styled.div`
  color: #6C9148;
  width: 100%;
  height: fit-content;
  padding:  10px 0 50px 0 ;
  background-color: #C2F185;
  margin-top: 10px
`
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
  color: #5E9424;
  background-color: #95C763;
  width: 25vw;
  height: 60vh;
  margin-top: 70px ;
  overflow: auto;
  /* overflow-x: hidden */
  border-radius:70px;
  padding: 45px;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`