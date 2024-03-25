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

export default function AppCard() {
  const uppercaseLetters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowercaseLetters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const symbols: string[] = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

  const range: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const uppercaseCheck: MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const lowercaseCheck = useRef<HTMLInputElement | null>(null);
  const numbersCheck = useRef<HTMLInputElement | null>(null);
  const symbolsCheck = useRef<HTMLInputElement | null>(null);

  const [password, setPassword] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<string | undefined>("0");
  const [checkedStateCount, setCheckedStateCount] = useState<number>(0);

  const updateRangeValue = () => {
    setRangeValue(range.current?.value);
  };

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

  function shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const generatePassword = () => {
    if (rangeValue !== undefined) {
      const passLength: number = parseInt(rangeValue);
      const newArray = [];

      for (let i = 1; i <= passLength; i++) {
        if (
          uppercaseCheck.current?.checked &&
          !lowercaseCheck.current?.checked &&
          !numbersCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
        } else if (
          lowercaseCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !numbersCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
        } else if (
          numbersCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !lowercaseCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
        } else if (
          symbolsCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !numbersCheck.current?.checked &&
          !lowercaseCheck.current?.checked
        ) {
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          uppercaseCheck.current?.checked &&
          lowercaseCheck.current?.checked &&
          !numbersCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
        } else if (
          uppercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          !lowercaseCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
        } else if (
          uppercaseCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !lowercaseCheck.current?.checked &&
          !numbersCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          lowercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
        } else if (
          lowercaseCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !numbersCheck.current?.checked
        ) {
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          numbersCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !uppercaseCheck.current?.checked &&
          !lowercaseCheck.current?.checked
        ) {
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          uppercaseCheck.current?.checked &&
          lowercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          !symbolsCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
        } else if (
          uppercaseCheck.current?.checked &&
          lowercaseCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !numbersCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          uppercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !lowercaseCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else if (
          lowercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          symbolsCheck.current?.checked &&
          !uppercaseCheck.current?.checked
        ) {
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(
            numbers[
              Math.floor(Math.random() * numbers.length)
            ]
          );
          newArray.push(
            symbols[
              Math.floor(Math.random() * symbols.length)
            ]
          );
        } else if (
          uppercaseCheck.current?.checked &&
          lowercaseCheck.current?.checked &&
          numbersCheck.current?.checked &&
          symbolsCheck.current?.checked
        ) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
          newArray.push(
            numbers[
              Math.floor(Math.random() * numbers.length)
            ]
          );
          newArray.push(
            symbols[
              Math.floor(Math.random() * symbols.length)
            ]
          );
        }
      }

      const newPassword = shuffleArray(newArray).join("");
      
      if (password.length > passLength) {
        setPassword(newPassword.slice(0, passLength).toString());
      }
      setPassword(newPassword);
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
        <GenerateButton onClick={generatePassword} />
      </BottomSectionDiv>
    </StyledCard>
  );
}
