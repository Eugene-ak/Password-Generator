import styled from "styled-components";

type Props = {
  value: number;
};

export const PassLengthStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const LengthDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RangeStyle = styled.input<Props>`
  width: 100%;
  height: 7px;
  margin-bottom: 2rem;
  background-color: var();
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background: ${({ value }) =>
    `linear-gradient(to right,
    var(--app-green) 0%, 
    var(--app-green) ${value * 5}%, 
    var(--app-background) ${value * 5}%,
    var(--app-background) 100%)`};
  border: none;
  border-radius: 0;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: var(--app-white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background-color: var(--app-background);
      border: 3px solid var(--app-green);
    }
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--app-white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background-color: var(--app-background);
      border: 3px solid var(--app-green);
    }
  }

  &:hover,
  &:focus-visible {
    &::-webkit-slider-thumb {
      background-color: var(--app-background);
      border: 3px solid var(--app-green);
    }

    &::-moz-range-thumb {
      background-color: var(--app-background);
      border: 3px solid var(--app-green);
    }
  }
`;

export const RangeValueStyle = styled.span`
  color: var(--app-green);
  font-size: 1.5rem;
`;
