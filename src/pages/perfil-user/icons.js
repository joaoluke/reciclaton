import React from "react";
import {
  GiFlatTire,
  GiWaterBottle,
  GiNewspaper,
  GiMetalBar,
  GiShatteredGlass,
  GiArmoredPants,
  GiBatteryPackAlt,
} from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import styled from "styled-components";

const Organic = styled(RiPlantFill)`
  width: 50px;
  height: 50px;
`;
const Plastic = styled(GiWaterBottle)`
  width: 50px;
  height: 50px;
`;
const Glass = styled(GiShatteredGlass)`
  width: 50px;
  height: 50px;
`;
const Paper = styled(GiNewspaper)`
  width: 50px;
  height: 50px;
`;
const Metal = styled(GiMetalBar)`
  width: 50px;
  height: 50px;
`;
const Battery = styled(GiBatteryPackAlt)`
  width: 50px;
  height: 50px;
`;
const Cloth = styled(GiArmoredPants)`
  width: 50px;
  height: 50px;
`;
const Electronic = styled(HiOutlineDesktopComputer)`
  width: 50px;
  height: 50px;
`;
const Rubber = styled(GiFlatTire)`
  width: 50px;
  height: 50px;
`;
const StyledP = styled.p`
  font-size: 25px;
  margin: 0;
`;
const StyledDiv = styled.div`
  text-align: center;
`;

const showMaterial = (material) => {
  const materialCase = material;
  switch (materialCase) {
    case "battery":
      return (
        <StyledDiv>
          <Battery />
          <StyledP>Bateria</StyledP>
        </StyledDiv>
      );
    case "cloth":
      return (
        <StyledDiv>
          <Cloth />
          <StyledP>Pano</StyledP>
        </StyledDiv>
      );
    case "electronic":
      return (
        <StyledDiv>
          <Electronic />
          <StyledP>Eletronico</StyledP>
        </StyledDiv>
      );
    case "glass":
      return (
        <StyledDiv>
          <Glass />
          <StyledP>Vidro</StyledP>
        </StyledDiv>
      );
    case "metal":
      return (
        <StyledDiv>
          <Metal />
          <StyledP>Metal</StyledP>
        </StyledDiv>
      );
    case "organic":
      return (
        <StyledDiv>
          <Organic />
          <StyledP>Organico</StyledP>
        </StyledDiv>
      );
    case "paper":
      return (
        <StyledDiv>
          <Paper />
          <StyledP>Papel</StyledP>
        </StyledDiv>
      );
    case "plastic":
      return (
        <StyledDiv>
          <Plastic />
          <StyledP>Plastico</StyledP>
        </StyledDiv>
      );
    case "rubber":
      return (
        <StyledDiv>
          <Rubber />
          <StyledP>Borracha</StyledP>
        </StyledDiv>
      );
    default:
      break;
  }
};

export default showMaterial;
