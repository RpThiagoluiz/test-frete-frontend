import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 60%;
  height: 60%;

  color: rgba(146, 205, 53);

  //Center Count
  display: flex;
  align-items: center;
  justify-content: center;

  //Count
  transition: all 0.2s ease-in;
`;
export const ModalContent = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
