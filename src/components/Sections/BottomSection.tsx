import GenerateButton from "../Buttons/Button";
import InputElements from "../Inputs/InputElements";
import StrengthContainer from "../StrengthContainer";
import { BottomSectionDiv } from "./BottomSection.style";

export default function BottomSection() {
  return (
    <BottomSectionDiv>
      <InputElements />
      <StrengthContainer />
      <GenerateButton />
    </BottomSectionDiv>
  );
}
