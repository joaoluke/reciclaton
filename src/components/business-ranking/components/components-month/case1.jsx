/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import { StyleRoot } from "radium";
import Timeline from "react-dual-timeline";

const Case1 = ({
  bronzeTrophy,
  silverTrophy,
  goldTrophy,
  business,
  goldHonor,
  silverHonor,
  bronzeHonor,
  orderByScoreMonth,
}) => {
  const history = useHistory();
  return (
    <div className="App" style={{ backgroundColor: "#ccc" }}>
      <StyleRoot>
        <Timeline activeColor="#68A428" animations={false}>
          {business.sort(orderByScoreMonth).map((item, index) => (
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
                  index < (2 * business.sort(orderByScoreMonth).length) / 3 && (
                    <img src={silverHonor} style={{ width: "30px" }} />
                  )}
                {index >= (2 * business.sort(orderByScoreMonth).length) / 3 &&
                  index <=
                    (3 * business.sort(orderByScoreMonth).length) / 3 && (
                    <img src={bronzeHonor} style={{ width: "30px" }} />
                  )}
              </div>
              <div
                onClick={() => history.push(`users/${item.id}`)}
                style={{ color: "green", fontWeight: "bolder" }}
              >
                {item.brand}
              </div>
              <div>
                <a href={item.website}>{item.website}</a>
              </div>
              <div>Categoria: {item.business}</div>
              <div>
                <span>Porte: {item.businessSize}</span>
              </div>
              <div>
                <img
                  src={item.imageUrl}
                  style={{ width: "40px", borderRadius: "10px" }}
                />
              </div>
              <div style={{ color: "#000" }}>{item.score.mensal} Score</div>
            </div>
          ))}
        </Timeline>
      </StyleRoot>
    </div>
  );
};

export default Case1;
