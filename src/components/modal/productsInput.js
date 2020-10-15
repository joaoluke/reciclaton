import React from "react";
import { ComponentProducts, ComponentProduct, ComponentCheck } from "./styled";

const ProductInput = ({ collector }) => {
  return (
    <>
      <ComponentProducts>
        <ComponentProduct>Organicos</ComponentProduct>
        <ComponentCheck name="organic" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Plasticos</ComponentProduct>
        <ComponentCheck name="plastic" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Vidro</ComponentProduct>
        <ComponentCheck name="glass" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Papel</ComponentProduct>
        <ComponentCheck name="paper" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Metal</ComponentProduct>
        <ComponentCheck name="metal" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Bateria</ComponentProduct>
        <ComponentCheck name="battery" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Tecido</ComponentProduct>
        <ComponentCheck name="cloth" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Eletronicos</ComponentProduct>
        <ComponentCheck name="electronic" type="checkbox" ref={collector} />
      </ComponentProducts>
      <ComponentProducts>
        <ComponentProduct>Borracha</ComponentProduct>
        <ComponentCheck name="rubber" type="checkbox" ref={collector} />
      </ComponentProducts>
    </>
  );
};

export default ProductInput;
