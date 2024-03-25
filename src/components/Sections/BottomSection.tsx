import GenerateButton from "../Buttons/GenerateButton";
import StrengthContainer from "./StrengthContainer";
import { BottomSectionDiv } from "./BottomSection.style";
import PasswordLength from "./PasswordLength";
import Checkbox from "../Inputs/Checkbox";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function BottomSection() {
  const uppercaseCheck: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const lowercaseCheck = useRef<HTMLInputElement | null>(null);
  const numbersCheck = useRef<HTMLInputElement | null>(null);
  const symbolsCheck = useRef<HTMLInputElement | null>(null);

  const [checkedStateCount, setCheckedStateCount] = useState<number>(0);

  useEffect(() => {
    console.log(checkedStateCount);
  }, [checkedStateCount]);

  const toggleUpperCaseCheck = () => {
    if (uppercaseCheck.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  const toggleLowerCaseCheck = () => {
    if (lowercaseCheck.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  const toggleNumbersCheck = () => {
    if (numbersCheck.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  const toggleSymbolsCheck = () => {
    if (symbolsCheck.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  return (
    <BottomSectionDiv>
      <PasswordLength />
      <Checkbox
        name="uppercase"
        id="uppercase"
        refValue={uppercaseCheck}
        onChange={toggleUpperCaseCheck}
        text="Uppercase Letters"
      />
      <Checkbox
        name="lowercase"
        id="lowercase"
        refValue={lowercaseCheck}
        onChange={toggleLowerCaseCheck}
        text="Lowercase Letters"
      />
      <Checkbox
        name="mumbers"
        id="numbers"
        refValue={numbersCheck}
        onChange={toggleNumbersCheck}
        text="Numbers"
      />
      <Checkbox
        name="symbols"
        id="symbols"
        refValue={symbolsCheck}
        onChange={toggleSymbolsCheck}
        text="Symbols"
      />
      <StrengthContainer count={checkedStateCount} />
      <GenerateButton />
    </BottomSectionDiv>
  );
}
