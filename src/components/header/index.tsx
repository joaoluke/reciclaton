import React from "react";
import { BaseHeader } from "./header-style";
import { Logo } from "../layout/styled-layout";
interface HeaderInterface {
  children: string | React.ReactNode | Array<React.ReactNode>;
}
const Header = ({ children }: HeaderInterface) => {
  return (
    <BaseHeader>
      <Logo />
      {children}
    </BaseHeader>
  );
};

export default Header;
