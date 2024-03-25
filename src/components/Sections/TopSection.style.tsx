import styled from "styled-components";

export const TopSectionDiv = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: var(--card-background);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    padding: 1rem;
  }
`