import { useRef, useState } from "react";
import {
  LengthDetails,
  PassLengthStyle,
  RangeStyle,
  RangeValueStyle,
} from "./PasswordLength.style";

export default function PasswordLength() {

  const [rangeValue, setRangeValue] = useState(0);
  const range = useRef(null);

  const updateRangeValue = () => {
    setRangeValue(range?.current.value);
  };

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
        defaultValue={0}
        onChange={updateRangeValue}
        ref={range}
      />

    </PassLengthStyle>
  );
}
