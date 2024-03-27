import styled from "styled-components";

export const CopyButtonStyle = styled.button`
  width: max-content;
  height: 100%;
  background-color: transparent;
  border: none;
  color: var(--app-green);
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-transform: uppercase;
  font-family: var(--primary-font);
`;

export const CopiedText = styled.span`
  font-size: 0.9rem;
  display: none;
`;
