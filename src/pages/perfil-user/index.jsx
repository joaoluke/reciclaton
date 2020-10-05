import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPerfil } from '../../redux/action/user';


const Perfil = () => {

  const dispatch = useDispatch();
  const { userId } = useParams();
  let { user } = useSelector((state) => state.user);
  let logged = useSelector((state) => state.login);
  useEffect(() => dispatch(getPerfil(userId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId])

  console.log(logged)
  console.log(user)
  return (<>

    <h1>{JSON.stringify(user)}</h1>

  </>
  )
}

export default Perfil;