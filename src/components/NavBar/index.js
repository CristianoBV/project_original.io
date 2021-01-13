import React, { useState } from "react";
import Togle from "./Togle";

import { StyledBurger } from "./styles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Togle open={open} />
    </>
  );
};

export default Burger;
