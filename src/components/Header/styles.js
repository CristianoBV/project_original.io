import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.header`
  width: 100%;
  position: relative;

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    border-bottom: 1px solid var(--color-border);
  }
`;

export const Logo = styled.div`
  width: 148px;
  height: 34px;
  margin: 2.6rem auto;

  @media (max-width: 750px) {
    margin: 0 auto;
    margin-left: 10rem;
  }
`;
export const Content = styled.div`
  padding: 0 calc((100% - 1024px) / 2);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);

  @media (max-width: 750px) {
    border: none;
  }
`;

export const Auth = styled.div`
  margin-left: 1rem;

  a {
    text-decoration: none;
    color: var(--color-login);
    font-size: 1.2rem;
    padding-right: 8px;
    transition: all 0.3s;

    &:hover {
      color: ${shade(0.2, "#686868")};
    }
  }

  a + a {
    border-left: 2px solid var(--color-border);
    padding-left: 8px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: var(--color-login);
    margin-right: 1.5rem;
    padding: 5px 8px;
    transition: all 0.2s;

    &:hover {
      color: ${shade(0.2, "#cccccc")};
    }
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;

  @media (max-width: 750px) {
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--color-gray-complement1);

  input {
    border: none;
    width: 83px;
    margin-left: 10px;
    transition: ease-in-out, width 0.35s ease-in-out;

    &:focus {
      outline: none;
      width: 221px;
    }

    &::placeholder {
      font-weight: normal;
      color: var(--color-gray-lighter);
      padding-left: 1.4rem;
    }
  }

  button {
    display: none;
  }

  @media (max-width: 750px) {
    border: none;

    input {
      width: 0;
    }

    .open {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: var(--color-gray);
      padding: 0 5rem;
      z-index: 300;
    }
    .search form.open button {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      background-color: var(--color-primary-dark);
      color: var(--color-white);
      font-weight: bold;
    }
    .open span {
      display: none;
    }
    .open input {
      width: 100%;
      padding: 5px;
      border: none;
      border-bottom: 2px solid var(--color-primary);
      background-color: transparent;
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--color-black);
    }
  }
`;

export const Bag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  cursor: pointer;

  span {
    margin-left: 3px;
    color: var(--color-login);
    font-weight: bold;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
    cursor: pointer;
  }

  .cart span {
    margin-left: 3px;
    color: var(--color-login);
    font-weight: bold;
  }

  @media (max-width: 750px) {
    margin-left: 1.7rem;
  }
`;
