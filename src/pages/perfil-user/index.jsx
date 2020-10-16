import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import decode from "jwt-decode";
import { getPerfil } from "../../redux/action/user";
import Loading from "../../components/loading";
import showMaterial from "./icons";
import {
  StyledPerfilDiv,
  StyledImgRankCenter,
  StyledUserImage,
  StyledRankUser,
  InfoDiv,
  StyledReportDiv,
  ReportButton,
  FuncButton,
  StyledPerfilMaterials,
  StyledMaterials,
} from "./styled";
import ReportModal from "./complaint-modal";
import Log from "./service-log";
import NewServiceCalls from "../../components/new-service-call";

const Perfil = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [visible, setVisible] = useState(false);
  const [visibleOS, setVisibleOS] = useState(false);
  let { user } = useSelector((state) => state.user);
  let logged = useSelector((state) => state.login);
  const decoded = logged.authen ? decode(logged.authen) : undefined;
  useEffect(
    () => dispatch(getPerfil(userId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId, visible]
  );

  return (
    <>
      <NewServiceCalls visibility={visibleOS} setVisibility={setVisibleOS} />
      {parseInt(userId) !== user.id ? (
        <Loading />
      ) : (
          <div>
            <ReportModal visible={visible} setVisible={setVisible} />
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
              <InfoDiv>
                <h1>{user.brand}</h1>
                <h2>{user.business}</h2>
                <p>{user.email}</p>
                <a href={"https://" + user.website}>{user.website}</a>
                <div>
                  <p>
                    {user.adress.street}, {user.adress.number}
                  </p>
                  <p>
                    {user.adress.city}, {user.adress.state}
                  </p>
                </div>
              </InfoDiv>
              <StyledReportDiv>
                {decoded && decoded.sub !== userId && (
                  <ReportButton
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    Denuncia?
                  </ReportButton>
                )}
                {user.business === "Coleta" &&
                  decoded !== undefined &&
                  decoded.sub !== userId && (
                    <FuncButton onClick={() => { setVisibleOS(true) }}>Emitir Chamado</FuncButton>
                  )}
              </StyledReportDiv>
            </StyledPerfilDiv>
            {user?.business === "Coleta" && (
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
            )}

            <Log />
          </div>
        )}
    </>
  );
};

export default Perfil;
