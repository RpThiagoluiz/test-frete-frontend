import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;
export const FormSubtitle = styled.h2`
  font-size: 24px;
`;
export const Input = styled.input`
  height: 50px;
  width: 90%;

  font-family: "Roboto", sans-serif;
  font-size: 18px;

  margin: 50px 0;
  padding: 25px;

  border: 2px solid black;
  border-radius: 2px;
`;

export const SelectVehicles = styled.div`
  width: 90%;

  display: flex;
  align-items: left;
  justify-content: space-around;

  > img {
    height: 164px;
    margin-top: 50px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      border: 5px solid rgba(146, 205, 53, 0.3);
    }
  }
`;

export const ButtonSubmit = styled.button`
  width: 156px;
  height: 56px;

  font-size: 18px;

  background-color: #41c429;
  color: #fff;

  margin-top: 50px;
  border-radius: 4px;

  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
