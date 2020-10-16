import React from 'react';
import ReactLoading from 'react-loading';
import { StyledDiv, StyledLoadingDiv } from "./loading-styled";


const Loading = () => {
  return (
    <StyledDiv>
      <StyledLoadingDiv>
        <ReactLoading type={"spin"} color={"#429321"} height={'100%'} width={'100%'} />
      </StyledLoadingDiv>
    </StyledDiv>
  );
}

export default Loading;

