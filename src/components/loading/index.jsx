import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';



const Loading = () => {

  return (
    <styledDiv>
      <ReactLoading type={"spin"} color={"#429321"} height={'20%'} width={'20%'} />
    </styledDiv>
  );

}

export default Loading;

const styledDiv = styled.div`

    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background-color:#f4f9ef;    
    display:flex;
    flex-flow: column nowrap;
    margin: 0 auto;
`