import styled from "styled-components";
import { shade } from "polished";

export const Info = styled.div`
  max-width: 444px;
  width: 100%;
  height: 535px;
  border: 2px solid var(--color-secondary);
  border-radius: 4px;
  padding: 1.9rem 2rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;

  header h1 {
    font-size: 2.6rem;
    opacity: 0.8;
    text-transform: uppercase;

    header span {
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    border: none;
    padding: 0;
    margin: 0;

    header {
      width: 100%;
      margin-top: 1rem;
      text-align: center;
      position: absolute;
      top: 0;
    }

    header h1 {
      font-size: 1.8rem;
      font-weight: normal;
      color: var(--color-primary);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    header span {
      font-size: 1.2rem;
      font-weight: normal;
      color: var(--color-ellipse);
      text-transform: uppercase;
      margin: 10px 0;
    }
  }
`;

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;

  span {
    color: var(--color-ellipse);
    font-size: 1.2rem;
    margin-top: 3px;
  }
`;

export const Price = styled.div`
  display: flex;

  .old-price {
    color: var(--color-primary);
    font-size: 1.4rem;
    font-weight: normal;
    margin-right: 6px;
    text-decoration: line-through;
  }

  span + span {
    color: var(--color-login);
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Options = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Colors = styled.div`
  p {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  p span {
    font-size: 1.4rem;
    color: var(--color-secondary);
    margin-left: 8px;
    text-transform: capitalize;
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  margin-top: 17px;
  margin-bottom: 17px;

  div {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 8px;
  }

  div.selected {
    border: 1.5px solid var(--color-white);
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  div .color-1 {
    background-color: var(--color-complement2);
  }

  div .color-2 {
    background-color: var(--color-complement3);
  }

  div .color-3 {
    background-color: var(--color-complement4);
  }

  div .color-4 {
    background-color: var(--color-black);
  }
`;

export const Size = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-top: 1rem;
  }
  ul li {
    color: var(--color-secondary);
    padding: 8px;
    border: 1px solid var(--color-gray-dark);
    border-radius: 4px;
    cursor: pointer;
  }
  ul li + li {
    margin-left: 3px;
  }
  & ul li.selected,
  & ul li:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    ul {
      margin-top: 1rem;
      padding-bottom: 5px;
      overflow-x: auto;
    }
  }
`;

export const SizeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    opacity: 0.8;
  }
  p span {
    color: var(--color-secondary);
    margin-left: 5px;
  }
  a {
    color: var(--color-primary);
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  color: var(--color-white);
  text-transform: uppercase;
  background-color: var(--color-sucess);
  border: none;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  margin-bottom: 1.6rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${shade(0.2, "#32917b")};
  }
`;
