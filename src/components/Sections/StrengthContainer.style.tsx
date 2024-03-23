import styled from "styled-components";

export const StrengthContainerSection = styled.div`
  width: 100%;
  padding: 1.2rem 1.5rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--app-background);
  font-family: var(--bold-font);
`;

export const StrengthText = styled.span`
  text-transform: uppercase;
  color: var(--secondary-background);
`;

export const StrengthLabel = styled.span`
  color: var(--app-white);
  text-transform: uppercase;
  padding: 0 1rem;
`;

export const StrengthIndicators = styled.span`
  & > :nth-child(-n+4) {
    width: 5px;
    height: 100%;
    margin: 0 0.2rem;
    cursor: default;
  }

  & > :nth-child(1) {
    color: var(--app-red);
    background-color: var(--app-red);
  }

  & > :nth-child(2) {
    color: var(--app-orange);
    background-color: var(--app-orange);
  }

  & > :nth-child(3) {
    color: var(--app-yellow);
    background-color: var(--app-yellow);
  }

  & > :nth-child(4) {
    color: var(--app-green);
    background-color: var(--app-green);
  }
`;
