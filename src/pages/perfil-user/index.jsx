import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import decode from 'jwt-decode';
import { getPerfil } from '../../redux/action/user';
import Loading from '../../components/loading';



const Perfil = () => {

  const dispatch = useDispatch();
  const { userId } = useParams();
  let { user } = useSelector((state) => state.user);
  let logged = useSelector((state) => state.login);
  const decoded = decode(logged.authen)
  useEffect(() => dispatch(getPerfil(userId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId])
  console.log(parseInt(userId) !== user.id)

  return (<>
    {parseInt(userId) === user.id && <Loading />}
    {decoded.sub === userId && parseInt(userId) !== user.id && <h1>usuario no path logado aqui</h1>}
    {decoded.sub !== userId && parseInt(userId) !== user.id && <h1>usuario no path não está logado aqui</h1>}

  </>
  )
}

export default Perfil;