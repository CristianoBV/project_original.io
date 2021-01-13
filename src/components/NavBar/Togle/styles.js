import styled from "styled-components";
import { shade } from "polished";

export const Ul = styled.ul`
  display: none;
  position: absolute;
  z-index: 9999;
  list-style: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display: block;
    flex-flow: column nowrap;
    flex-direction: column;
    background-color: var(--color-primary);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      font-size: 14px;
      margin: 1rem 0;
    }
    li {
      display: block;
    }
    li a {
      margin: 0;
      color: var(--color-togle);
      text-decoration: none;
      font-weight: 400;
      cursor: pointer;
      &:hover {
        color: ${shade(0.2, "#686868")};
      }
    }
  }
`;

export const BtnWrap = styled.div`
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthMobile = styled.li`
  display: none;

  @media (max-width: 750px) {
    display: block;

    a {
      margin: 0;
      color: var(--color-white) !important;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
      &:hover {
        color: ${shade(0.4, "#fff")};
      }
    }

    span {
      color: var(--color-white);
      font-size: 12px;
      margin: 0 6px;
    }
  }
`;
