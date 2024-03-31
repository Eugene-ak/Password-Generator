import styled from "styled-components";
import CheckIcon from "/icon-check.svg";
// import CheckIcon from "../Icons/CheckIcon";

export const CheckboxContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export const CheckboxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const CheckboxStyle = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid var(--app-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--app-background);

  &:hover,
  &:focus-visible {
    border: 1px solid var(--app-green);
    outline: none;
  }

  &:checked {
    background-color: var(--app-green);
    color: var(--app-background);
    border: 1px solid var(--app-green);
  }

  &::after {
    content: url(${CheckIcon});
    fill: var(--app-background);
    width: 100%;
    height: 100%;
  }
`;

export const CheckboxLabel = styled.label`
  font-family: var(--secondary-font);
  color: var(--app-white);
`;
