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
                    <p>Recipoints Anual</p>
                  </StyledRankUser>
                  <StyledRankUser>
                    <p>{user.score.mensal}</p>
                    <p>Recipoints Mensal</p>
                  </StyledRankUser>
                </div>
              </StyledImgRankCenter>
              {/*<div>
                <div style={{ height: "20vh", width: "80vw", margin: "1vh auto" }}></div>
              </div>*/}
              <InfoDiv>
                <h1>{user.brand}</h1>
                <h2>{user.business}</h2>
                <p>{user.email}</p>
                <a href={user.website}>{user.website}</a>
                <div>
                  <p>
                    {user.adress.street}, {user.adress.number}
                  </p>
                  <p>
                    {user.adress.city}, {user.adress.state}
                  </p>
                </div>
              </InfoDiv>


            </StyledPerfilDiv>
            <StyledPerfilMaterials>
              {Object.keys(user.ifCollector).map(
                (material, key) =>
                  user.ifCollector[material] && (
                    <StyledMaterials key={key}>
                      {showMaterial(material)}
                    </StyledMaterials>
                  )
              )}
            </StyledPerfilMaterials>
          </div>
        )}
    </>
  );
};

export default Perfil;

const StyledPerfilDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #C3E79C;
  width: 100vw;
  min-height: 25vh;
  padding: 2vh 1px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-width:768px){
    justify-content: space-around;
  }
  `;

const StyledPerfilMaterials = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  background-color:#68A428;
  color:white;
  height: fit-content;
  width: fit-content;
  font-size: 20px;
  padding: 7px;
  margin: 0 auto;
`;

const StyledMaterials = styled.div`
  margin: 0 10px; 
  padding: 0;
  svg{
    height: 30px;
  }
`;

const StyledUserImage = styled.img`
  border-radius: 1rem;
`;

const StyledRankUser = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: center;
  background: #68A428;
  width: 5rem;
  height: 4rem;
  padding: 1rem;
  margin-top: 1em;
  border-radius: 1.5rem;
  p {
    text-align: center;
    padding: 0;
    margin: 0;
    color:white;
    font-weight: bolder;
  }
`;

const StyledImgRankCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin: 1vw;
`;

const InfoDiv = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;

`