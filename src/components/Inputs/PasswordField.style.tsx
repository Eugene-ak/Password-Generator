import styled from "styled-components";

export const PasswordStyle = styled.input`
  border: none;
  min-width: 70%;
  height: 100%;
  padding: 0.5rem;
  background-color: transparent;
  color: var(--app-white);
  font-family: var(--bold-font);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-basis: auto;

  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
  }
`;
