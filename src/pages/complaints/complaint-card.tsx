import React from 'react';
import styled from 'styled-components';

interface props {
  imgUrl: string;
  complaintMsg: string;
  reviews: number;
  concordoClick: (a: number, b: number[], c: number) => {};
  discordoClick: (a: number, b: number[], c: number) => {};
  allow: number[];
  notAllow: number[];
  id: number;
}

const ComplaintCard = ({ imgUrl, complaintMsg, reviews, concordoClick, discordoClick, allow, notAllow, id }: props) => {

  return (
    <StyledCard key={id}>
      <CardImg src={imgUrl} />
      <p>{complaintMsg}</p>
      <p>{reviews} Reviews</p>
      <DivButton>
        <StyledButtonGreen onClick={() => concordoClick(id, allow, reviews)}>
          Concordo
        </StyledButtonGreen>
        <StyledButtonRed onClick={() => discordoClick(id, notAllow, reviews)}>
          Discordo
        </StyledButtonRed>
      </DivButton>
    </StyledCard>
  );

}

export default ComplaintCard;

const StyledCard = styled.div`

  max-width: 80vw;
  width: 350px;
  box-sizing: border-box;
  text-align: center; 
  border: solid 1px gray;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 10px 5px;
  padding: 5px;
  background-color:rgba(255,255,255,.8);
  
`
const CardImg = styled.img`
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto;
`

const DivButton = styled.div`
  
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 10px;
`

const StyledButtonGreen = styled.button`

    font-size: 25px;
    padding: 10px;
    border: none;
    color: white;
    letter-spacing:2px;
    background-color: #68A428;
    margin-bottom: 10px;
`
const StyledButtonRed = styled(StyledButtonGreen)`
  background-color: #F55536;
  `
