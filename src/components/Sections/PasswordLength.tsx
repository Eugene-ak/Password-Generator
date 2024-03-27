import { MutableRefObject } from "react";
import {
  LengthDetails,
  PassLengthStyle,
  RangeStyle,
  RangeValueStyle,
} from "./PasswordLength.style";

export default function PasswordLength({
  range,
  rangeValue,
  updateFunction,
}: {
  range: MutableRefObject<HTMLInputElement | null>;
  rangeValue: number;
  updateFunction: VoidFunction;
}) {
  return (
    <PassLengthStyle>
      <LengthDetails>
        <span>Character Length</span>
        <RangeValueStyle>{rangeValue}</RangeValueStyle>
      </LengthDetails>

      <RangeStyle
        type="range"
        name="passwordLength"
        min={0}
        max={20}
        value={rangeValue}
        onChange={updateFunction}
        ref={range}
      />
    </PassLengthStyle>
  );
}
