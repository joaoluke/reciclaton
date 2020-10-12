/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import { SpotlightChildDiv } from "../../styled-business";

const Top3 = ({
  item,
  index,
  score,
  goldTrophy,
  silverTrophy,
  bronzeTrophy,
}) => {
  const history = useHistory();
  return (
    <SpotlightChildDiv
      key={index}
      onClick={() => history.push(`users/${item.id}`)}
    >
      <span style={{ fontSize: "40px" }}>{index + 1}ª</span>
      <img
        src={item.imageUrl}
        style={{ width: "100px", borderRadius: "60px" }}
      />
      <span style={{ fontWeight: "bolder" }}>{item.brand}</span>
      {score === "mensal" ? item.score.mensal : item.score.anual} pontos
      <img
        src={
          index === 0 ? goldTrophy : index === 1 ? silverTrophy : bronzeTrophy
        }
        style={{ width: "40px" }}
      />
    </SpotlightChildDiv>
  );
};

export default Top3;
