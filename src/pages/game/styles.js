import styled from "styled-components";

//Image Game
import backgroundGame from "../../assets/images/background-pista.gif";

export const Grid = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr 350px;
  grid-template-rows: 1fr;

  grid-template-areas: "LS CT RS";
`;

export const LeftSide = styled.div`
  grid-area: LS;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 24px;
  }

  > input {
    height: 50px;
    width: 90%;

    font-family: "Roboto", sans-serif;
    font-size: 18px;

    margin: 50px 0;
    padding: 25px;

    border: 2px solid black;
    border-radius: 2px;
  }

  > button {
    width: 156px;
    height: 56px;

    font-size: 18px;

    background-color: #41c429;
    color: #fff;

    border-radius: 4px;

    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  grid-area: CT;

  background: url(${backgroundGame}) no-repeat center;
  background-size: 70%;

  margin: 50px 0;
`;

export const RightSide = styled.div`
  grid-area: RS;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;

  > h3 {
    margin-bottom: 50px;
  }
`;
