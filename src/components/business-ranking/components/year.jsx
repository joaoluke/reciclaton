/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Case1 from "./components-year/case1";
import Case2 from "./components-year/case2";
import Case3 from "./components-year/case3";
import Case4 from "./components-year/case4";

const Year = ({
  bronzeTrophy,
  silverTrophy,
  goldTrophy,
  orderByScoreYear,
  score,
  size,
  category,
  currentBusiness,
  goldHonor,
  silverHonor,
  bronzeHonor,
  lastBusinessRefElement,
}) => {
  return (
    <>
      {score === "anual" &&
        size === "Sem filtro" &&
        category === "Sem filtro" &&
        currentBusiness.sort(orderByScoreYear).map((item, index) => {
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
                  currentBusiness={currentBusiness}
                  silverTrophy={silverTrophy}
                  goldTrophy={goldTrophy}
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
                currentBusiness={currentBusiness}
                silverTrophy={silverTrophy}
                goldTrophy={goldTrophy}
              />
            );
          }
        })}

      {score === "anual" &&
        size !== "Sem filtro" &&
        category === "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreYear)
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
                    currentBusiness={currentBusiness}
                    silverTrophy={silverTrophy}
                    goldTrophy={goldTrophy}
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
                  currentBusiness={currentBusiness}
                  silverTrophy={silverTrophy}
                  goldTrophy={goldTrophy}
                />
              );
            }
          })}

      {score === "anual" &&
        size === "Sem filtro" &&
        category !== "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreYear)
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
                    currentBusiness={currentBusiness}
                    silverTrophy={silverTrophy}
                    goldTrophy={goldTrophy}
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
                  currentBusiness={currentBusiness}
                  silverTrophy={silverTrophy}
                  goldTrophy={goldTrophy}
                />
              );
            }
          })}

      {score === "anual" &&
        size !== "Sem filtro" &&
        category !== "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreYear)
          .filter((item) => item.businessSize === size)
          .filter((item) => item.business === category)
          .map((item, index) => {
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
                    currentBusiness={currentBusiness}
                    silverTrophy={silverTrophy}
                    goldTrophy={goldTrophy}
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
                  currentBusiness={currentBusiness}
                  silverTrophy={silverTrophy}
                  goldTrophy={goldTrophy}
                />
              );
            }
          })}
    </>
  );
};

export default Year;
