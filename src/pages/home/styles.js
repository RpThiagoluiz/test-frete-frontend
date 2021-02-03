import bckImg from "../../assets/images/background-home.svg";
import styled, { keyframes } from "styled-components";

const animate = keyframes`

  0% {
    opacity: 1;
  }
  50%{
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }


`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;

  background: rgb(255, 255, 255, 1);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 13%,
    rgba(146, 205, 53, 0.3) 46%,
    rgba(38, 56, 68, 0.3) 75%
  );

  &:before {
    content: "";
    background: url(${bckImg}) no-repeat center;
    opacity: 0.3;
    position: absolute;
    top: 100px;
    bottom: 100px;
    left: 0;
    right: 0;
    z-index: -1;
  }
  > a {
    text-decoration: none;

    > img {
      width: 128px;
      height: 128px;

      animation: ${animate} 0.5s infinite;
      transition: animation 0.2s ease-in;

      &:hover {
        animation: none;
      }
    }
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;

  font-size: 56px;

  background-clip: text;
  background: -webkit-linear-gradient(#41c429, #16232b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 15px;
`;
