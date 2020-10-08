import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BackgroundRank,
  StyledButton,
  StyledTable,
  Td,
  Tr,
  Option,
  BusinessCard,
  SpotlightDiv,
  SpotlightChildDiv,
} from "./syled-business";
import { useHistory } from "react-router-dom";
//images
import goldTrophie from "./images/trophie.png";
import silverTrophie from "./images/trophie-prata.png";
import bronzeTrophie from "./images/trophie-bronze.png";
import goldHonor from "./images/medalha-ouro.png";
import silverHonor from "./images/medalha-prata.png";
import bronzeHonor from "./images/medalha-bronze.png";

const BusinessRanking = () => {
  const [business, setBusiness] = useState([]);
  const [saveBusiness, setSaveBusiness] = useState([]);
  const [score, setScore] = useState("mensal");
  const [size, setSize] = useState("Sem filtro");
  const [category, setCategory] = useState("Sem filtro");

  const history = useHistory();

  useEffect(() => getBusiness(), []);

  const getBusiness = () => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/users")
      .then((res) => {
        setBusiness(res.data);
        setSaveBusiness(res.data);
      })
      .catch(({ error }) => console.log(error));
  };

  const setSizeValue = (value) => {
    const select = value.target.value;
    return setSize(select);
  };

  const setCategoryValue = (value) => {
    const select = value.target.value;
    return setCategory(select);
  };

  const orderByScoreMonth = (businessA, businessB) =>
    businessB.score.mensal - businessA.score.mensal;
  const orderByScoreYear = (businessA, businessB) =>
    businessB.score.anual - businessA.score.anual;

  return (
    <div style={{}}>
      <BusinessCard>
        <h1 style={{ fontSize: "26px" }}>Destaques do mês</h1>
        <hr style={{ height: "1px", width: "100%" }} />
        <SpotlightDiv>
          {business.sort(orderByScoreMonth).map(
            (item, index) =>
              index >= 0 &&
              index <= 2 && (
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
                  {item.score.mensal} pontos
                  <img
                    src={
                      index === 0
                        ? goldTrophie
                        : index === 1
                        ? silverTrophie
                        : bronzeTrophie
                    }
                    style={{ width: "40px" }}
                  />
                </SpotlightChildDiv>
              )
          )}
        </SpotlightDiv>
      </BusinessCard>
      <hr style={{ height: "1px", width: "100%" }} />
      <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
        Overall ranking
      </h3>
      <BackgroundRank>
        <div
          style={{
            display: "flex",
            marginBottom: "2.5%",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "4%",
          }}
        >
          <StyledButton onClick={() => setScore("mensal")}>
            Monthly ranking
          </StyledButton>
          <StyledButton onClick={() => setScore("anual")}>
            Yearly ranking
          </StyledButton>
        </div>
        <StyledTable border="1px" cellPadding="5px" cellSpacing="0">
          <thead style={{ backgroundColor: "#60789C" }}>
            <th style={{ color: "whitesmoke" }}>Position</th>
            <th style={{ color: "whitesmoke" }}>Name</th>
            <th style={{ color: "whitesmoke" }}>Awards</th>
            <th style={{ color: "whitesmoke" }}>
              <span>{score === "mensal" ? "Monthly" : "Yearly"}</span> score
            </th>
            <th style={{ color: "whitesmoke" }}>Website</th>
            <th style={{ color: "whitesmoke" }}>
              <label>Category: </label>
              <select name="Category" onChange={setCategoryValue}>
                <option value="Sem filtro">Remover filtro</option>
                <option value="Supermercado/Hipermercado">
                  Supermercado/Hipermercado{" "}
                </option>
                <option value="Restaurante/Bar">Restaurante/Bar</option>
                <option value="Indústria">Indústria</option>
                <option value="Mercearia">Mercearia</option>
                <option value="Drogaria">Drogaria</option>
                <option value="Shopping">Shopping</option>
                <option value="Coleta">Coleta</option>
                <option value="Padaria">Padaria</option>
                <option value="Varejista">Varejista</option>
                <option value="Hotel/Motel">Hotel/Motel</option>
                <option value="Condominio">Condominio</option>
              </select>
            </th>
            <th style={{ color: "whitesmoke" }}>
              <label>
                Business size: <>&nbsp;</>
              </label>
              <select name="Business Size" onChange={setSizeValue}>
                <option value="Sem filtro">Remover filtro</option>
                <option value="microempresa">Micro</option>
                <option value="pequena">Pequena</option>
                <option value="media">Média</option>
                <option value="grande">Grande</option>
              </select>
            </th>
          </thead>
          <tbody>
            {score === "mensal" &&
              size === "Sem filtro" &&
              category === "Sem filtro" &&
              business.sort(orderByScoreMonth).map((item, index) => (
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
                  </Td>
                  <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.business}</Td>
                  <Td>
                    <span>{item.businessSize}</span>
                  </Td>
                </Tr>
              ))}

            {score === "mensal" &&
              size != "Sem filtro" &&
              category === "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
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
                      {index <=
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreMonth)
                            .filter((item) => item.businessSize === size)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
                          <img src={bronzeHonor} style={{ width: "30px" }} />
                        )}
                    </Td>
                    <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {score === "mensal" &&
              size === "Sem filtro" &&
              category != "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
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
                      {index <=
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreMonth)
                            .filter((item) => item.business === category)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
                          <img src={bronzeHonor} style={{ width: "30px" }} />
                        )}
                    </Td>
                    <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {score === "mensal" &&
              size != "Sem filtro" &&
              category != "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
                .filter((item) => item.business === category)
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
                      {index <=
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.business === category)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreMonth)
                            .filter((item) => item.business === category)
                            .filter((item) => item.businessSize === size)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.business === category)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
                          <img src={bronzeHonor} style={{ width: "30px" }} />
                        )}
                    </Td>
                    <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {/* RANKINGS ANUAIS ------------------------------------------------------- */}

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
                    {index <= business.sort(orderByScoreYear).length / 3 &&
                      index > 2 && (
                        <img src={goldHonor} style={{ width: "30px" }} />
                      )}
                    {index > business.sort(orderByScoreYear).length / 3 &&
                      index <
                        (2 * business.sort(orderByScoreYear).length) / 3 && (
                        <img src={silverHonor} style={{ width: "30px" }} />
                      )}
                    {index >=
                      (2 * business.sort(orderByScoreYear).length) / 3 &&
                      index <=
                        (3 * business.sort(orderByScoreYear).length) / 3 && (
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
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreYear)
                            .filter((item) => item.businessSize === size)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.businessSize === size)
                              .length) /
                            3 && (
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
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreYear)
                            .filter((item) => item.business === category)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
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
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && (
                          <img src={goldHonor} style={{ width: "30px" }} />
                        )}
                      {index >
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index <
                          (2 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.businessSize === size)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
                          <img src={silverHonor} style={{ width: "30px" }} />
                        )}
                      {index >=
                        (2 *
                          business
                            .sort(orderByScoreYear)
                            .filter((item) => item.businessSize === size)
                            .filter((item) => item.business === category)
                            .length) /
                          3 &&
                        index <=
                          (3 *
                            business
                              .sort(orderByScoreYear)
                              .filter((item) => item.businessSize === size)
                              .filter((item) => item.business === category)
                              .length) /
                            3 && (
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
          </tbody>
        </StyledTable>
      </BackgroundRank>
    </div>
  );
};

export default BusinessRanking;
