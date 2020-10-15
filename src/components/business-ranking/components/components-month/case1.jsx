/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import { StyleRoot } from "radium";
import Timeline from "react-dual-timeline";
import {TextBusiness, TextTitleandWeb} from "../../styled-business"

const Case1 = ({
  bronzeTrophy,
  silverTrophy,
  goldTrophy,
  business,
  goldHonor,
  silverHonor,
  bronzeHonor,
  orderByScoreMonth,
  currentBusiness,
  lastBusinessRefElement,
}) => {
  const history = useHistory();
  return (
    <div className="App" style={{ backgroundColor: "#ccc" }}>
      <StyleRoot>
        <Timeline activeColor="#68A428" animations={false}>
          {currentBusiness.sort(orderByScoreMonth).map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <div ref={lastBusinessRefElement}>
                  <div key={index} icon={index + 1 + "ª"}>
                    <div>
                      {index === 0 && (
                        <img
                          src={goldTrophy}
                          style={{ width: "50px", height: "50px" }}
                        />
                      )}
                      {index === 1 && (
                        <img
                          src={silverTrophy}
                          style={{ width: "45px", height: "45px" }}
                        />
                      )}
                      {index === 2 && (
                        <img
                          src={bronzeTrophy}
                          style={{ width: "40px", height: "40px" }}
                        />
                      )}
                      {index <= business.sort(orderByScoreMonth).length / 3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index > business.sort(orderByScoreMonth).length / 3 &&
                        index <
                          (2 * business.sort(orderByScoreMonth).length) / 3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 * business.sort(orderByScoreMonth).length) / 3 &&
                        index <=
                          (3 * business.sort(orderByScoreMonth).length) / 3 && (
                          <img src={bronzeHonor} style={{ width: "30px" }} />
                        )}
                    </div>
                    <TextTitleandWeb
                      onClick={() => history.push(`users/${item.id}`)}
                      style={{ fontWeight: "bolder" }}
                    >
                      {item.brand}
                    </TextTitleandWeb>
                    <TextTitleandWeb>
                      <a href={item.website}>{item.website}</a>
                    </TextTitleandWeb>
                    <TextBusiness>Categoria: {item.business}</TextBusiness>
                    <TextBusiness>
                      <span>Porte: {item.businessSize}</span>
                    </TextBusiness>
                    <div>
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "10px" }}
                      />
                    </div>
                    <TextBusiness>
                      {item.score.mensal} Score
                    </TextBusiness>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} icon={index + 1 + "ª"}>
                  <div>
                    {index === 0 && (
                      <img
                        src={goldTrophy}
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={silverTrophy}
                        style={{ width: "45px", height: "45px" }}
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={bronzeTrophy}
                        style={{ width: "40px", height: "40px" }}
                      />
                    )}
                    {index <= business.sort(orderByScoreMonth).length / 3 &&
                      index > 2 && (
                        <img src={goldHonor} style={{ width: "30px" }} />
                      )}
                    {index > business.sort(orderByScoreMonth).length / 3 &&
                      index <
                        (2 * business.sort(orderByScoreMonth).length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >=
                      (2 * business.sort(orderByScoreMonth).length) / 3 &&
                      index <=
                        (3 * business.sort(orderByScoreMonth).length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </div>
                  <TextTitleandWeb
                    onClick={() => history.push(`users/${item.id}`)}
                    style={{ fontWeight: "bolder" }}
                  >
                    {item.brand}
                  </TextTitleandWeb>
                  <TextTitleandWeb>
                    <a href={item.website}>{item.website}</a>
                  </TextTitleandWeb>
                  <TextBusiness>Categoria: {item.business}</TextBusiness>
                  <TextBusiness>
                    <span>Porte: {item.businessSize}</span>
                  </TextBusiness>
                  <div>
                    <img
                      src={item.imageUrl}
                      style={{ width: "40px", borderRadius: "10px" }}
                    />
                  </div>
                  <TextBusiness>{item.score.mensal} Score</TextBusiness>
                </div>
              );
            }
          })}
        </Timeline>
      </StyleRoot>
    </div>
  );
};

export default Case1;
