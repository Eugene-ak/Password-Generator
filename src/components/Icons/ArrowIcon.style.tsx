import styled from "styled-components";
import { CopyIconStyle } from "./CopyIcon.style";

export const ArrowIconStyle = styled(CopyIconStyle)`
  cursor: pointer;

  &:hover > path {
    fill: var(--app-green);
  }
`