import styled from "styled-components";

export const Container = styled.div`
  margin: 0 4rem;
  margin-bottom: 4rem;

  h2 {
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 3.8rem;
    text-align: center;
    text-transform: uppercase;
    color: #de8f75;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 761px) {
    margin: 0 1rem;
    margin-bottom: 3px;
  }
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  div {
    width: 35px;
    height: 35px;
    border: 2px solid #2a5a75;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  p {
    font-family: "Open Sans", sans-serif;
    margin: 0 3.2rem;
    font-size: 1.4rem;
    line-height: 2.3rem;
    color: #2a5a75;
  }
`;
