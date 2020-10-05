import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundRank, BusinessCard, StyledButton, StyledTable, Td, Tr } from './syled-business'
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi'


const BusinessRanking = () => {
    const [business, setBusiness] = useState([]);
    const [score, setScore] = useState(true);

useEffect(() => getBusiness(), [])

const getBusiness = () => {
    axios
    .get('https://reciclatonapi.herokuapp.com/664/users')
    .then(res => setBusiness(res.data))
    .catch(({error}) => console.log(error))
}

const orderByScoreMonth = (businessA, businessB) => {
    return businessB.score.mensal - businessA.score.mensal;
}

const orderByScoreYear = (businessA, businessB) => {
    return businessB.score.anual - businessA.score.anual;
}

    return (
      <div style={{ position: "relative", top: "-800px" }}>
        <BackgroundRank>
          <div style={{ display: "flex", marginBottom: "5%" }}>
            <StyledButton onClick={() => setScore(true)}>
              Ordenar mensal
            </StyledButton>
            <StyledButton onClick={() => setScore(false)}>
              Ordenar anual
            </StyledButton>
          </div>
          <StyledTable border="1px" cellPadding="5px" cellSpacing="0">
            <thead>
              <th>Posição</th>
              <th>Nome</th>
              <th>Prêmios</th>
              <th>
                Pontuação <span>{score ? "Mensal" : "Anual"}</span>
              </th>
              <th>Website</th>
            </thead>
            <tbody>
              {score
                ? business.sort(orderByScoreMonth).map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}ª</Td>
                      <Td style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-start'}}>
                        {
                          <img
                            src={item.imageUrl}
                            style={{ width: "40px", borderRadius: "50px" }}
                          />
                        } <>&nbsp;&nbsp;&nbsp;</>
                        {item.brand}
                      </Td>
                      <Td>Sem por enquanto</Td>
                      <Td>{item.score.mensal}</Td>
                      <Td>
                        <a href={item.website}>{item.website}</a>
                      </Td>
                    </Tr>
                  ))
                : business.sort(orderByScoreYear).map((item, index) => (
                  <Tr key={index}>
                  <Td>{index + 1}ª</Td>
                  <Td style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-start'}}>
                    {
                      <img
                        src={item.imageUrl}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    } <>&nbsp;&nbsp;&nbsp;</>
                    {item.brand}
                  </Td>
                  <Td>Sem por enquanto</Td>
                  <Td>{item.score.anual}</Td>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                </Tr>
                  ))}
            </tbody>
          </StyledTable>
        </BackgroundRank>
        {console.log(business)}
        {/* <BackgroundRank>
          <div style={{ display: "flex", marginBottom: "5%" }}>
            <StyledButton onClick={() => setScore(true)}>
              Ordenar mensal
            </StyledButton>
            <StyledButton onClick={() => setScore(false)}>
              Ordenar anual
            </StyledButton>
          </div>
          {score
            ? business.sort(orderByScoreMonth).map((item, index) => (
                <BusinessCard key={index}>
                  {index === 0 && <GiPodiumWinner />}
                  {index === 1 && <GiPodiumSecond />}
                  {index === 2 && <GiPodiumThird />}
                  <h3>{index + 1}ª posição:</h3>
                  <h4>{item.brand}</h4>
                  <p>Pontuação mensal: {item.score.mensal}</p>
                  <p>Pontuação anual: {item.score.anual}</p>
                  <br />
                  <a href={item.website}>{item.website}</a>
                </BusinessCard>
              ))
            : business.sort(orderByScoreYear).map((item, index) => (
                <BusinessCard key={index}>
                  {index === 0 && <GiPodiumWinner />}
                  {index === 1 && <GiPodiumSecond />}
                  {index === 2 && <GiPodiumThird />}
                  <h3>{index + 1}ª posição:</h3>
                  <h4>{item.brand}</h4>
                  <p>Pontuação mensal: {item.score.mensal}</p>
                  <p>Pontuação anual: {item.score.anual}</p>
                  <br />
                  <a href={item.website}>{item.website}</a>
                </BusinessCard>
              ))}
        </BackgroundRank> */}
      </div>
    );
}

export default BusinessRanking;