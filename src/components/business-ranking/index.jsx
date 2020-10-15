import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BackgroundRank,
  StyledButton,
  StyledTable,
  Td,
  Tr,
  BusinessCard,
  SpotlightDiv,
  SpotlightChildDiv,
  H1,
  Hr,
  StyledSpan,
  StyledImg,
  StyledSpanBrand,
  StyledH3,
  StyledDiv,
  StyledThead,
  StyledThophieImage,
  StyledTh,
  BrandTd,
  BrandImg,
  StyledBrandSpan,
  ImageTrophies,
  ScoreTd,
  TdHide,
  StyledThHide,
  TdHideSize,
  StyledThHideSize,
  StyledThHideCategory,
  TdHideCategory,
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
  const [score, setScore] = useState("mensal");
  const [size, setSize] = useState("Sem filtro");
  const [category, setCategory] = useState("Sem filtro");
  const [hasMore, setHasMore] = useState(20);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://reciclatonapi.herokuapp.com/664/users")
      .then((res) => {
        setBusiness(res.data);
      })
      .catch(({ error }) => console.log(error));
  }, []);

  const setSizeValue = (value) => {
    const select = value.target.value;
    setHasMore(20);
    return setSize(select);
  };

  const setCategoryValue = (value) => {
    const select = value.target.value;
    setHasMore(20);
    return setCategory(select);
  };

  const orderByScoreMonth = (businessA, businessB) =>
    businessB.score.mensal - businessA.score.mensal;
  const orderByScoreYear = (businessA, businessB) =>
    businessB.score.anual - businessA.score.anual;

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY + 1000 >= document.body.offsetHeight) {
      setHasMore(hasMore + 20);
    }
  };

  return (
    <div>
      <BusinessCard>
        <H1>{score === 'mensal' ? 'Destaques do mês' : 'Destaques do ano'}</H1>
        <Hr />
        <SpotlightDiv>
          {score === 'mensal' ? business.sort(orderByScoreMonth).map(
            (item, index) =>
              index >= 0 &&
              index <= 2 && (
                <SpotlightChildDiv
                  key={index}
                  onClick={() => history.push(`users/${item.id}`)}
                >
                  <StyledSpan>{index + 1}ª</StyledSpan>
                  <StyledImg src={item.imageUrl} />
                  <StyledSpanBrand>{item.brand}</StyledSpanBrand>
                  {item.score.mensal} pontos
                  <StyledThophieImage
                    src={
                      index === 0
                        ? goldTrophie
                        : index === 1
                        ? silverTrophie
                        : bronzeTrophie
                    }
                  />
                </SpotlightChildDiv>
              )
          ) : business.sort(orderByScoreYear).map(
            (item, index) =>
              index >= 0 &&
              index <= 2 && (
                <SpotlightChildDiv
                  key={index}
                  onClick={() => history.push(`users/${item.id}`)}
                >
                  <StyledSpan>{index + 1}ª</StyledSpan>
                  <StyledImg src={item.imageUrl} />
                  <StyledSpanBrand>{item.brand}</StyledSpanBrand>
                  {item.score.anual} pontos
                  <StyledThophieImage
                    src={
                      index === 0
                        ? goldTrophie
                        : index === 1
                        ? silverTrophie
                        : bronzeTrophie
                    }
                  />
                </SpotlightChildDiv>
              )
          )}
        </SpotlightDiv>
      </BusinessCard>
      <Hr />
      <StyledH3>Ranking</StyledH3>
      <BackgroundRank>
        <StyledDiv>
          <StyledButton onClick={() => {
            setScore("mensal");
            setHasMore(20);
            }}>
            Ranking mensal
          </StyledButton>
          <StyledButton onClick={() => {
            setScore("anual");
            setHasMore(20);
            }}>
            Ranking anual
          </StyledButton>
        </StyledDiv>
        <StyledTable border="1px" cellPadding="3px" cellSpacing="0">
          <StyledThead>
            <StyledTh>Posição</StyledTh>
            <StyledTh>Nome</StyledTh>
            <StyledThHide>Prêmios</StyledThHide>
            <StyledTh>
              Pontuação <span>{score === "mensal" ? "mensal" : "anual"}</span>
            </StyledTh>
            <StyledThHide>Site</StyledThHide>
            <StyledThHideCategory>
              <label>Categoria: </label>
              <select name="Category" onChange={setCategoryValue}>
                <option value="Sem filtro">Remover filtro</option>
                <option value="Supermercado/Hipermercado">
                  Supermercado/Hipermercado
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
            </StyledThHideCategory>
            <StyledThHideSize>
              <label>
                Porte: <>&nbsp;</>
              </label>
              <select name="Business Size" onChange={setSizeValue}>
                <option value="Sem filtro">Remover filtro</option>
                <option value="microempresa">Micro</option>
                <option value="pequena">Pequena</option>
                <option value="media">Média</option>
                <option value="grande">Grande</option>
              </select>
            </StyledThHideSize>
          </StyledThead>
          <tbody>
            {score === "mensal" &&
              size === "Sem filtro" &&
              category === "Sem filtro" &&
              business.sort(orderByScoreMonth).map(
                (item, index) =>
                  index >= 0 &&
                  index < hasMore && (
                    <Tr key={index}>
                      <Td>{index + 1}ª</Td>
                      <BrandTd>
                        {<BrandImg src={item.imageUrl} />}
                        <>&nbsp;&nbsp;&nbsp;</>
                        {
                          <StyledBrandSpan
                            onClick={() => history.push(`users/${item.id}`)}
                          >
                            {item.brand}
                          </StyledBrandSpan>
                        }
                      </BrandTd>
                      <TdHide>
                        {index === 0 && <ImageTrophies src={goldTrophie} />}
                        {index === 1 && <ImageTrophies src={silverTrophie} />}
                        {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                        {index <= business.sort(orderByScoreMonth).length / 3 &&
                          index > 2 && <ImageTrophies src={goldHonor} />}
                        {index > business.sort(orderByScoreMonth).length / 3 &&
                          index <
                            (2 * business.sort(orderByScoreMonth).length) /
                              3 && <ImageTrophies src={silverHonor} />}
                        {index >=
                          (2 * business.sort(orderByScoreMonth).length) / 3 &&
                          index <=
                            (3 * business.sort(orderByScoreMonth).length) /
                              3 && <ImageTrophies src={bronzeHonor} />}
                      </TdHide>
                      <ScoreTd>{item.score.mensal} </ScoreTd>
                      <TdHide>
                        <a href={item.website}>{item.website}</a>
                      </TdHide>
                      <TdHideCategory>{item.business}</TdHideCategory>
                      <TdHideSize>
                        <span>{item.businessSize}</span>
                      </TdHideSize>
                    </Tr>
                  )
              )}

            {/* Ranking mensal-------------------------------------------- */}

            {score === "mensal" &&
              size !== "Sem filtro" &&
              category === "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
                .filter((item) => item.businessSize === size)
                .map(
                  (item, index) =>
                    index >= 0 &&
                    index < hasMore && (
                      <Tr key={index}>
                        <Td>{index + 1}ª</Td>
                        <BrandTd>
                          {<BrandImg src={item.imageUrl} />}
                          <>&nbsp;&nbsp;&nbsp;</>
                          {
                            <StyledBrandSpan
                              onClick={() => history.push(`users/${item.id}`)}
                            >
                              {item.brand}
                            </StyledBrandSpan>
                          }
                        </BrandTd>
                        <Td>
                          {index === 0 && <ImageTrophies src={goldTrophie} />}
                          {index === 1 && <ImageTrophies src={silverTrophie} />}
                          {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                          {index <=
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.businessSize === size)
                              .length /
                              3 &&
                            index > 2 && <ImageTrophies src={goldHonor} />}
                          {index >
                            business
                              .sort(orderByScoreMonth)
                              .filter((item) => item.businessSize === size)
                              .length /
                              3 &&
                            index <
                              (2 *
                                business
                                  .sort(orderByScoreMonth)
                                  .filter((item) => item.businessSize === size)
                                  .length) /
                                3 && <ImageTrophies src={silverHonor} />}
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
                                3 && <ImageTrophies src={bronzeHonor} />}
                        </Td>
                        <ScoreTd>{item.score.mensal} </ScoreTd>
                        <Td>
                          <a href={item.website}>{item.website}</a>
                        </Td>
                        <Td>{item.business}</Td>
                        <Td>{<span>{item.businessSize}</span>}</Td>
                      </Tr>
                    )
                )}

            {score === "mensal" &&
              size === "Sem filtro" &&
              category !== "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
                .filter((item) => item.business === category)
                .map((item, index) => index >= 0 && index < hasMore && (
                  <Tr key={index}>
                    <Td>{index + 1}ª</Td>
                    <BrandTd>
                      {<BrandImg src={item.imageUrl} />}
                      <>&nbsp;&nbsp;&nbsp;</>
                      {
                        <StyledBrandSpan
                          onClick={() => history.push(`users/${item.id}`)}
                        >
                          {item.brand}
                        </StyledBrandSpan>
                      }
                    </BrandTd>
                    <Td>
                      {index === 0 && <ImageTrophies src={goldTrophie} />}
                      {index === 1 && <ImageTrophies src={silverTrophie} />}
                      {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                      {index <=
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && <ImageTrophies src={goldHonor} />}
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
                            3 && <ImageTrophies src={silverHonor} />}
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
                            3 && <ImageTrophies src={bronzeHonor} />}
                    </Td>
                    <ScoreTd>{item.score.mensal} </ScoreTd>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {score === "mensal" &&
              size !== "Sem filtro" &&
              category !== "Sem filtro" &&
              business
                .sort(orderByScoreMonth)
                .filter((item) => item.business === category)
                .filter((item) => item.businessSize === size)
                .map((item, index) => index >= 0 && index < hasMore && (
                  <Tr key={index}>
                    <Td>{index + 1}ª</Td>
                    <BrandTd>
                      {<BrandImg src={item.imageUrl} />}
                      <>&nbsp;&nbsp;&nbsp;</>
                      {
                        <StyledBrandSpan
                          onClick={() => history.push(`users/${item.id}`)}
                        >
                          {item.brand}
                        </StyledBrandSpan>
                      }
                    </BrandTd>
                    <Td>
                      {index === 0 && <ImageTrophies src={goldTrophie} />}
                      {index === 1 && <ImageTrophies src={silverTrophie} />}
                      {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                      {index <=
                        business
                          .sort(orderByScoreMonth)
                          .filter((item) => item.business === category)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index > 2 && <ImageTrophies src={goldHonor} />}
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
                            3 && <ImageTrophies src={silverHonor} />}
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
                            3 && <ImageTrophies src={bronzeHonor} />}
                    </Td>
                    <ScoreTd>{item.score.mensal} </ScoreTd>
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
              business.sort(orderByScoreYear).map((item, index) => index >= 0 && index < hasMore && (
                <Tr key={index}>
                  <Td>{index + 1}ª</Td>
                  <BrandTd>
                    {<BrandImg src={item.imageUrl} />}
                    <>&nbsp;&nbsp;&nbsp;</>
                    {
                      <StyledBrandSpan
                        onClick={() => history.push(`users/${item.id}`)}
                      >
                        {item.brand}
                      </StyledBrandSpan>
                    }
                  </BrandTd>
                  <Td>
                    {index === 0 && <ImageTrophies src={goldTrophie} />}
                    {index === 1 && <ImageTrophies src={silverTrophie} />}
                    {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                    {index <= business.sort(orderByScoreYear).length / 3 &&
                      index > 2 && <ImageTrophies src={goldHonor} />}
                    {index > business.sort(orderByScoreYear).length / 3 &&
                      index <
                        (2 * business.sort(orderByScoreYear).length) / 3 && (
                        <ImageTrophies src={silverHonor} />
                      )}
                    {index >=
                      (2 * business.sort(orderByScoreYear).length) / 3 &&
                      index <=
                        (3 * business.sort(orderByScoreYear).length) / 3 && (
                        <ImageTrophies src={bronzeHonor} />
                      )}
                  </Td>
                  <ScoreTd>{item.score.anual} </ScoreTd>
                  <Td>
                    <a href={item.website}>{item.website}</a>
                  </Td>
                  <Td>{item.business}</Td>
                  <Td>{<span>{item.businessSize}</span>}</Td>
                </Tr>
              ))}

            {score === "anual" &&
              size !== "Sem filtro" &&
              category === "Sem filtro" &&
              business
                .sort(orderByScoreYear)
                .filter((item) => item.businessSize === size)
                .map((item, index) => index >= 0 && index < hasMore && (
                  <Tr key={index}>
                    <Td>{index + 1}ª</Td>
                    <BrandTd>
                      {<BrandImg src={item.imageUrl} />}
                      <>&nbsp;&nbsp;&nbsp;</>
                      {
                        <StyledBrandSpan
                          onClick={() => history.push(`users/${item.id}`)}
                        >
                          {item.brand}
                        </StyledBrandSpan>
                      }
                    </BrandTd>
                    <Td>
                      {index === 0 && <ImageTrophies src={goldTrophie} />}
                      {index === 1 && <ImageTrophies src={silverTrophie} />}
                      {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size).length /
                          3 &&
                        index > 2 && <ImageTrophies src={goldHonor} />}
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
                            3 && <ImageTrophies src={silverHonor} />}
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
                            3 && <ImageTrophies src={bronzeHonor} />}
                    </Td>
                    <ScoreTd>{item.score.anual} </ScoreTd>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {score === "anual" &&
              size === "Sem filtro" &&
              category !== "Sem filtro" &&
              business
                .sort(orderByScoreYear)
                .filter((item) => item.business === category)
                .map((item, index) => index >= 0 && index < hasMore && (
                  <Tr key={index}>
                    <Td>{index + 1}ª</Td>
                    <BrandTd>
                      {<BrandImg src={item.imageUrl} />}
                      <>&nbsp;&nbsp;&nbsp;</>
                      {
                        <StyledBrandSpan
                          onClick={() => history.push(`users/${item.id}`)}
                        >
                          {item.brand}
                        </StyledBrandSpan>
                      }
                    </BrandTd>
                    <Td>
                      {index === 0 && <ImageTrophies src={goldTrophie} />}
                      {index === 1 && <ImageTrophies src={silverTrophie} />}
                      {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && <ImageTrophies src={goldHonor} />}
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
                            3 && <ImageTrophies src={silverHonor} />}
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
                            3 && <ImageTrophies src={bronzeHonor} />}
                    </Td>
                    <ScoreTd>{item.score.anual} </ScoreTd>
                    <Td>
                      <a href={item.website}>{item.website}</a>
                    </Td>
                    <Td>{item.business}</Td>
                    <Td>{<span>{item.businessSize}</span>}</Td>
                  </Tr>
                ))}

            {score === "anual" &&
              size !== "Sem filtro" &&
              category !== "Sem filtro" &&
              business
                .sort(orderByScoreYear)
                .filter((item) => item.businessSize === size)
                .filter((item) => item.business === category)
                .map((item, index) => index >= 0 && index < hasMore && (
                  <Tr key={index}>
                    <Td>{index + 1}ª</Td>
                    <BrandTd>
                      {<BrandImg src={item.imageUrl} />}
                      <>&nbsp;&nbsp;&nbsp;</>
                      {
                        <StyledBrandSpan
                          onClick={() => history.push(`users/${item.id}`)}
                        >
                          {item.brand}
                        </StyledBrandSpan>
                      }
                    </BrandTd>
                    <Td>
                      {index === 0 && <ImageTrophies src={goldTrophie} />}
                      {index === 1 && <ImageTrophies src={silverTrophie} />}
                      {index === 2 && <ImageTrophies src={bronzeTrophie} />}
                      {index <=
                        business
                          .sort(orderByScoreYear)
                          .filter((item) => item.businessSize === size)
                          .filter((item) => item.business === category).length /
                          3 &&
                        index > 2 && <ImageTrophies src={goldHonor} />}
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
                            3 && <ImageTrophies src={silverHonor} />}
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
                            3 && <ImageTrophies src={bronzeHonor} />}
                    </Td>
                    <ScoreTd>{item.score.anual} </ScoreTd>
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