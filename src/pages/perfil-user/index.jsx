import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import decode from "jwt-decode";
import { getPerfil } from "../../redux/action/user";
import Loading from "../../components/loading";
import showMaterial from "./icons";
import styled from "styled-components";

const Perfil = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  let { user } = useSelector((state) => state.user);
  let logged = useSelector((state) => state.login);
  const decoded = logged.authen && decode(logged.authen);
  useEffect(
    () => dispatch(getPerfil(userId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId]
  );
  console.log(user);
  return (
    <>
      {parseInt(userId) !== user.id ? (
        <Loading />
      ) : (
        <div>
          <StyledPerfilDiv>
            <StyledImgRankCenter>
              <StyledUserImage src={user.imageUrl} alt="User" />
              <div style={{ display: "flex" }}>
                <StyledRankUser>
                  <p>{user.score.anual}</p>
                  <p>Pontos Anual</p>
                </StyledRankUser>
                <StyledRankUser>
                  <p>{user.score.mensal}</p>
                  <p>Pontos Mensal</p>
                </StyledRankUser>
              </div>
            </StyledImgRankCenter>
            <div>
              <h1>{user.brand}</h1>
              <h2>{user.business}</h2>
              <p>{user.email}</p>
              <a href={user.website} target="_blank">
                {user.website}
              </a>
              <div>
                <p>
                  {user.adress.street}, {user.adress.number}
                </p>
                <p>
                  {user.adress.city}, {user.adress.state}
                </p>
              </div>
            </div>
            <StyledPerfilMaterials>
              <div>
                {Object.keys(user.ifCollector).map(
                  (material, key) =>
                    user.ifCollector[material] && (
                      <StyledMaterials key={key}>
                        {showMaterial(material)}
                      </StyledMaterials>
                    )
                )}
              </div>
            </StyledPerfilMaterials>
          </StyledPerfilDiv>
        </div>
      )}
    </>
  );
};

export default Perfil;

const StyledPerfilDiv = styled.div`
  display: flex;
  background-color: #17271a2e;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100vw;
  padding-top: 5vh;
`;

const StyledPerfilMaterials = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  background-color: #e1f3ce;
`;

const StyledMaterials = styled.div`
  margin: 0 10px;
`;

const StyledUserImage = styled.img`
  border-radius: 10rem;
`;

const StyledRankUser = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  border-radius: 10rem;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 5px;
  padding: 1rem;
  p {
    margin: 5px;
  }
`;

const StyledImgRankCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
