import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Month from "./components/month";
import Year from "./components/year";
import {
  BackgroundRank,
  StyledButton,
  StyledTable,
  Td,
  Tr,
  Option,
} from "./styled-business";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import "antd/dist/antd.css";
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
  const [hasMore, setHasMore] = useState(false);
  const [currentBusiness, setCurrentBusiness] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const loading = business.length === 0;
  console.log(loading);
  console.log(pageNumber);
  console.log();

  const history = useHistory();
  const observer = useRef();

  const lastBusinessRefElement = useCallback(
    (node) => {
      console.log("lastBusinessRefElement");
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
    console.log("oi");
    if (loading) return;
    let beginning = 0;
    let end = currentBusiness.length + 25;
    setCurrentBusiness([...business].slice(beginning, end));
    setHasMore(business.length !== currentBusiness.length);
  }, [pageNumber, loading]);

  useEffect(() => getBusiness(), []);

  const getBusiness = () => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/users")
      .then((res) => {
        setBusiness(res.data);
      })
      .catch(({ error }) => console.log(error));
  };

  const orderByScoreMonth = (businessA, businessB) =>
    businessB.score.mensal - businessA.score.mensal;
  const orderByScoreYear = (businessA, businessB) =>
    businessB.score.anual - businessA.score.anual;

  return (
    <div style={{}}>
      <BackgroundRank>
        <div
          style={{
            display: "flex",
            marginBottom: "5%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8%",
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
          <thead style={{ backgroundColor: "#C0C0C0" }}>
            <th>Position</th>
            <th>Name</th>
            <th>Awards</th>
            <th>
              <span>{score === "mensal" ? "Monthly" : "Yearly"}</span> score
            </th>
            <th>Website</th>
            <th>
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
                <Option onClick={() => setCategory("Padaria")}>Padaria</Option>
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
            <th>
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
            <>
              <Month
                lastBusinessRefElement={lastBusinessRefElement}
                goldHonor={goldHonor}
                silverHonor={silverHonor}
                bronzeHonor={bronzeHonor}
                bronzeTrophie={bronzeTrophie}
                silverTrophie={silverTrophie}
                goldTrophie={goldTrophie}
                orderByScoreMonth={orderByScoreMonth}
                score={score}
                size={size}
                category={category}
                currentBusiness={currentBusiness}
              />

              <Year
                goldHonor={goldHonor}
                silverHonor={silverHonor}
                bronzeHonor={bronzeHonor}
                bronzeTrophie={bronzeTrophie}
                silverTrophie={silverTrophie}
                goldTrophie={goldTrophie}
                orderByScoreMonth={orderByScoreMonth}
                score={score}
                size={size}
                category={category}
                business={business}
              />
            </>
          </tbody>
        </StyledTable>
      </BackgroundRank>
      {console.log(business)}
      {console.log(currentBusiness, "here save business")}
    </div>
  );
};

export default BusinessRanking;
