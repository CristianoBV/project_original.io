import React from "react";

import { Container, NavLink } from "./styles";

const TimeLine = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category/shoes">
            <strong>Sapatos</strong>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default TimeLine;
