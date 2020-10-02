import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundRank, BusinessCard, StyledButton, StyledTable, Td } from './syled-business'
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi'
import { Table, Tooltip } from 'antd';


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

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 80,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address 1',
      ellipsis: {
        showTitle: false,
      },
      render: address => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column Long Column Long Column',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: {
        showTitle: false,
      },
      render: address => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column Long Column',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: {
        showTitle: false,
      },
      render: address => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: {
        showTitle: false,
      },
      render: address => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    },
  ];

    return (
      <div>
        {console.log(business)}

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <Table columns={columns} dataSource={data} />

        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}




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