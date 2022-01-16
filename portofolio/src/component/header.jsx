import React, { useState } from "react";
import {
  Container,
  Logo,
  NavLi,
  NavUl,
  Icons,
} from "../styled/headerStyled";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "./logo.png";
import { NavigateMobile } from "./NavigateMobile";
export const Navigate = () => {
  const [menu, setMenu] = useState(false);
  const click = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Container>
        <Logo src={logo} />
        <Icons>
          <HiOutlineMenuAlt3 size={24} onClick={click} />
        </Icons>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>Project</NavLi>
        </NavUl>
      </Container>
      {menu ? <NavigateMobile /> : null}
    </>
  );
};
