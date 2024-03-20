import GenerateButton from "./Buttons/Button";
import InputElements from "./Inputs/InputElements";
import StrengthContainer from "./StrengthContainer";

export default function PasswordSettings() {
  return (
    <div>
      <InputElements />
      <StrengthContainer />
      <GenerateButton />
    </div>
  );
}
