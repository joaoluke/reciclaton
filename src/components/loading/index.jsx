import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';



const Loading = () => {

  const style = {

    height: "100%",
    width: "100vw",
    boxSizing: "border-box",
    backgroundColor: "#f4f9ef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }

  return (
    <div style={style}>
      <div style={{ margin: "auto", width: "150px", height: "150px" }}>
        <ReactLoading type={"spin"} color={"#429321"} height={'100%'} width={'100%'} />
      </div>
    </div>
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