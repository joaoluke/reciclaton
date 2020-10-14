/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Month from "./components/month";
import Year from "./components/year";
import Top3 from "./components/components-top3";
import {
  BackgroundRank,
  StyledButton,
  StyledMenu,
  BusinessCard,
  SpotlightDiv,
} from "./styled-business";
import "antd/dist/antd.css";

//images
import goldTrophy from "./images/trophy.png";
import silverTrophy from "./images/trophy-prata.png";
import bronzeTrophy from "./images/trophy-bronze.png";
import goldHonor from "./images/medalha-ouro.png";
import silverHonor from "./images/medalha-prata.png";
import bronzeHonor from "./images/medalha-bronze.png";

const BusinessRanking = () => {
  const [business, setBusiness] = useState([]);
  const [score, setScore] = useState("mensal");
  const [size, setSize] = useState("Sem filtro");
  const [category, setCategory] = useState("Sem filtro");
  const [hasMore, setHasMore] = useState(false);
  const [currentBusiness, setCurrentBusiness] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(currentBusiness);
  const loading = business.length === 0;
  const observer = useRef();

  const lastBusinessRefElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    for (let i = 1; i > 0; i++) {
      console.log(i);
    }
    if (loading) return;
    let beginning = 0;
    let end = currentBusiness.length + 25;
    if (category === "Sem filtro") {
      setCurrentBusiness([...business].slice(beginning, end));
    } else {
      let businessCategory = business.filter(
        (item) => item.business === category
      );
      setCurrentBusiness([...businessCategory].slice(beginning, end));
    }
    if (size !== "Sem filtro") {
      let businessSize = business.filter((item) => item.businessSize === size);
      setCurrentBusiness([...businessSize].slice(beginning, end));
    }
    if (size !== "Sem filtro" && category !== "Sem filtro") {
      let businessSize = business
        .filter((item) => item.businessSize === size)
        .filter((item) => item.business === category);
      setCurrentBusiness([...businessSize].slice(beginning, end));
    }
    setHasMore(business.length !== currentBusiness.length);
  }, [pageNumber, loading, category, size]);

  useEffect(() => getBusiness(), []);

  const getBusiness = () => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/users")
      .then((res) => {
        setBusiness(res.data);
      })
      .catch(({ error }) => console.log(error));
  };

  const setSizeValue = (value) => {
    setCurrentBusiness([]);
    const select = value.target.value;
    return setSize(select);
  };

  const setCategoryValue = (value) => {
    setCurrentBusiness([]);
    const select = value.target.value;
    return setCategory(select);
  };

  const orderByScoreMonth = (businessA, businessB) =>
    businessB.score.mensal - businessA.score.mensal;
  const orderByScoreYear = (businessA, businessB) =>
    businessB.score.anual - businessA.score.anual;

  return (
    <>
      <BusinessCard>
        <h1 style={{ fontSize: "26px" }}>Destaques do mês</h1>
        <SpotlightDiv>
          {score === "mensal"
            ? business
                .sort(orderByScoreMonth)
                .map(
                  (item, index) =>
                    index >= 0 &&
                    index <= 2 && (
                      <Top3
                        goldTrophy={goldTrophy}
                        silverTrophy={silverTrophy}
                        bronzeTrophy={bronzeTrophy}
                        score={score}
                        item={item}
                        index={index}
                      />
                    )
                )
            : business
                .sort(orderByScoreYear)
                .map(
                  (item, index) =>
                    index >= 0 &&
                    index <= 2 && (
                      <Top3
                        goldTrophy={goldTrophy}
                        silverTrophy={silverTrophy}
                        bronzeTrophy={bronzeTrophy}
                        score={score}
                        item={item}
                        index={index}
                      />
                    )
                )}
        </SpotlightDiv>
      </BusinessCard>
      <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
        Overall ranking
      </h3>
      {/* <BackgroundRank> */}
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
      <StyledMenu border="1px" cellPadding="5px" cellSpacing="0">
        <div style={{ backgroundColor: "#C0C0C0", display: "flex" }}>
          <div>
            <select name="Categoria" onChange={setCategoryValue}>
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
          </div>
          <div>
            <select name="Porte da Empresa" onChange={setSizeValue}>
              <option value="Sem filtro">Remover filtro</option>
              <option value="microempresa">Micro</option>
              <option value="pequena">Pequena</option>
              <option value="media">Média</option>
              <option value="grande">Grande</option>
            </select>
          </div>
        </div>
        <Month
          goldHonor={goldHonor}
          silverHonor={silverHonor}
          bronzeHonor={bronzeHonor}
          bronzeTrophy={bronzeTrophy}
          silverTrophy={silverTrophy}
          goldTrophy={goldTrophy}
          orderByScoreMonth={orderByScoreMonth}
          score={score}
          size={size}
          category={category}
          currentBusiness={currentBusiness}
          business={business}
        />

        {/* <Year
          lastBusinessRefElement={lastBusinessRefElement}
          goldHonor={goldHonor}
          silverHonor={silverHonor}
          bronzeHonor={bronzeHonor}
          bronzeTrophy={bronzeTrophy}
          silverTrophy={silverTrophy}
          goldTrophy={goldTrophy}
          orderByScoreYear={orderByScoreYear}
          score={score}
          size={size}
          category={category}
          currentBusiness={currentBusiness}
        /> */}
      </StyledMenu>
      {/* </BackgroundRank> */}
    </>
  );
};

export default BusinessRanking;
