import { useRef } from "react";
import {
  CheckboxContainer,
  CheckboxDiv,
  CheckboxLabel,
  CheckboxStyle,
} from "./Checkbox.style";

export default function Checkbox() {
  const uppercaseCheck = useRef(null);
  const lowercaseCheck = useRef(null);
  const numbersCheck = useRef(null);
  const symbolsCheck = useRef(null);

  return (
    <CheckboxContainer>
      <CheckboxDiv>
        <CheckboxStyle
          type="checkbox"
          name="uppercase"
          id="uppercase"
          ref={uppercaseCheck}
        />
        <CheckboxLabel htmlFor="uppercase">
          Include Uppercase Letters
        </CheckboxLabel>
      </CheckboxDiv>

      <CheckboxDiv>
        <CheckboxStyle
          type="checkbox"
          name="lowercase"
          id="lowercase"
          ref={lowercaseCheck}
        />
        <CheckboxLabel htmlFor="lowercase">
          Include Lowercase Letters
        </CheckboxLabel>
      </CheckboxDiv>

      <CheckboxDiv>
        <CheckboxStyle
          type="checkbox"
          name="numbers"
          id="numbers"
          ref={numbersCheck}
        />
        <CheckboxLabel htmlFor="numbers">Include Numbers</CheckboxLabel>
      </CheckboxDiv>

      <CheckboxDiv>
        <CheckboxStyle
          type="checkbox"
          name="symbols"
          id="symbols"
          ref={symbolsCheck}
        />
        <CheckboxLabel htmlFor="symbols">Include Symbols</CheckboxLabel>
      </CheckboxDiv>
    </CheckboxContainer>
  );
}
