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
  font-family: var(--primary-font);
`;

export const StrengthIndicators = styled.span`
  & > :nth-child(-n + 4) {
    width: 5px;
    height: 100%;
    margin: 0 3.5px;
    cursor: default;
    border: 1px solid var(--app-white);
  }

  & > :nth-child(1) {
    color: ${(props) =>
      props.className === "weakest"
        ? "var(--app-red)"
        : props.className === "weak"
        ? "var(--app-orange)"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "var(--app-red)"};
    background-color: ${(props) =>
      props.className === "weakest"
        ? "var(--app-red)"
        : props.className === "weak"
        ? "var(--app-orange)"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "var(--app-red)"};
    border: 1px solid
      ${(props) =>
        props.className === "weakest"
          ? "var(--app-red)"
          : props.className === "weak"
          ? "var(--app-orange)"
          : props.className === "medium"
          ? "var(--app-yellow)"
          : props.className === "strong"
          ? "var(--app-green)"
          : "var(--app-red)"};
  }

  & > :nth-child(2) {
    color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "var(--app-orange)"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    background-color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "var(--app-orange)"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    border: 1px solid
      ${(props) =>
        props.className === "weakest"
          ? "var(--app-white)"
          : props.className === "weak"
          ? "var(--app-orange)"
          : props.className === "medium"
          ? "var(--app-yellow)"
          : props.className === "strong"
          ? "var(--app-green)"
          : "var(--app-white)"};
  }

  & > :nth-child(3) {
    color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "transparent"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    background-color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "transparent"
        : props.className === "medium"
        ? "var(--app-yellow)"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    border: 1px solid
      ${(props) =>
        props.className === "weakest"
          ? "var(--app-white)"
          : props.className === "weak"
          ? "var(--app-white)"
          : props.className === "medium"
          ? "var(--app-yellow)"
          : props.className === "strong"
          ? "var(--app-green)"
          : "var(--app-white)"};
  }

  & > :nth-child(4) {
    color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "transparent"
        : props.className === "medium"
        ? "transparent"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    background-color: ${(props) =>
      props.className === "weakest"
        ? "transparent"
        : props.className === "weak"
        ? "transparent"
        : props.className === "medium"
        ? "transparent"
        : props.className === "strong"
        ? "var(--app-green)"
        : "transparent"};
    border: 1px solid
      ${(props) =>
        props.className === "weakest"
          ? "var(--app-white)"
          : props.className === "weak"
          ? "var(--app-white)"
          : props.className === "medium"
          ? "var(--app-white)"
          : props.className === "strong"
          ? "var(--app-green)"
          : "var(--app-white)"};
  }
`;
