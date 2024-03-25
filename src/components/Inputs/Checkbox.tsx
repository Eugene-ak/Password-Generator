import { MutableRefObject } from "react";
import {
  CheckboxContainer,
  CheckboxDiv,
  CheckboxLabel,
  CheckboxStyle,
} from "./Checkbox.style";

export default function Checkbox({
  name,
  id,
  refValue,
  onChange,
  text
}: {
  name: string;
  id: string;
  refValue: MutableRefObject<HTMLInputElement | null>;
  onChange: VoidFunction;
  text: string;
}) {
  return (
    <CheckboxContainer>
      <CheckboxDiv>
        <CheckboxStyle
          type="checkbox"
          name={name}
          id={id}
          ref={refValue}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id}>
          Include {text}
        </CheckboxLabel>
      </CheckboxDiv>
    </CheckboxContainer>
  );
}
