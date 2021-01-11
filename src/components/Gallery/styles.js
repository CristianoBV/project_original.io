import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 4rem;
  }
`;

export const Thumbs = styled.section`
  margin-right: 5.6rem;
  margin-top: 11px;
  height: 82px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 556px;
    overflow-y: auto;
  }

  ul span {
    margin: 12px 0;
    cursor: pointer;
  }

  ul li {
    width: 82px;
    height: 94px;
    margin: 5px 0;
    cursor: pointer;
  }

  ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    transition: 0.2s;
  }

  & ul li.active img,
  ul li:hover img {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Video = styled.div`
  p {
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-primary);
    margin-bottom: 5px;
  }
`;

export const Player = styled.div`
  position: relative;
  width: 82px;
  height: 45px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  > img {
    opacity: 0.4;
  }

  span {
    position: absolute;
    top: 3px;
    right: 20px;
  }
`;

export const Preview = styled.div`
  img {
    max-width: 430px;
    width: 100%;
    max-height: 556px;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    position: relative;

    img {
      width: 250px;
      height: 324px;
      object-fit: cover;
    }
  }
`;

export const Controll = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.3rem;
    position: absolute;
    bottom: 1rem;
    width: 100%;
  }
`;

export const Slide = styled.div`
  @media (max-width: 768px) {
    display: flex;
    margin: 0 2rem;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: transparent;
      border: 1.5px solid var(--color-white);
    }

    div.selected {
      background-color: var(--color-primary);
      border: none;
    }

    div + div {
      margin-left: 2rem;
    }
  }
`;

export const Play = styled.div`
  span img {
    height: 24px;
    width: 24px;
  }
`;
