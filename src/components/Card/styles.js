import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 1024px;
  margin: 0 auto;
  /* margin: 0 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardProd = styled.div`
  margin-bottom: 5rem;

  @media screen and (max-width: 761px) {
    width: 150px;
  }
`;

export const Colors = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.colorOne};
  background-color: ${(props) => props.colorTwo};
  background-color: ${(props) => props.colorThree};
  background-color: ${(props) => props.colorFour};
  border-radius: 50%;
  border: none;
  margin-left: 0.7rem;

  @media screen and (max-width: 761px) {
    display: none;
  }
`;

export const Product = styled.div`
  width: 290.22px;
  margin-bottom: 20px;

  img {
    width: 100%;
    background-size: cover;
    margin-bottom: 6px;
  }

  p {
    color: 202020;
    font-weight: 400;
    font-size: 16px;
    line-height: 23.4px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 761px) {
    width: 138px;
    height: 178.35px;
    margin: 0;

    img {
      height: 178.35px;
      width: 138px;
      margin: 0;
    }

    p {
      margin-top: 5px;
      margin-bottom: 0 !important;
      color: 202020;
      font-weight: 400;
      font-size: 12px;
      line-height: 19.61px;
    }
  }
`;

export const Plots = styled.p`
  display: none;
  @media screen and (max-width: 761px) {
    display: inline;
    font-size: 10px;
    font-weight: 400;
    line-height: 16.34px;
    font-style: normal;
    z-index: 10;
  }
`;
