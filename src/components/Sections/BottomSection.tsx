import GenerateButton from "../Buttons/GenerateButton";
import StrengthContainer from "./StrengthContainer";
import { BottomSectionDiv } from "./BottomSection.style";
import PasswordLength from "./PasswordLength";
import Checkbox from "../Inputs/Checkbox";

export default function BottomSection() {
  return (
    <BottomSectionDiv>
      <PasswordLength />
      <Checkbox />
      <StrengthContainer />
      <GenerateButton />
    </BottomSectionDiv>
  );
}
