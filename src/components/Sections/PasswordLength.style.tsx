import styled from "styled-components";

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

export const RangeStyle = styled.input`
  width: 100%;
  height: 7px;
  margin-bottom: 2rem;
  background-color: var();
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background-color: var(--app-background);
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
    
    &:hover {
      background-color: var(--app-background);
      border: 3px solid var(--app-green);
    }
  }
  
  &:hover {
    &::-webkit-slider-thumb {
      background-color: var(--app-background);
      border: 3px solid var(--app-green); 
    }
  }
`;
