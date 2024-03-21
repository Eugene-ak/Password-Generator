import { LengthDetails, PassLengthStyle, RangeStyle } from "./PasswordLength.style";

export default function PasswordLength() {
  return (
    <PassLengthStyle>
      <LengthDetails>
        <span>Character Length</span>
        <span>10</span>
      </LengthDetails>
      <RangeStyle type="range" name="passwordLength" min={0} max={20} />
    </PassLengthStyle>
  );
}
