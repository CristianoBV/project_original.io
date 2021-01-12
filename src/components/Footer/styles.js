import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: 14.4rem;
  border-top: 2px solid var(--color-text-menu);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;

    .accordion {
      flex-direction: column;
      order: -1;
      width: 100%;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.1rem;
  width: 248px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
    align-items: center;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;

  a + a {
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 3.2rem;
  }
`;

export const Accordion = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    order: -1;
    width: 100%;
  }
`;

export const News = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 293px;
  height: 293px;
  border: 2px solid var(--color-text-menu);
  background-color: var(--color-background);
  border-radius: 50%;
  position: absolute;
  top: -100px;
  right: 15px;
  margin-left: 6.2rem;

  p {
    font-size: 1.6rem;
    color: var(--color-black);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 3rem;
  }

  > label {
    font-size: 1.2rem;
    color: var(--color-black);
    opacity: 0.8;
  }

  > input {
    border: none;
    border-bottom: 2px solid var(--color-complement1);
    margin-top: 5px;
    margin-bottom: 1.5rem;
    padding: 0 5px;
  }

  > input + input {
    margin-bottom: 0;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 1.4rem;
      color: var(--color-black);
      opacity: 0.8;
    }
  }

  > button {
    border: none;
    width: 110px;
    height: 50px;
    background-color: var(--color-primary);
    color: var(--color-white);
    text-align: center;
    cursor: pointer;
    align-self: center;
    margin-top: 2.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 128px;
    border-radius: initial;
    position: static;
    border: none;
    margin-left: 0;
    margin-top: 3rem;

    p {
      font-size: 1.6rem;
      color: var(--color-text-menu);
      text-align: center;
      text-transform: uppercase;
    }

    form {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 1rem;
      padding: 0 1.5rem;
    }

    > input[type="text"] {
      width: 100%;
    }

    > input[type="email"] {
      width: calc(100% - 100px);
    }

    > label {
      font-size: 1.2rem;
      color: var(--color-complement1);
      opacity: 0.8;
      display: block;
      margin-bottom: 5px;
    }

    > button {
      width: 80px;
      height: 40px;
      border-radius: 4px;
      margin: 0;
      margin-left: 1rem;
    }
  }
`;

export const Btn = styled.div`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  color: var(--color-white);
  margin-top: 4.5rem;

  p {
    font-size: 1.4rem;
    padding-right: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    margin-top: 3.8rem;
    p {
      padding: 0;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
`;
