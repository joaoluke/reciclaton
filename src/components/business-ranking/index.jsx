import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundRank, BusinessCard, StyledButton, StyledTable, Td } from './syled-business'
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
        <table border="1px" cellpadding="5px" cellspacing="0">
          <thead>
            <th>Posição</th>
            <th>Nome</th>
            <th>Prêmios</th>
            <th>Pontuação</th>
            <th>Website</th>
          </thead>
          <tbody></tbody>

          {business.sort(orderByScoreMonth).map((item, index) => (
            <tr key={index}>
              <td>{index + 1}ª</td>
              <td>{item.brand}</td>
              <td>Sem por enquanto</td>
              <td>{item.score.mensal}</td>
              <td><a href={item.website}>{item.website}</a></td>
            </tr>
          ))}
        </table>

        {console.log(business)}
        <BackgroundRank>
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
        </BackgroundRank>
      </div>
    );
}

export default BusinessRanking;