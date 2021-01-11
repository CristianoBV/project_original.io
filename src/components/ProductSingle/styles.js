import styled from "styled-components";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 2rem;
  }
`;
