import styled from "styled-components";

export const GenerateBtn = styled.button`
  width: 100%;
  height: 3.5rem;
  margin: 1rem auto;
  background-color: var(--app-green);
  color: var(--card-background);
  text-transform: uppercase;
  font-family: var(--bold-font);
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover, &:focus, &:focus-visible {
    background-color: transparent;
    border: 1px solid var(--app-green);
    color: var(--app-green);
    fill: var(--app-green);
    outline: none;
  }

  &:hover > svg {
    filter: invert(10%);
    /* filter: brightness(1.1); */
    /* filter: saturate(100%); */
    /* filter: hue-rotate(90deg); */
  }
`;

export const GenerateText = styled.span`
  font-family: var(--bold-font);
`