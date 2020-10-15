import styled from 'styled-components';

export const BackgroundRank = styled.div`
font-family: 'Roboto', sans-serif;
  overflow: hidden;
  width: 100%;
  @media (max-width: 1024px) {
    overflow: auto;
}
`;

export const BusinessCard = styled.div`
  display: flex;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
//   border: 1px solid black;
  margin-bottom: 5px;
//   padding: 1rem;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items:center;
  border-radius: 20px;
  margin-top: 50px;
     h4::first-letter {
         text-transform: uppercase;
     }
`;

export const StyledButton = styled.button`
    background: transparent;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    margin-left: 10px;
    font-size: 16px;
`;

export const StyledTable = styled.table`
border: 0px solid #333;
font-family: 'Roboto', sans-serif;
display: hidden;
tr:nth-child(2n + 1) {
    // background: #e1e1e1;
    background: #92D143;
 }
 tr:nth-child(2n) {
     background: #F3E8E2;
 }
`;

export const Td = styled.td`
border: 0px solid #333;
font-family: 'Roboto', sans-serif;
text-align: center;
color: #17271A;
 span::first-letter {
    text-transform: uppercase;
 }
`;

export const Tr = styled.tr`
border: 0px solid #333;
font-family: 'Roboto', sans-serif;
text-align: center;
color: #17271A;
span::first-letter {
    text-transform: uppercase;
 }
`;

export const Option = styled.option`
font-family: 'Roboto', sans-serif;
:hover {
    cursor: pointer;
    border: 1px solid black;
}
:active {
    color: green;
}
`;

export const SpotlightDiv = styled.div`
display: flex;
font-family: 'Roboto', sans-serif;
flex-direction: row;
background-color: whitesmoke;
width: 100%;
justify-content: space-evenly;
@media (max-width: 700px) {
    flex-direction:  column;
}
`;

export const SpotlightChildDiv = styled.div`
display: flex;
margin: 0 15px;
font-family: 'Roboto', sans-serif;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: center;
padding: 5%;
:hover {
    cursor: pointer;
    // border: 0px 0px solid gray;
    background-color: white;
    // width: 150%;
}
span::first-letter{
    text-transform: uppercase;
}

@media (max-width: 600px) {
    :hover {
        cursor: pointer;
        border: none;
        width: 100%;
    }
}
`;

export const H1 = styled.h1`
font-size: 26px;
font-family: 'Roboto', sans-serif;
font-family: 'Roboto', sans-serif;
`;

export const Hr = styled.hr`
font-family: 'Roboto', sans-serif;
heigth: 1px;
width: 100%;
`;

export const StyledSpan = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 40px;
`;

export const StyledImg = styled.img`
font-family: 'Roboto', sans-serif;
width: 100px;
border-radius: 60px;
`;

export const StyledSpanBrand = styled.span`
font-family: 'Roboto', sans-serif;
font-weigth: bolder;
`;

export const StyledH3 = styled.h3`
font-family: 'Roboto', sans-serif;
display: flex;
justify-content: flex-start;
`;

export const StyledDiv = styled.div`
font-family: 'Roboto', sans-serif;
display: flex;
margin-bottom: 2.5%;
justify-content: center;
align-items: center;
`;

export const StyledThead = styled.thead`
font-family: 'Roboto', sans-serif;
background-color: #60789C;
`;

export const StyledThophieImage = styled.img`
font-family: 'Roboto', sans-serif;
width: 40px;
`;

export const StyledTh = styled.th`
font-family: 'Roboto', sans-serif;
color: whitesmoke;
`;

export const BrandTd = styled.td`
display: flex;
font-family: 'Roboto', sans-serif;
align-content: center;
align-items: center;
justify-content: space-start;
cursor: pointer;
border: 0px solid #333;
text-align: center;
color: #17271A;
 span::first-letter {
    text-transform: uppercase;
 }
`;

export const BrandImg = styled.img`
font-family: 'Roboto', sans-serif;
width: 40px;
border-radius: 50px;
@media only screen and (max-width: 500px) {
    display: none;
}
`;

export const StyledBrandSpan = styled.span`
font-family: 'Roboto', sans-serif;
color: green;
font-weigth: bolder;
`;

export const ImageTrophies = styled.img`
font-family: 'Roboto', sans-serif;
width: 30px;
`;

export const ScoreTd = styled.td`
font-family: 'Roboto', sans-serif;
color: #5A91C7;
`;

export const StyledThHide = styled(StyledTh)`
font-family: 'Roboto', sans-serif;
  @media (max-width: 1000px) {
    display: none;
}
`;

export const TdHide = styled(Td)`
font-family: 'Roboto', sans-serif;
@media (max-width: 1000px) {
    display: none;
}
`;

export const TdHideSize = styled(Td)`
font-family: 'Roboto', sans-serif;
@media (max-width: 700px) {
    display: none;
}
`;

export const StyledThHideSize = styled(StyledTh)`
font-family: 'Roboto', sans-serif;
    @media (max-width: 701px) {
        display: none;
    }
`;

export const StyledThHideCategory = styled(StyledTh)`
font-family: 'Roboto', sans-serif;
@media (max-width: 900px) {
    display: none;
}
`;

export const TdHideCategory = styled(Td)`
font-family: 'Roboto', sans-serif;
@media (max-width: 900px) {
    display: none;
}
`;