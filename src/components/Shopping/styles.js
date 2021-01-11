import styled from "styled-components";

export const Content = styled.div`
  background-color: var(--color-background);
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .close-cart {
    top: 10px;
    right: 20px;
    position: absolute;
    background-color: var(--color-background);
    border: none;
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-secondary);
    cursor: pointer;
    outline: none;
  }

  header {
    margin: 0 1.2rem;
    padding: 2rem;
    border-bottom: 1px solid var(--color-text-menu);
  }

  header p {
    color: var(--color-primary);
    font-size: 1.8rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  header span {
    color: var(--color-text-menu);
    font-size: 1.4rem;
    font-weight: normal;
    margin-top: 5px;
  }

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  overflow-y: scroll;
  margin: 1rem 2rem 1.2rem 0;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e2e2e2;
    margin-top: 2rem;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 4px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  margin-right: 1rem;

  img {
    max-height: 59px;
    object-fit: cover;
    margin-right: 9px;
    box-shadow: 3px 1px 4px -4px #000;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.6rem;
    color: var(--color-black);
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--color-black);
    margin-top: 5px;
  }
`;

export const Increments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddRemove = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;

  span {
    padding: 3px 5px;
    cursor: pointer;
  }

  .total-item {
    font-size: 1.4rem;
    color: var(--color-secondary);
    margin: 0 2rem;
  }
`;

export const Delete = styled.div`
  button {
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--color-border);
    cursor: pointer;
    margin-right: 6px;
    outline: none;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: var(--color-gray-light);
`;

export const Promo = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
  background-color: var(--color-text-menu);
  padding: 1rem 1.7rem;
  font-size: 1.4rem;
  color: var(--color-white);

  span {
    font-weight: bold;
    margin-top: 5px;
  }

  @media (min-width: 668px) {
    > p {
      font-size: 1.4rem;
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.7rem;
  height: 65px;

  button {
    height: 42px;
    width: 145px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-sucess);
    color: var(--color-white);
    text-align: center;
    font-size: 1.2rem;
  }

  @media (min-width: 668px) {
    button {
      font-size: 1.4rem;
    }
  }
`;

export const Resume = styled.div`
  margin-right: 7px;

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--color-ellipse-dark);
  }

  p {
    font-size: 1.2rem;
    color: var(--color-ellipse-dark);
    margin-top: 3px;
  }
`;
