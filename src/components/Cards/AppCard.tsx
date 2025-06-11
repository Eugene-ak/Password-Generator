import { StyledCard } from "./AppCard.style";
import { MutableRefObject, useRef, useState } from "react";
import CopyButton from "../Buttons/CopyButton";
import PasswordField from "../Inputs/PasswordField";
import { TopSectionDiv } from "../Sections/TopSection.style";
import GenerateButton from "../Buttons/GenerateButton";
import Checkbox from "../Inputs/Checkbox";
import { BottomSectionDiv } from "../Sections/BottomSection.style";
import PasswordLength from "../Sections/PasswordLength";
import StrengthContainer from "../Sections/StrengthContainer";
import { generatePassword } from "../../../utils/functions";

export default function AppCard() {
  const range: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const uppercaseCheck: MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const lowercaseCheck = useRef<HTMLInputElement | null>(null);
  const numbersCheck = useRef<HTMLInputElement | null>(null);
  const symbolsCheck = useRef<HTMLInputElement | null>(null);

  const [password, setPassword] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<number>(0);
  const [checkedStateCount, setCheckedStateCount] = useState<number>(0);

  // Function to update the range value
  const updateRangeValue = () => {
    let value: number = 0;
    if (range.current?.value) {
      value = parseInt(range.current?.value);
    }
    setRangeValue(value);
  };

  // Function to determine strength state and type of values to include in password
  const updateCheckCount = (
    name: MutableRefObject<HTMLInputElement | null>
  ) => {
    if (name.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  return (
    <StyledCard>
      <TopSectionDiv>
        <PasswordField passwordValue={password} />
        <CopyButton text={password} />
      </TopSectionDiv>
      <BottomSectionDiv>
        <PasswordLength
          range={range}
          rangeValue={rangeValue}
          updateFunction={updateRangeValue}
        />
        <Checkbox
          name="uppercase"
          id="uppercase"
          refValue={uppercaseCheck}
          onChange={() => updateCheckCount(uppercaseCheck)}
          text="Uppercase Letters"
        />
        <Checkbox
          name="lowercase"
          id="lowercase"
          refValue={lowercaseCheck}
          onChange={() => updateCheckCount(lowercaseCheck)}
          text="Lowercase Letters"
        />
        <Checkbox
          name="mumbers"
          id="numbers"
          refValue={numbersCheck}
          onChange={() => updateCheckCount(numbersCheck)}
          text="Numbers"
        />
        <Checkbox
          name="symbols"
          id="symbols"
          refValue={symbolsCheck}
          onChange={() => updateCheckCount(symbolsCheck)}
          text="Symbols"
        />
        <StrengthContainer count={checkedStateCount} rangeValue={rangeValue} />
        <GenerateButton
          onClick={() =>
            generatePassword(
              rangeValue,
              uppercaseCheck,
              lowercaseCheck,
              numbersCheck,
              symbolsCheck,
              setPassword
            )
          }
        />
      </BottomSectionDiv>
    </StyledCard>
  );
}
