import React from "react";
import { Td, Tr } from "../styled-business";
import { useHistory } from "react-router-dom";

const Year = ({
  bronzeTrophie,
  silverTrophie,
  goldTrophie,
  orderByScoreYear,
  score,
  size,
  category,
  business,
  goldHonor,
  silverHonor,
  bronzeHonor,
}) => {
  const history = useHistory();
  return (
    <>
      {score === "anual" &&
        size === "Sem filtro" &&
        category === "Sem filtro" &&
        business.sort(orderByScoreYear).map((item, index) => (
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
              {index <= business.length / 3 && index > 2 && (
                <img src={goldHonor} style={{ width: "30px" }} />
              )}
              {index > business.length / 3 &&
                index < (2 * business.length) / 3 && (
                  <img src={silverHonor} style={{ width: "30px" }} />
                )}
              {index >= (2 * business.length) / 3 &&
                index <= (3 * business.length) / 3 && (
                  <img src={bronzeHonor} style={{ width: "30px" }} />
                )}
            </Td>
            <Td style={{ color: "#5A91C7" }}>{item.score.anual} </Td>
            <Td>
              <a href={item.website}>{item.website}</a>
            </Td>
            <Td>{item.business}</Td>
            <Td>{<span>{item.businessSize}</span>}</Td>
          </Tr>
        ))}

      {score === "anual" &&
        size != "Sem filtro" &&
        category === "Sem filtro" &&
        business
          .sort(orderByScoreYear)
          .filter((item) => item.businessSize === size)
          .map((item, index) => (
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
                {index <= business.length / 3 && index > 2 && (
                  <img src={goldHonor} style={{ width: "30px" }} />
                )}
                {index > business.length / 3 &&
                  index < (2 * business.length) / 3 && (
                    <img src={silverHonor} style={{ width: "30px" }} />
                  )}
                {index >= (2 * business.length) / 3 &&
                  index <= (3 * business.length) / 3 && (
                    <img src={bronzeHonor} style={{ width: "30px" }} />
                  )}
              </Td>
              <Td style={{ color: "#5A91C7" }}>{item.score.anual} </Td>
              <Td>
                <a href={item.website}>{item.website}</a>
              </Td>
              <Td>{item.business}</Td>
              <Td>{<span>{item.businessSize}</span>}</Td>
            </Tr>
          ))}

      {score === "anual" &&
        size === "Sem filtro" &&
        category != "Sem filtro" &&
        business
          .sort(orderByScoreYear)
          .filter((item) => item.business === category)
          .map((item, index) => (
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
                {index <= business.length / 3 && index > 2 && (
                  <img src={goldHonor} style={{ width: "30px" }} />
                )}
                {index > business.length / 3 &&
                  index < (2 * business.length) / 3 && (
                    <img src={silverHonor} style={{ width: "30px" }} />
                  )}
                {index >= (2 * business.length) / 3 &&
                  index <= (3 * business.length) / 3 && (
                    <img src={bronzeHonor} style={{ width: "30px" }} />
                  )}
              </Td>
              <Td style={{ color: "#5A91C7" }}>{item.score.anual} </Td>
              <Td>
                <a href={item.website}>{item.website}</a>
              </Td>
              <Td>{item.business}</Td>
              <Td>{<span>{item.businessSize}</span>}</Td>
            </Tr>
          ))}

      {score === "anual" &&
        size != "Sem filtro" &&
        category != "Sem filtro" &&
        business
          .sort(orderByScoreYear)
          .filter((item) => item.businessSize === size)
          .filter((item) => item.business === category)
          .map((item, index) => (
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
                {index <= business.length / 3 && index > 2 && (
                  <img src={goldHonor} style={{ width: "30px" }} />
                )}
                {index > business.length / 3 &&
                  index < (2 * business.length) / 3 && (
                    <img src={silverHonor} style={{ width: "30px" }} />
                  )}
                {index >= (2 * business.length) / 3 &&
                  index <= (3 * business.length) / 3 && (
                    <img src={bronzeHonor} style={{ width: "30px" }} />
                  )}
              </Td>
              <Td style={{ color: "#5A91C7" }}>{item.score.anual} </Td>
              <Td>
                <a href={item.website}>{item.website}</a>
              </Td>
              <Td>{item.business}</Td>
              <Td>{<span>{item.businessSize}</span>}</Td>
            </Tr>
          ))}
    </>
  );
};

export default Year;
