import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";

export const Container = styled.div`
  width: 90vw;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 1.1rem;

  ul {
    display: flex;
    list-style-type: none;
    margin-top: 8px;
  }

  ul li a {
    font-size: 1.2rem;
    color: var(--color-text-menu);
    text-decoration: none;
    padding-right: 5px;
  }

  ul li + li::before {
    content: "/";
    color: var(--color-text-menu);
  }

  ul li + li a {
    padding-left: 5px;
  }
`;

export const NavMenuLinks = css`
  font-size: 1.2rem;
  color: var(--color-text-menu);
  text-decoration: none;
  padding-right: 5px;

  &:hover {
    color: ${shade(0.1, "#aeb6c1")};
  }
`;

export const NavLink = styled(Link)`
  ${NavMenuLinks}
`;
