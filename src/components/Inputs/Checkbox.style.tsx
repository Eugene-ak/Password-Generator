import styled from "styled-components";
import CheckIcon from "../../assets/images/icon-check.svg";

export const CheckboxContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`

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

  &::after {
    /* content: url(../../assets/images/icon-check.svg); */
    content: " ";
    /* background-image: url(../../assets/images/icon-check.svg); */
    background-image: ${CheckIcon};
    /* content: "h"; */
    width: 100%;
    height: 100%;
    /* background-color: red; */
    font-size: 1em;
    /* color: white; */
  }
`

export const CheckboxLabel = styled.label`
  font-family: var(--secondary-font);
  color: var(--app-white);
`