import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import decode from "jwt-decode";
import { getPerfil } from "../../redux/action/user";
import Loading from "../../components/loading";

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
        <>
          <div>
            <h1>{user.brand}</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Perfil;
