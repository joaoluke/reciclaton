import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundRank, StyledButton, StyledTable, Td, Tr, Option, BusinessCard, SpotlightDiv, SpotlightChildDiv } from './syled-business'
import { useHistory } from 'react-router-dom';
//images
import goldTrophie from './images/trophie.png';
import silverTrophie from './images/trophie-prata.png';
import bronzeTrophie from './images/trophie-bronze.png';
import goldHonor from './images/medalha-ouro.png';
import silverHonor from './images/medalha-prata.png';
import bronzeHonor from './images/medalha-bronze.png';
import { AiOutlineFontSize } from 'react-icons/ai';
// import { Pagination } from 'antd';

const BusinessRanking = () => {
    const [business, setBusiness] = useState([]);
    const [saveBusiness, setSaveBusiness] = useState([])
    const [score, setScore] = useState('mensal');
    const [size, setSize] = useState('Sem filtro')
    const [category, setCategory] = useState('Sem filtro');

const history = useHistory();

useEffect(() => getBusiness(), [])

const getBusiness = () => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/users")
      .then((res) => {
        setBusiness(res.data);
        setSaveBusiness(res.data);
      })
      .catch(({ error }) => console.log(error));
}

const orderByScoreMonth = (businessA, businessB) => businessB.score.mensal - businessA.score.mensal;
const orderByScoreYear = (businessA, businessB) => businessB.score.anual - businessA.score.anual;

    return (
      <div style={{}}>
        <BusinessCard>
          <h1 style={{fontSize: '26px'}}>Destaques do mês</h1>
          <hr style={{height: '1px', width: '100%'}}/>
          <SpotlightDiv>
            {business.sort(orderByScoreMonth).map((item, index) => (
              index >= 0 && index <= 2 && 
              <SpotlightChildDiv key={index} onClick={() => history.push(`users/${item.id}`)}>
                <span style={{fontSize: '40px'}}>{index+1}ª</span> 
                <img src={item.imageUrl} style={{width: '100px', borderRadius: '60px'}} />
                <span style={{fontWeight: 'bolder'}}>{item.brand}</span>
                {item.score.mensal} pontos
                <img src={index === 0 ? goldTrophie : index === 1 ? silverTrophie : bronzeTrophie} style={{width: '40px'}}/>
              </SpotlightChildDiv>
            ))}
          </SpotlightDiv>
        </BusinessCard>
        <hr style={{height: '1px', width: '100%'}}/>
        <h3 style={{display: 'flex', justifyContent: 'flex-start'}}>Overall ranking</h3>
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
              <th style={{color: 'whitesmoke'}}>Position</th>
              <th style={{color: 'whitesmoke'}}>Name</th>
              <th style={{color: 'whitesmoke'}}>Awards</th>
              <th style={{color: 'whitesmoke'}}>
                <span>{score === "mensal" ? "Monthly" : "Yearly"}</span> score
              </th>
              <th style={{color: 'whitesmoke'}}>Website</th>
              <th style={{color: 'whitesmoke'}}>
                <details>
                  <summary>Category</summary>
                  <Option onClick={() => setCategory("Sem filtro")}>
                    Remover filtro
                  </Option>
                  <Option
                    onClick={() => setCategory("Supermercado/Hipermercado")}
                  >
                    Supermercado/Hipermercado{" "}
                  </Option>
                  <Option onClick={() => setCategory("Restaurante/Bar")}>
                    Restaurante/Bar
                  </Option>
                  <Option onClick={() => setCategory("Indústria")}>
                    Indústria
                  </Option>
                  <Option onClick={() => setCategory("Mercearia")}>
                    Mercearia
                  </Option>
                  <Option onClick={() => setCategory("Drogaria")}>
                    Drogaria
                  </Option>
                  <Option onClick={() => setCategory("Shopping")}>
                    Shopping
                  </Option>
                  <Option onClick={() => setCategory("Coleta")}>Coleta</Option>
                  <Option onClick={() => setCategory("Padaria")}>
                    Padaria
                  </Option>
                  <Option onClick={() => setCategory("Varejista")}>
                    Varejista
                  </Option>
                  <Option onClick={() => setCategory("Hotel/Motel")}>
                    Hotel/Motel
                  </Option>
                  <Option onClick={() => setCategory("Condominio")}>
                    Condominio
                  </Option>
                </details>
              </th>
              <th style={{color: 'whitesmoke'}}>
                <details>
                  <summary>Filter by business size</summary>
                  <Option onClick={() => setSize("Sem filtro")}>
                    Remover filtro
                  </Option>
                  <Option onClick={() => setSize("microempresa")}>Micro</Option>
                  <Option onClick={() => setSize("pequena")}>Pequena</Option>
                  <Option onClick={() => setSize("media")}>Média</Option>
                  <Option onClick={() => setSize("grande")}>Grande</Option>
                </details>
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
                    <Td style={{ color: "#5A91C7" }}>{item.score.mensal} </Td>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td><span>{item.businessSize}</span></Td>
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
            </tbody>
          </StyledTable>
        </BackgroundRank>
        {console.log(business)}
        {console.log(saveBusiness, "here save business")}
      </div>
    );
}

export default BusinessRanking;