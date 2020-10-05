import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPerfil } from '../../redux/action/user';


const Perfil = () => {

  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(dispatch(getPerfil(userId)),
    [userId])

  // let userData = useSelector((state) => state)

  return (<>

    <h1>user page</h1>

  </>
  )
}

export default Perfil;