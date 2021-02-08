import styled from "styled-components";

//Image Game
import backgroundGame from "../../assets/images/background-pista.gif";

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 1fr;

  grid-template-areas: "LS CT RS";

  background: rgb(255, 255, 255, 1);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 13%,
    rgba(146, 205, 53, 0.3) 46%,
    rgba(38, 56, 68, 0.3) 75%
  );
`;

export const LeftSide = styled.div`
  grid-area: LS;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

export const Content = styled.div`
  grid-area: CT;

  display: flex;
  flex-direction: column;

  background: url(${backgroundGame}) no-repeat center;
  background-size: 500px;

  margin: 50px 0;
`;

export const ImageAvatar = styled.img`
  //Custom Vehicles
  width: 78px;
  height: 98px;
  margin-bottom: 5px;

  align-items: center;
  position: absolute;
  bottom: 50px;
  left: ${(props) =>
    props.moveSides}; //left-43 md-48 right-54 --Props Img e make Switch CaseHere 1820pScreen

  transition: all 0.5s ease-in-out;
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
