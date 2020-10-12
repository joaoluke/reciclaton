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
  currentBusiness,
  goldHonor,
  silverHonor,
  bronzeHonor,
  lastBusinessRefElement,
}) => {
  return (
    <>
      {score === "mensal" &&
        size === "Sem filtro" &&
        category === "Sem filtro" &&
        currentBusiness.sort(orderByScoreMonth).map((item, index) => {
          if (currentBusiness.length === index + 1) {
            return (
              <div ref={lastBusinessRefElement}>
                <Case1
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
                />
              </div>
            );
          } else {
            return (
              <Case1
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
              />
            );
          }
        })}

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category === "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreMonth)
          .filter((item) => item.businessSize === size)
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <div ref={lastBusinessRefElement}>
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
                </div>
              );
            } else {
              return (
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
              );
            }
          })}

      {score === "mensal" &&
        size === "Sem filtro" &&
        category !== "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreMonth)
          .filter((item) => item.business === category)
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <div ref={lastBusinessRefElement}>
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
                </div>
              );
            } else {
              return (
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
              );
            }
          })}

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category !== "Sem filtro" &&
        currentBusiness.sort(orderByScoreMonth).map((item, index) => {
          if (currentBusiness.length === index + 1) {
            return (
              <div ref={lastBusinessRefElement}>
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
              </div>
            );
          } else {
            return (
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
            );
          }
        })}
    </>
  );
};

export default Month;
