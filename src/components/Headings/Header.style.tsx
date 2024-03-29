import styled from "styled-components";

export const StyledHeader = styled.h4`
  width: 540px;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-background);

  @media screen and (max-width: 580px) {
    width: 343px;
  }
`;
