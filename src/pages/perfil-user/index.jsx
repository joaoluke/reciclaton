import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPerfil } from '../../redux/action/user';


const Perfil = () => {

  const dispatch = useDispatch();
  const { userId } = useParams();
  let userData = useSelector((state) => state.user);
  useEffect(() => dispatch(getPerfil(userId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId])

  console.log(userData)





  return (<>

    <h1>{JSON.stringify(userData)}</h1>

  </>
  )
}

export default Perfil;