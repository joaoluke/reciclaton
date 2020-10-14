import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ComplaintCard from './complaint-card';
import { requireComplaints, allowComplaint, notAllowComplaint } from '../../redux/action/complaint';
import background from "./images/backgroundComplaint2.jpg";
import { Redirect } from 'react-router-dom';
import Loading from "../../components/loading";
import decode from 'jwt-decode';

const ComplaintsPage = () => {

  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint.complaints)
  const logged = useSelector((state) => state.login);
  const decoded = logged.authen && decode(logged.authen);
  useEffect(() =>
    dispatch(requireComplaints()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
  console.log(decoded.sub)
  const conc = (id, indicted, reviews) => {
    dispatch(allowComplaint(id, indicted, reviews, decoded.sub))
  }
  const disc = (id, innocent, reviews) => {
    dispatch(notAllowComplaint(id, innocent, reviews, decoded.sub))
  }
  if (logged.authen === "") {
    return (
      <Redirect to="/login" />
    )
  }

  return (
    <>
      {complaint.length === 0 && <Loading />}
      { complaint.length !== 0 && <Allstyled style={{}}>
        <StyledBackgroundTop>
          <h1 style={{ textAlign: "center" }}>Denuncias</h1>
          <p>Nos Ajude a ajudar o mundo analisando empresas que foram denunciadas!</p>
        </StyledBackgroundTop>
        <CardGroup>
          {complaint?.filter((element) => !(element.indicted.includes(decoded.sub) || element.innocent.includes(decoded.sub))).map((element) => {
            return <ComplaintCard
              imgUrl={element.foto}
              complaintMsg={element.mensagem_denuncia}
              reviews={element.reviews}
              concordoClick={conc}
              discordoClick={disc}
              userid={decoded.sub}
              allow={element.indicted}
              notAllow={element.innocent}
              id={element.id}
            />
          }
          )}

        </CardGroup>
      </Allstyled>
      }

    </>
  );
}

export default ComplaintsPage;

const StyledBackgroundTop = styled.div`
  width: 100%;
  margin-top: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  margin-bottom: 30px;
  h1, p{
    margin: 0;
    padding: 5px;
  }
`
const Allstyled = styled.div`
  background-image: linear-gradient(rgba(255,255,255,.99) 0,rgba(255,255,255,.1) 60%,rgba(255,255,255,.99) 100%), url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: calc(100vh-46px);
  margin-bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const CardGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 90vw;
  justify-content: center;
`