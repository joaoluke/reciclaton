/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { LastElement } from "../styled-business";
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
  currentBusiness,
  lastBusinessRefElement
}) => {
  return (
    <div>
      {score === "mensal" &&
        size === "Sem filtro" &&
<<<<<<< HEAD
        category === "Sem filtro" && (
          <Case1
            goldHonor={goldHonor}
            silverHonor={silverHonor}
            bronzeHonor={bronzeHonor}
            bronzeTrophy={bronzeTrophy}
            business={business}
            currentBusiness={currentBusiness}
            silverTrophy={silverTrophy}
            goldTrophy={goldTrophy}
            orderByScoreMonth={orderByScoreMonth}
            size={size}
            lastBusinessRefElement={lastBusinessRefElement}
          />
        )}
=======
        category === "Sem filtro" &&
        currentBusiness.sort(orderByScoreMonth).map((item, index) => {
          if (currentBusiness.length === index + 1) {
            return (
              <LastElement ref={lastBusinessRefElement}>
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
              </LastElement>
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
>>>>>>> rankingComponents

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category === "Sem filtro" &&
        business
          .sort(orderByScoreMonth)
          .filter((item) => item.businessSize === size)
<<<<<<< HEAD
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
=======
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <LastElement ref={lastBusinessRefElement}>
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
                </LastElement>
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
>>>>>>> rankingComponents

      {score === "mensal" &&
        size === "Sem filtro" &&
        category !== "Sem filtro" &&
        business
          .sort(orderByScoreMonth)
          .filter((item) => item.business === category)
<<<<<<< HEAD
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
=======
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <LastElement ref={lastBusinessRefElement}>
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
                </LastElement>
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
>>>>>>> rankingComponents

      {score === "mensal" &&
        size !== "Sem filtro" &&
        category !== "Sem filtro" &&
<<<<<<< HEAD
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
=======
        currentBusiness.sort(orderByScoreMonth).map((item, index) => {
          if (currentBusiness.length === index + 1) {
            return (
              <LastElement ref={lastBusinessRefElement}>
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
              </LastElement>
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
>>>>>>> rankingComponents
  );
};

export default Month;
