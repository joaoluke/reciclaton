import styled from 'styled-components';

export const BackgroundRank = styled.div`
  overflow: hidden;
  width: 100%;
  @media (max-width: 1024px) {
    overflow: auto;
}
`;

export const BusinessCard = styled.div`
  display: flex;
  overflow: hidden;
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
    cursor: pointer;
    margin-left: 10px;
    font-size: 16px;
`;

export const StyledTable = styled.table`
border: 0px solid #333;
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
text-align: center;
color: #17271A;
 span::first-letter {
    text-transform: uppercase;
 }
`;

export const Tr = styled.tr`
border: 0px solid #333;
text-align: center;
color: #17271A;
span::first-letter {
    text-transform: uppercase;
 }
`;

export const Option = styled.option`
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
flex-direction: row;
background-color: whitesmoke;
width: 100%;
justify-content: space-evenly;
@media (max-width: 600px) {
    flex-direction:  column;
}
`;

export const SpotlightChildDiv = styled.div`
display: flex;
margin: 0 15px;
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
`;

export const Hr = styled.hr`
heigth: 1px;
width: 100%;
`;

export const StyledSpan = styled.span`
font-size: 40px;
`;

export const StyledImg = styled.img`
width: 100px;
border-radius: 60px;
`;

export const StyledSpanBrand = styled.span`
font-weigth: bolder;
`;

export const StyledH3 = styled.h3`
display: flex;
justify-content: flex-start;
`;

export const StyledDiv = styled.div`
display: flex;
margin-bottom: 2.5%;
justify-content: center;
align-items: center;
`;

export const StyledThead = styled.thead`
background-color: #60789C;
`;

export const StyledThophieImage = styled.img`
width: 40px;
`;

export const StyledTh = styled.th`
color: whitesmoke;
`;

export const BrandTd = styled.td`
display: flex;
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
width: 40px;
border-radius: 50px;
`;

export const StyledBrandSpan = styled.span`
color: green;
font-weigth: bolder;
`;

export const ImageTrophies = styled.img`
width: 30px;
`;

export const ScoreTd = styled.td`
color: #5A91C7;
`;