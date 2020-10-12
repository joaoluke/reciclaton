import React from 'react';
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