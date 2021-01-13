import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { shade } from "polished";

export const DropdownContainer = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: block;
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    background: var(--color-primary);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 0.3rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #eeeff0;
`;
export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: ${shade(0.2, "#fff")};
  }
`;
export const BtnWrap = styled.div`
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
      color: var(--color-login);
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
    }

    span {
      color: var(--color-login);
      font-size: 12px;
      margin: 0 6px;
    }
  }
`;
