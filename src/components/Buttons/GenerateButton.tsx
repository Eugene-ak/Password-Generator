import ArrowIcon from "../Icons/ArrowIcon";
import { GenerateBtn, GenerateText } from "./GenerateButton.style";

export default function GenerateButton({ onClick }: { onClick: VoidFunction }) {
  return (
    <GenerateBtn onClick={onClick}>
      <GenerateText>Generate</GenerateText>
      <ArrowIcon />
    </GenerateBtn>
  );
}
