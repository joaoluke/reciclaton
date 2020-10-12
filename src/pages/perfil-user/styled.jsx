import styled from 'styled-components';

export const StyledPerfilDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #C3E79C;
  width: 100vw;
  min-height: 25vh;
  padding: 2vh 1px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-width:768px){
    justify-content:space-between;
  }
  `;

export const StyledPerfilMaterials = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  background-color:#68A428;
  color:white;
  height: fit-content;
  width: fit-content;
  font-size: 20px;
  padding: 7px;
  margin: 0 auto;
`;

export const StyledMaterials = styled.div`
  margin: 0 10px; 
  padding: 0;
  svg{
    height: 30px;
  }
`;

export const StyledUserImage = styled.img`
  border-radius: 1rem;
`;

export const StyledRankUser = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: center;
  background: #68A428;
  width: 5rem;
  height: 4rem;
  padding: 1rem;
  margin-top: 1em;
  border-radius: 1.5rem;
  p {
    text-align: center;
    padding: 0;
    margin: 0;
    color:white;
    font-weight: bolder;
  }
`;

export const StyledImgRankCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin: 1vw;
`;

export const InfoDiv = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 2vw;

`
export const StyledReportDiv = styled.div`
  height: fit-content; 
  margin: 0 3vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items:center;
  font-size: 1.2rem;
  @media only screen and (max-width:768px){
    width: 100vw;
    flex-flow: row wrap;
  }
  `
export const ReportButton = styled.button`

  border: 0;
  background-color: rgba(0,0,0,0);
  height: calc(2.5rem + 15px);
  padding: 15px;
  font-weight:bolder;
  text-align: center;
  box-sizing: border-box;
  :hover{
    color: #B70101;
    text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
  }
  :focus{
    outline-style: none;
  }
  @media only screen and (max-width:768px){
    color: white;
    background-color:#F55536;
    :hover{
    color: white;
  }

  }
`
export const FuncButton = styled(ReportButton)`
:hover{
  color: #14453D;
}
@media only screen and (max-width:768px){
    color: white;
    background-color:rgb(104, 164, 40);
    :hover{
    color: white;
  }    
  }

`