import React from "react";
import { Td, Tr } from "../styled-business";
import { useHistory } from "react-router-dom";
import Case1 from "./components-month/case1";

const Month = ({
  bronzeTrophie,
  silverTrophie,
  goldTrophie,
  orderByScoreMonth,
  score,
  size,
  category,
  currentBusiness,
  goldHonor,
  silverHonor,
  bronzeHonor,
  lastBusinessRefElement,
}) => {
  const history = useHistory();
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
                  bronzeTrophie={bronzeTrophie}
                  currentBusiness={currentBusiness}
                  silverTrophie={silverTrophie}
                  goldTrophie={goldTrophie}
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
                bronzeTrophie={bronzeTrophie}
                currentBusiness={currentBusiness}
                silverTrophie={silverTrophie}
                goldTrophie={goldTrophie}
              />
            );
          }
        })}

      {score === "mensal" &&
        size != "Sem filtro" &&
        category === "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreMonth)
          .filter((item) => item.businessSize === size)
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <Tr ref={lastBusinessRefElement} key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            } else {
              return (
                <Tr key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            }
          })}

      {score === "mensal" &&
        size === "Sem filtro" &&
        category != "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreMonth)
          .filter((item) => item.business === category)
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <Tr key={index} ref={lastBusinessRefElement}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            } else {
              return (
                <Tr key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            }
          })}

      {score === "mensal" &&
        size != "Sem filtro" &&
        category != "Sem filtro" &&
        currentBusiness
          .sort(orderByScoreMonth)
          .filter((item) => item.currentBusiness === category)
          .filter((item) => item.businessSize === size)
          .map((item, index) => {
            if (currentBusiness.length === index + 1) {
              return (
                <Tr ref={lastBusinessRefElement} key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            } else {
              return (
                <Tr key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-start",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    }{" "}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <span
                        onClick={() => history.push(`users/${item.id}`)}
                        style={{ color: "green", fontWeight: "bolder" }}
                      >
                        {item.brand}
                      </span>
                    }
                  </Td>
                  <Td>
                    {index === 0 && (
                      <img src={goldTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 1 && (
                      <img src={silverTrophie} style={{ width: "30px" }} />
                    )}
                    {index === 2 && (
                      <img src={bronzeTrophie} style={{ width: "30px" }} />
                    )}
                    {index <= currentBusiness.length / 3 && index > 2 && (
                      <img src={goldHonor} style={{ width: "30px" }} />
                    )}
                    {index > currentBusiness.length / 3 &&
                      index < (2 * currentBusiness.length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >= (2 * currentBusiness.length) / 3 &&
                      index <= (3 * currentBusiness.length) / 3 && (
                        <img src={bronzeHonor} style={{ width: "30px" }} />
                      )}
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.currentBusiness}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              );
            }
          })}
    </>
  );
};

export default Month;
