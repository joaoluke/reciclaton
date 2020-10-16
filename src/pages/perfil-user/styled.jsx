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
  width: 99vw;
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
  width:200px;
  height:200px;
  background-color:white;
`;

export const StyledRankUser = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: center;
  background: #68A428;
  width: 5rem;
  max-width: 250px;
  max-height: 250px;
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

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  text-align: center;
  padding: 10px;
  width: 20vw;
  @media only screen and (max-width: 768px) {
    width: 50vw;
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  border: 1px solid;
`;

export const StyledInput = styled.input`
  border: 1px solid;
`;

export const StyledLabel = styled.label`
  margin: 20px 0 5px;
  
  :nth-child(1){
    margin-top: 0px;
  }
`

export const StyledButtonSubmit = styled.button`
  width: fit-content;
  margin: 20px auto 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  height: calc(2rem + 15px);
  padding: 0 20px;
  font-weight: bolder;
  text-align: center;
  box-sizing: border-box;
  :hover {
    color: #b70101;
    text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
    color: white;
  }
  :focus {
    outline-style: none;
  }
  color: white;
  background-color: #68A428;
`;

export const StyledP = styled.p`
  margin: 0;
  color: red;
`;

export const StyledButtonCancel = styled.button`
  width: fit-content;
  margin: 20px auto 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  height: calc(2rem + 15px);
  padding: 0 20px;
  font-weight: bolder;
  text-align: center;
  box-sizing: border-box;
  :hover {
    color: #b70101;
    text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
    color: white;
  }
  :focus {
    outline-style: none;
  }
  color: white;
  background-color: #f55536;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;