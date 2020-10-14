/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Case1 from "./components-month/case1";
import Case2 from "./components-month/case2";
import Case3 from "./components-month/case3";
import Case4 from "./components-month/case4";

const Month = ({
  bronzeTrophy,
  silverTrophy,
  goldTrophy,
  orderByScoreMonth,
  score,
  size,
  category,
  business,
  goldHonor,
  silverHonor,
  bronzeHonor,
}) => {
  return (
    <div>
      {score === "mensal" &&
        size === "Sem filtro" &&
        category === "Sem filtro" && (
          <Case1
            goldHonor={goldHonor}
            silverHonor={silverHonor}
            bronzeHonor={bronzeHonor}
            bronzeTrophy={bronzeTrophy}
            business={business}
            silverTrophy={silverTrophy}
            goldTrophy={goldTrophy}
            orderByScoreMonth={orderByScoreMonth}
            size={size}
          />
        )}

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category === "Sem filtro" &&
        business
          .sort(orderByScoreMonth)
          .filter((item) => item.businessSize === size)
          .map((item, index) => (
            <Case2
              item={item}
              index={index}
              goldHonor={goldHonor}
              silverHonor={silverHonor}
              bronzeHonor={bronzeHonor}
              bronzeTrophy={bronzeTrophy}
              business={business}
              silverTrophy={silverTrophy}
              goldTrophy={goldTrophy}
              orderByScoreMonth={orderByScoreMonth}
              size={size}
            />
          ))}

      {score === "mensal" &&
        size === "Sem filtro" &&
        category !== "Sem filtro" &&
        business
          .sort(orderByScoreMonth)
          .filter((item) => item.business === category)
          .map((item, index) => (
            <Case3
              item={item}
              index={index}
              goldHonor={goldHonor}
              silverHonor={silverHonor}
              bronzeHonor={bronzeHonor}
              bronzeTrophy={bronzeTrophy}
              business={business}
              silverTrophy={silverTrophy}
              goldTrophy={goldTrophy}
              orderByScoreMonth={orderByScoreMonth}
              category={category}
            />
          ))}

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category !== "Sem filtro" &&
        business
          .sort(orderByScoreMonth)
          .map((item, index) => (
            <Case4
              item={item}
              index={index}
              goldHonor={goldHonor}
              silverHonor={silverHonor}
              bronzeHonor={bronzeHonor}
              bronzeTrophy={bronzeTrophy}
              business={business}
              silverTrophy={silverTrophy}
              goldTrophy={goldTrophy}
              orderByScoreMonth={orderByScoreMonth}
              category={category}
              size={size}
            />
          ))}
    </div>
  );
};

export default Month;
