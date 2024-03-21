import GenerateButton from "../Buttons/GenerateButton";
import InputElements from "../Inputs/InputElements";
import StrengthContainer from "./StrengthContainer";
import { BottomSectionDiv } from "./BottomSection.style";
import PasswordLength from "./PasswordLength";

export default function BottomSection() {
  return (
    <BottomSectionDiv>
      <PasswordLength />
      <InputElements />
      <StrengthContainer />
      <GenerateButton />
    </BottomSectionDiv>
  );
}
